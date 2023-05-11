package com.grocery.repository;

import org.springframework.data.repository.CrudRepository;

import com.grocery.model.CustomerModel;

public interface CustomerRepository extends CrudRepository<CustomerModel, Integer>{

	public CustomerModel findByMobileNo(String mobileNo);
}
