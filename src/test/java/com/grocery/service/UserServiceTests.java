package com.grocery.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;

import com.grocery.model.UserModel;
import com.grocery.repository.UserRepository;

@ExtendWith(MockitoExtension.class)
@SpringBootTest
class UserServiceTests {
	
	@Mock
	UserRepository UserRepo;
	
	@InjectMocks
	UserServiceImpl userSer;
	
	private UserModel user;
	private List<UserModel> users;
	
	@BeforeEach
	public void setup() {
		user = new UserModel();
		user.setUserId(1);
		user.setUserName("Puthin");
		
		users = new ArrayList<UserModel>();
		users.add(new UserModel("puthin", 1, null, null));
		users.add(user);
	}
	
	@Test
	void testAddUser() {
		
		when(UserRepo.save(user)).thenReturn(user);
		
		UserModel usr = userSer.addUser(user);
		
		assertEquals(usr, user);
	}
	
	@Test
	void testGetAllUsers() {
		
		when(UserRepo.findAll()).thenReturn(users);
		
		List<UserModel> allUsers = userSer.getAllUsers();
		
		assertEquals(users, allUsers);
	}
	
}
