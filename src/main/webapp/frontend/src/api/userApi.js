import axios from "axios";

const BASE_URL = "http://localhost:8080";

const userApi = {
	addUser(user) {
		return axios.post(`${BASE_URL}/adduser`, user);
		// .then(response => response.data)
	},

	loginUser(user) {
		return axios.post(`${BASE_URL}/loginuser`, user);
		// .then((response) => response.data)
		// .catch((error) => console.error(`Error logging in: ${error}`));
	},

	getAllUsers() {
		return axios
			.get(`${BASE_URL}/getallusers`)
			.then((response) => response.data)
			.catch((error) =>
				console.error(`Error getting all users: ${error}`)
			);
	},

	getCustomer(id) {
		return axios.get(`${BASE_URL}/getcustbyuserid/${id}`, id);
	},
};

export default userApi;
