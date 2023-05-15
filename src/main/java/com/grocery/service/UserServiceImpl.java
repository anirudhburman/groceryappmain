package com.grocery.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grocery.dto.LoginRequestDto;
import com.grocery.exception.UserNotFoundException;
import com.grocery.model.CustomerModel;
import com.grocery.model.UserModel;
import com.grocery.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	UserRepository userRepo;
	
	@Override
	public UserModel addUser(UserModel user) {
		return userRepo.save(user);
	}

	@Override
	public UserModel loginUser(LoginRequestDto user) throws UserNotFoundException {
		Optional<UserModel> foundUser = userRepo.findByUserName(user.getUserName());
		if(foundUser.isPresent()) {
			if((foundUser.get().getUserPassword().equals(user.getPassword()))) {
				return foundUser.get();
			} else {
				throw new UserNotFoundException("Password does not match! Try again.");
			}
		} else {
			throw new UserNotFoundException("UserName not Found! Try again or Create a new Account");
		}
	}

	@Override
	public List<UserModel> getAllUsers() {
		return (List<UserModel>) userRepo.findAll();
	}

	@Override
	public CustomerModel getCustomerByUserId(Integer userId) {
		Optional<UserModel> optUser = userRepo.findById(userId);
		if(optUser.isPresent()) {
			UserModel user = optUser.get();
			return user.getCustomer();
		}
		return null;
	}

}
