package com.grocery.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.grocery.exception.AddressNotFoundException;
import com.grocery.exception.CustomerNotFoundException;
import com.grocery.model.AddressModel;
import com.grocery.model.CustomerModel;
import com.grocery.service.AddressService;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class AddressController {

	@Autowired
	AddressService addrSer;
	
	private static final Logger logger = LogManager.getLogger(AddressController.class);

	// http://localhost:8080/addaddress
	@PostMapping("/addaddress")
	public AddressModel addAddress(@RequestBody AddressModel address) {
		logger.info("Address added");
		return addrSer.addAddress(address);
	}

	// http://localhost:8080/updateaddress
	@PostMapping("/updateaddress")
	public AddressModel updateAddress(@RequestBody AddressModel address) throws AddressNotFoundException {
		return addrSer.updateAddress(address);
	}

	/**
	 * http://localhost:8080/deleteaddress/{id}
	 * @param addressId
	 * @return
	 * @throws AddressNotFoundException
	 */
	@GetMapping("/deleteaddress/{id}")
	public String deleteAddressById(@PathVariable("id") Integer addressId) throws AddressNotFoundException {
		return addrSer.deleteAddressById(addressId);
	}
	
	/**
	 * http://localhost:8080/getaddress/{id}
	 * @param id
	 * @return
	 * @throws AddressNotFoundException
	 */
	@GetMapping("/getaddress/{id}")
	public AddressModel getAddressById(@PathVariable("id") Integer id) throws AddressNotFoundException {
		return addrSer.getAddressById(id);
	}
	
	/**
	 * http://localhost:8080/getcustomerbyaddressid/{id}
	 * @param id
	 * @return
	 * @throws CustomerNotFoundException
	 */
	@GetMapping("/getcustomerbyaddressid/{id}")
	public CustomerModel getCustomerByAddressId(@PathVariable("id") Integer id) throws CustomerNotFoundException {
		return addrSer.getCustomerByAddressId(id);
	}
}
