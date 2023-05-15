package com.grocery.repository;

import org.springframework.data.repository.CrudRepository;

import com.grocery.model.AddressModel;

public interface AddressRepository extends CrudRepository<AddressModel, Integer>{

}
