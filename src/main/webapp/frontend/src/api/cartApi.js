import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const viewCart = (id) => {
	return axios.get(`${BASE_URL}/viewcart/${id}`);
};

export const addProdToCart = (cartId, prodId) => {
	return axios.post(`${BASE_URL}/addproducttocart/${cartId}/${prodId}`);
};

export const deleteProdFromCart = (cartId, prodId) => {
	return axios.post(`${BASE_URL}/deleteproductfromcart/${cartId}/${prodId}`);
};

export const getCartProds = (id) => {
	return axios.get(`${BASE_URL}/getcartproducts/${id}`);
};
