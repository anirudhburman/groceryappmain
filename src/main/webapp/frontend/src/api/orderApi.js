import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const addOrder = (cartId, total) => {
	return axios.post(`${BASE_URL}/addorder/${cartId}/${total}`);
};

export const cancelOrderById = (id) => {
	return axios.get(`${BASE_URL}/cancelorderbyid/${id}`);
};

export const cancelAProduct = (orderId, productId) => {
	return axios.post(`${BASE_URL}/cancelproduct/${orderId}/${productId}`);
};

export const updateOrder = (order) => {
	return axios.post(`${BASE_URL}/updateorder`, order);
};

export const getOrderById = (id) => {
	return axios.get(`${BASE_URL}/getorderbyid/${id}`);
};
