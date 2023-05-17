import axios from "axios";

const baseUrl = "http://localhost:8080";

const productApi = {
	addProduct: (product) => axios.post(`${baseUrl}/addproduct`, product),
	updateProduct: (product) => axios.post(`${baseUrl}/updateproduct`, product),
	getProdById: (prodId) => axios.get(`${baseUrl}/getproductbyid/${prodId}`),
	deleteProductById: (productId) =>
		axios.get(`${baseUrl}/deleteproductbyid/${productId}`),
	searchByProductName: (productName) =>
		axios.get(`${baseUrl}/searchbyproductname?productname=${productName}`),
	searchByColour: (colour) =>
		axios.get(`${baseUrl}/searchbycolour?colour=${colour}`),
	searchByDimension: (dimension) =>
		axios.get(`${baseUrl}/searchbydimension?dimension=${dimension}`),
	filterByBrand: (brand) =>
		axios.get(`${baseUrl}/filterbybrand?brand=${brand}`),
	sortByPrice: () => axios.get(`${baseUrl}/sortbyprice`),
	getAllProducts: () => axios.get(`${baseUrl}/allproducts`),
};

export default productApi;
