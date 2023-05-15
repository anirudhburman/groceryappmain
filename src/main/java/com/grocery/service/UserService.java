package com.grocery.service;

import java.util.List;

import com.grocery.dto.LoginRequestDto;
import com.grocery.exception.UserNotFoundException;
import com.grocery.model.CustomerModel;
import com.grocery.model.UserModel;

public interface UserService {
	
	public UserModel addUser(UserModel user);
	
	public UserModel loginUser(LoginRequestDto user) throws UserNotFoundException;
	
	public CustomerModel getCustomerByUserId(Integer userId);
	
	public List<UserModel> getAllUsers();
}