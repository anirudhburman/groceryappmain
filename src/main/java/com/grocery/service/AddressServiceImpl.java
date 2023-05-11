package com.grocery.service;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.grocery.exceptions.AddressNotFoundException;
import com.grocery.exceptions.CustomerNotFoundException;
import com.grocery.model.AddressModel;
import com.grocery.model.CustomerModel;
import com.grocery.repositories.AddressRepository;

@Service
public class AddressServiceImpl implements AddressService {
	
	@Autowired
	AddressRepository addrRepo;
	
	private static final Logger logger = LogManager.getLogger(AddressServiceImpl.class);

	@Override
	public AddressModel addAddress(AddressModel address) {
		return addrRepo.save(address);
	}

	@Override
	public AddressModel updateAddress(AddressModel address) throws AddressNotFoundException {
		if(addrRepo.existsById(address.getAddressId())) {
			return addrRepo.save(address);
		}
		logger.error("Not found Address");
		throw new AddressNotFoundException();
	}

	@Override
	public String deleteAddressById(Integer addressId) throws AddressNotFoundException {
		if(addrRepo.existsById(addressId)) {
			addrRepo.deleteById(addressId);
			return "Address deleted successfully";
		}
		throw new AddressNotFoundException();
	}

	@Override
	public AddressModel getAddressById(Integer id) throws AddressNotFoundException {
		if(addrRepo.existsById(id)) {
			return addrRepo.findById(id).get();
		}
		throw new AddressNotFoundException();
	}

	@Override
	public CustomerModel getCustomerByAddressId(Integer id) throws CustomerNotFoundException {
		if(addrRepo.existsById(id)) {
			return addrRepo.findById(id).get().getCustomer();
		}
		throw new CustomerNotFoundException();
	}
}
