package com.grocery.repository;

import org.springframework.data.repository.CrudRepository;

import com.grocery.model.WishlistModel;

public interface WishlistRepository extends CrudRepository<WishlistModel, Integer>{

}
