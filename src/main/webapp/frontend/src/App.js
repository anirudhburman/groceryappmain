import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishListPage";
import ProductPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import EditProfilePage from "./pages/EditProfilePage";
import LoginPage from "./pages/LoginPage";
import PastOrdersPage from "./pages/PastOrdersPage";
import AddProductFrom from "./pages/admin/AddProductForm";
import AllCustomers from "./pages/admin/AllCustomers";
import { AuthContext } from "./context/AuthContext";
import EditProductForm from "./pages/admin/EditProduct";
import Invoice from "./components/Invoice";
import AdminProductTablePage from "./pages/AdminProductTablePage";
import AdminCustomerTablePage from "./pages/AdminCustomersPage";

function App() {
	const { isAuth, isAdmin } = useContext(AuthContext);
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route
					path="/register"
					element={
						isAuth && !isAdmin ? <HomePage /> : <RegisterPage />
					}
				/>
				<Route
					path="/profile"
					element={
						isAuth && !isAdmin ? <ProfilePage /> : <LoginPage />
					}
				/>
				<Route
					path="/edit-profile"
					element={
						isAuth && !isAdmin ? <EditProfilePage /> : <LoginPage />
					}
				/>
				<Route
					path="/cart"
					element={isAuth && !isAdmin ? <CartPage /> : <LoginPage />}
				/>
				<Route
					path="/wishlist"
					element={
						isAuth && !isAdmin ? <WishlistPage /> : <LoginPage />
					}
				/>
				<Route
					path="/all-products"
					element={
						isAuth && !isAdmin ? <ProductPage /> : <LoginPage />
					}
				/>
				<Route
					path="/invoice"
					element={isAuth && !isAdmin ? <Invoice /> : <LoginPage />}
				/>
				<Route
					path="/your-orders"
					element={
						isAuth && !isAdmin ? <PastOrdersPage /> : <LoginPage />
					}
				/>

				<Route
					path="/admin/add-product"
					element={isAdmin ? <AddProductFrom /> : <LoginPage />}
				/>
				<Route
					path="/admin/edit-product"
					element={isAdmin ? <EditProductForm /> : <LoginPage />}
				/>
				<Route
					path="/admin/products"
					element={
						isAdmin ? <AdminProductTablePage /> : <LoginPage />
					}
				/>
				<Route
					path="/admin/all-customers"
					element={
						isAdmin ? <AdminCustomerTablePage /> : <LoginPage />
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;
