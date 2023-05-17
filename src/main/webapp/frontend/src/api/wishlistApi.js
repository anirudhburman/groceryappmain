import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const WishApi = {
	viewWishlist: (id) => axios.get(`${BASE_URL}/getwishlist/${id}`),
	addProductToWishlist: (wishId, prodId) =>
		axios.post(`${BASE_URL}/addproducttowishlist/${wishId}/${prodId}`),
	deleteProductFromWishlist: (wishId, prodId) =>
		axios.post(`${BASE_URL}/deleteproductfromwishlist/${wishId}/${prodId}`),
	getAllWishProducts: (wishId) =>
		axios.get(`${BASE_URL}/getwishproducts/${wishId}`),
};
