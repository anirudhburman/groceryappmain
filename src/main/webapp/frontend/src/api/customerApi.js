import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const addCustomer = async (cust, address, user) => {
	const customer = {
		address: address,
		user: user,
		customerName: cust.customerName,
		email: cust.email,
		mobileNo: cust.mobileNo,
	};
	console.log(customer);
	return await axios.post(`${BASE_URL}/addcust`, customer);
};

export const getCustomerById = async (customerId) => {
	return await axios.get(`${BASE_URL}/getcustomerbyid/${customerId}`);
	// .then((response) => response.data)
	// .catch((error) => console.error(`Error adding user: ${error}`));
};

export const getAllCustomers = async () => {
	return await axios.get(`${BASE_URL}/getallcustomers`);
	// .then((response) => response.data)
	// .catch((error) => console.error(`Error adding user: ${error}`));
};

export const updateCustomer = async (cust, address, user) => {
	const customer = {
		address: address,
		user: user,
		customerId: cust.customerId,
		customerName: cust.customerName,
		email: cust.email,
		mobileNo: cust.mobileNo,
	};
	console.log("UPDATE API CALLED");
	console.log(customer);
	return await axios.post(`${BASE_URL}/updatecustomer`, customer);
	// .then((response) => response.data)
	// .catch((error) => console.error(`Error adding user: ${error}`));
};

export const deleteCustomer = async (customer) => {
	return await axios.post(`${BASE_URL}/deletecustomer`, customer);
	// .then((response) => response.data)
	// .catch((error) => console.error(`Error adding user: ${error}`));
};

export const deleteCustomerById = async (customerId) => {
	return await axios.get(`${BASE_URL}/deletecust/${customerId}`);
	// .then((response) => response.data)
	// .catch((error) => console.error(`Error adding user: ${error}`));
};

export const getOrdersByCustomerId = async (customerId) => {
	return await axios.get(`${BASE_URL}/getordersbycustid/${customerId}`);
	// .then((response) => response.data)
	// .catch((error) => console.error(`Error adding user: ${error}`));
};

export const getCartByCustId = async (customerId) => {
	return await axios.get(`${BASE_URL}/getcartbycustid/${customerId}`);
	// .then((response) => response.data)
	// .catch((error) => console.error(`Error adding user: ${error}`));
};

export const getWishListByCustId = async (customerId) => {
	return await axios.get(`${BASE_URL}/getwishlistbycustid/${customerId}`);
	// .then((response) => response.data)
	// .catch((error) => console.error(`Error adding user: ${error}`));
};
