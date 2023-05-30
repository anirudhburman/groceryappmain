package com.grocery.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grocery.exception.CustomerAlreadyExistsException;
import com.grocery.exception.CustomerNotFoundException;
import com.grocery.model.CartModel;
import com.grocery.model.CustomerModel;
import com.grocery.model.OrderModel;
import com.grocery.model.ProductModel;
import com.grocery.model.UserModel;
import com.grocery.model.WishlistModel;
import com.grocery.repository.CustomerRepository;

@Service
public class CustomerServiceImpl implements CustomerService {
	
	@Autowired
	CustomerRepository custRepo;
	
	private static final Logger logger = LogManager.getLogger(CustomerServiceImpl.class);
	
	@Override
	public CustomerModel addCustomer(CustomerModel customer) throws CustomerAlreadyExistsException {
		
		if(custRepo.findByMobileNo(customer.getMobileNo()) != null) {
			throw new CustomerAlreadyExistsException();
		}
		
		List<ProductModel> prods = new ArrayList<>();
		WishlistModel wishList = new WishlistModel();
		wishList.setProducts(prods);
		wishList.setQuantity(0);
		CartModel cart = new CartModel();
		cart.setProducts(prods);
		cart.setQuantity(0);
		UserModel user = customer.getUser();
		user.setUserType("Customer");
		customer.setUser(user);
		customer.setWishlist(wishList);
		customer.setCart(cart);
		return custRepo.save(customer);
	}

	@Override
	public CustomerModel getCustomerById(Integer custId) throws CustomerNotFoundException {
		if(custRepo.existsById(custId)) {
			logger.info("Customer exists in DB");
			Optional<CustomerModel> cust = custRepo.findById(custId);
			if(cust.isPresent()) {
				return cust.get();
			} else {
				throw new CustomerNotFoundException();
			}
		}
		throw new CustomerNotFoundException();
	}

	@Override
	public List<CustomerModel> getAllCustomers() {
		return (List<CustomerModel>) custRepo.findAll();
	}

	@Override
	public CustomerModel updateCustomer(CustomerModel cust) throws CustomerNotFoundException {
		if(custRepo.existsById(cust.getCustomerId())) {
			CustomerModel customer = custRepo.findById(cust.getCustomerId()).get();
			customer.setAddress(cust.getAddress());
			customer.setUser(cust.getUser());
			customer.setCustomerName(cust.getCustomerName());
			customer.setEmail(cust.getEmail());
			customer.setMobileNo(cust.getMobileNo());
			custRepo.save(customer);
			return customer;
		}
		throw new CustomerNotFoundException();
	}

	@Override
	public String deleteCustomer(CustomerModel cust) throws CustomerNotFoundException {
		if(custRepo.existsById(cust.getCustomerId())) {
			custRepo.delete(cust);
			return "Customer Deleted";
		}
		throw new CustomerNotFoundException();
	}

	@Override
	public String deleteCustomerById(Integer custId) throws CustomerNotFoundException {
		if(custRepo.existsById(custId)) {
			custRepo.deleteById(custId);
			return "Deleted Customer by ID";
		}
		throw new CustomerNotFoundException();
	}

	@Override
	public List<OrderModel> getOrdersByCustomerId(Integer custId) throws CustomerNotFoundException {
		if(!custRepo.existsById(custId)) {
			throw new CustomerNotFoundException();
		}
		Optional<CustomerModel> cust = custRepo.findById(custId);
		if(cust.isPresent()) {
			return cust.get().getOrders();
		}
		throw new CustomerNotFoundException();
	}

	@Override
	public CartModel getCartByCustId(Integer custId) throws CustomerNotFoundException {
		if(!custRepo.existsById(custId)) {
			throw new CustomerNotFoundException();
		}
		Optional<CustomerModel> cust = custRepo.findById(custId);
		if(cust.isPresent()) {
			return cust.get().getCart();
		}
		throw new CustomerNotFoundException();
		
	}

	@Override
	public WishlistModel getWishListByCustId(Integer id) throws CustomerNotFoundException {
		if(!custRepo.existsById(id)) {
			throw new CustomerNotFoundException();
		}
		Optional<CustomerModel> cust = custRepo.findById(id);
		if(cust.isPresent()) {
			return cust.get().getWishlist();
		}
		throw new CustomerNotFoundException();
	}

}
