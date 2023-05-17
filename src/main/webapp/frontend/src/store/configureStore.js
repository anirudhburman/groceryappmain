import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authReducer";

const store = configureStore({
	auth: authReducer,
});

export default store;
