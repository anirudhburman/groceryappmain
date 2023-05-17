import {
	LOGIN_USER,
	LOGOUT_USER,
	SET_CURRENT_USER,
	SET_CUSTOMER,
	SET_IS_AUTH,
	SET_IS_ADMIN,
} from "../utils/actionTypes";

const initialState = {
	currentUser: {
		userId: 0,
		userName: "",
		userPassword: "",
		userType: "",
	},
	customer: {
		customerId: 0,
		customerName: "",
		mobileNo: "",
		email: "",
		address: {},
		user: {},
		cart: { cartId: 0, products: [], quantity: 0 },
		wishlist: { wishlistId: 0, products: [], quantity: 0 },
		orders: [],
	},
	isAuth: false,
	isAdmin: false,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_USER:
			return {
				...state,
				currentUser: action.payload,
				isAuth: true,
				isAdmin: action.payload.userType === "admin",
			};
		case LOGOUT_USER:
			return {
				...state,
				currentUser: initialState.currentUser,
				customer: initialState.customer,
				isAuth: false,
				isAdmin: false,
			};
		case SET_CURRENT_USER:
			return {
				...state,
				currentUser: action.payload,
			};
		case SET_CUSTOMER:
			return {
				...state,
				customer: action.payload,
			};
		case SET_IS_AUTH:
			return {
				...state,
				isAuth: action.payload,
			};
		case SET_IS_ADMIN:
			return {
				...state,
				isAdmin: action.payload,
			};
		default:
			return state;
	}
};

export default authReducer;
