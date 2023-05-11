package com.grocery.repository;

import org.springframework.data.repository.CrudRepository;

import com.grocery.model.OrderModel;

public interface OrderRepository extends CrudRepository<OrderModel, Integer>{

}
