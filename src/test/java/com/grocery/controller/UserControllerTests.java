package com.grocery.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grocery.dto.LoginRequestDto;
import com.grocery.exception.UserNotFoundException;
import com.grocery.model.CustomerModel;
import com.grocery.model.UserModel;
import com.grocery.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
public class UserControllerTests {

    private MockMvc mockMvc;

    @Mock
    private UserService userService;

    @InjectMocks
    private UserController userController;

    @BeforeEach
    public void setup() {
        mockMvc = MockMvcBuilders.standaloneSetup(userController).build();
    }

    @Test
    public void testAddUser() throws Exception {
        // Mock the behavior of the userService
        when(userService.addUser(any(UserModel.class))).thenReturn(new UserModel());

        UserModel user = new UserModel();
        mockMvc.perform(post("/adduser")
                .contentType(MediaType.APPLICATION_JSON)
                .content(asJsonString(user)))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.id").exists()); // Assuming UserModel has an "id" field
    }

    @Test
    public void testLoginUser() throws Exception {
        // Mock the behavior of the userService
        when(userService.loginUser(any(LoginRequestDto.class))).thenReturn(new UserModel());

        LoginRequestDto user = new LoginRequestDto();
        mockMvc.perform(post("/loginuser")
                .contentType(MediaType.APPLICATION_JSON)
                .content(asJsonString(user)))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.id").exists()); // Assuming UserModel has an "id" field
    }

    @Test
    public void testGetAllUsers() throws Exception {
        // Mock the behavior of the userService
        List<UserModel> users = new ArrayList<>();
        users.add(new UserModel());
        when(userService.getAllUsers()).thenReturn(users);

        mockMvc.perform(get("/getallusers"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$").isArray())
                .andExpect(jsonPath("$.length()").value(users.size()));
    }

    @Test
    public void testGetCustByUserId() throws Exception {
        // Mock the behavior of the userService
        CustomerModel customer = new CustomerModel();
        when(userService.getCustomerByUserId(anyInt())).thenReturn(customer);

        mockMvc.perform(get("/getcustbyuserid/{userId}", 123))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.id").exists()); // Assuming CustomerModel has an "id" field
    }

    // Utility method to convert object to JSON string
    private String asJsonString(final Object obj) {
        try {
            return new ObjectMapper().writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
