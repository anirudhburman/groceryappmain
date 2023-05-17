import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import AllProducts from "../components/AllProducts";

export default function ProductPage() {
	return (
		<>
			<Navbar />
			<AllProducts />
			<Footer />
		</>
	);
}
