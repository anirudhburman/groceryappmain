package com.grocery.service;


import com.grocery.exception.AddressNotFoundException;
import com.grocery.exception.CustomerNotFoundException;
import com.grocery.model.AddressModel;
import com.grocery.model.CustomerModel;

public interface AddressService {
	
	public AddressModel addAddress(AddressModel address);
	
	public AddressModel updateAddress(AddressModel address) throws AddressNotFoundException;
	
	public String deleteAddressById(Integer addressId)  throws AddressNotFoundException;
	
	public AddressModel getAddressById(Integer id) throws AddressNotFoundException;
	
	public CustomerModel getCustomerByAddressId(Integer id) throws CustomerNotFoundException;
}
