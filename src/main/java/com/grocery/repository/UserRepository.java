package com.grocery.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.grocery.model.UserModel;

public interface UserRepository extends CrudRepository<UserModel, Integer>{
	
	public Optional<UserModel> findByUserName(String userName);
}
