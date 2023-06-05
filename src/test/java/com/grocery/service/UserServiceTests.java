package com.grocery.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import com.grocery.dto.LoginRequestDto;
import com.grocery.exception.UserNotFoundException;
import com.grocery.model.CustomerModel;
import com.grocery.model.UserModel;
import com.grocery.repository.UserRepository;

@SpringBootTest
class UserServiceTests {

	@Mock
	private UserRepository userRepository;

	@InjectMocks
	private UserServiceImpl userService;

	private UserModel user;
	private LoginRequestDto loginRequest;
	private CustomerModel customer;

	@BeforeEach
	void setup() {
		user = new UserModel();
		user.setUserId(1);
		user.setUserName("testuser");
		user.setUserPassword("password");
		loginRequest = new LoginRequestDto();
		loginRequest.setUserName("testuser");
		loginRequest.setPassword("password");
		customer = new CustomerModel();
		customer.setCustomerId(1);
		user.setCustomer(customer);
	}

	@Test
     void testAddUser() {
        when(userRepository.save(any(UserModel.class))).thenReturn(user);
        UserModel result = userService.addUser(user);
        assertNotNull(result);
        assertEquals(user, result);
    }

	@Test
     void testLoginUser_ValidCredentials() throws UserNotFoundException {
        when(userRepository.findByUserName(loginRequest.getUserName())).thenReturn(Optional.of(user));
        UserModel result = userService.loginUser(loginRequest);
        assertNotNull(result);
        assertEquals(user, result);
    }

	@Test
	void testLoginUser_IncorrectPassword() {
		user.setUserPassword("incorrectpassword");
		when(userRepository.findByUserName(loginRequest.getUserName())).thenReturn(Optional.of(user));
		assertThrows(UserNotFoundException.class, () -> userService.loginUser(loginRequest));
	}

	@Test
     void testLoginUser_UserNameNotFound() {
        when(userRepository.findByUserName(loginRequest.getUserName())).thenReturn(Optional.empty());
        assertThrows(UserNotFoundException.class, () -> userService.loginUser(loginRequest));
    }

	@Test
	void testGetAllUsers() {
		List<UserModel> users = new ArrayList<>();
		users.add(user);
		when(userRepository.findAll()).thenReturn(users);
		List<UserModel> result = userService.getAllUsers();
		assertNotNull(result);
		assertEquals(users, result);
	}

	@Test
     void testGetCustomerByUserId_ExistingUser() {
        when(userRepository.findById(user.getUserId())).thenReturn(Optional.of(user));
        CustomerModel result = userService.getCustomerByUserId(user.getUserId());
        assertNotNull(result);
        assertEquals(customer, result);
    }

	@Test
     void testGetCustomerByUserId_NonExistingUser() {
        when(userRepository.findById(user.getUserId())).thenReturn(Optional.empty());
        CustomerModel result = userService.getCustomerByUserId(user.getUserId());
        assertNull(result);
    }
}
