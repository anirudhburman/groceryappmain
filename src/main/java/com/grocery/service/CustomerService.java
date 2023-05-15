package com.grocery.service;

import java.util.List;

import com.grocery.exception.CustomerAlreadyExistsException;
import com.grocery.exception.CustomerNotFoundException;
import com.grocery.model.CartModel;
import com.grocery.model.CustomerModel;
import com.grocery.model.OrderModel;
import com.grocery.model.WishlistModel;

public interface CustomerService {
	
	public CustomerModel addCustomer(CustomerModel customer) throws CustomerAlreadyExistsException;
	
	public CustomerModel getCustomerById(Integer custId) throws CustomerNotFoundException;
	
	public List<CustomerModel> getAllCustomers();
	
	public CustomerModel updateCustomer(CustomerModel cust) throws CustomerNotFoundException;
	
	public String deleteCustomer(CustomerModel cust) throws CustomerNotFoundException;
	
	public String deleteCustomerById(Integer custId) throws CustomerNotFoundException;
	
	public List<OrderModel> getOrdersByCustomerId(Integer custId) throws CustomerNotFoundException;
	
	public CartModel getCartByCustId(Integer custId) throws CustomerNotFoundException;
	
	public WishlistModel getWishListByCustId(Integer id) throws CustomerNotFoundException;
	
}
