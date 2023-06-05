package com.grocery.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.grocery.exception.CustomerAlreadyExistsException;
import com.grocery.exception.CustomerNotFoundException;
import com.grocery.exception.EmptyCartException;
import com.grocery.exception.EmptyWishListException;
import com.grocery.model.CartModel;
import com.grocery.model.CustomerModel;
import com.grocery.model.OrderModel;
import com.grocery.model.WishlistModel;
import com.grocery.service.CustomerService;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class CustomerController {

	@Autowired
	CustomerService custSer;

	// http://localhost:8080/addcust
	@PostMapping("/addcust")
	public CustomerModel addCust(@RequestBody CustomerModel cust) throws CustomerAlreadyExistsException {
		return custSer.addCustomer(cust);
	}

	/**
	 *  http://localhost:8080/getcustomerbyid/{id}
	 * @param custId
	 * @return
	 * @throws CustomerNotFoundException
	 */
	@GetMapping("/getcustomerbyid/{id}")
	public CustomerModel getCustomerById(@PathVariable("id") Integer custId) throws CustomerNotFoundException {
		return custSer.getCustomerById(custId);
	}

	// http://localhost:8080/getallcustomers
	@GetMapping("/getallcustomers")
	public List<CustomerModel> getAllCustomers() {
		return custSer.getAllCustomers();
	}

	// http://localhost:8080/updatecustomer
	@PostMapping("/updatecustomer")
	public CustomerModel updateCustomer(@RequestBody CustomerModel cust) throws CustomerNotFoundException {
		return custSer.updateCustomer(cust);
	}

	// http://localhost:8080/deletecustomer
	@PostMapping("/deletecustomer")
	public String deleteCustomer(@RequestBody CustomerModel cust) throws CustomerNotFoundException {
		return custSer.deleteCustomer(cust);
	}

	/**
	 *  http://localhost:8080/deletecust/{id}
	 * @param custId
	 * @return
	 * @throws CustomerNotFoundException
	 */
	@GetMapping("/deletecust/{id}")
	public String deleteCustomerById(@PathVariable("id") Integer custId) throws CustomerNotFoundException {
		return custSer.deleteCustomerById(custId);
	}
	
	/**
	 *  http://localhost:8080/getordersbycustid/{id}
	 * @param custId
	 * @return
	 * @throws CustomerNotFoundException
	 */
	@GetMapping("/getordersbycustid/{id}")
	public List<OrderModel> getOrdersByCustomerId(@PathVariable("id") Integer custId) throws CustomerNotFoundException {
		return custSer.getOrdersByCustomerId(custId);
	}
	
	/**
	 *  http://localhost:8080/getcartbycustid/{id}
	 * @param custId
	 * @return
	 * @throws EmptyCartException
	 * @throws CustomerNotFoundException
	 */
	@GetMapping("/getcartbycustid/{id}")
	public CartModel getCartByCustId(@PathVariable("id") Integer custId) throws CustomerNotFoundException {
		return custSer.getCartByCustId(custId);
	}
	
	/**
	 *  http://localhost:8080/getwishlistbycustid/{id}
	 * @param id
	 * @return
	 * @throws EmptyWishListException
	 * @throws CustomerNotFoundException
	 */
	@GetMapping("/getwishlistbycustid/{id}")
	public WishlistModel getWishListByCustId(@PathVariable("id") Integer id) throws CustomerNotFoundException {
		return custSer.getWishListByCustId(id);
	}
}
