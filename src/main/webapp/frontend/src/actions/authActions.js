import {
	LOGIN_USER,
	LOGOUT_USER,
	SET_CURRENT_USER,
	SET_CUSTOMER,
	SET_IS_AUTH,
	SET_IS_ADMIN,
} from "../utils/actionTypes";

export const loginUser = (user) => ({
	type: LOGIN_USER,
	payload: user,
});

export const logoutUser = () => ({
	type: LOGOUT_USER,
});

export const setCurrentUser = (user) => ({
	type: SET_CURRENT_USER,
	payload: user,
});

export const setCustomer = (customer) => ({
	type: SET_CUSTOMER,
	payload: customer,
});

export const setIsAuth = (isAuth) => ({
	type: SET_IS_AUTH,
	payload: isAuth,
});

export const setIsAdmin = (isAdmin) => ({
	type: SET_IS_ADMIN,
	payload: isAdmin,
});
