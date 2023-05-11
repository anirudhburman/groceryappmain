package com.grocery.repository;

import org.springframework.data.repository.CrudRepository;

import com.grocery.model.CartModel;

public interface CartRepository extends CrudRepository<CartModel, Integer>{

}
