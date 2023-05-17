import React from "react";
import Footer from "../components/common/Footer";
import AdminNavbar from "./admin/AdminNavbar";
import AdminProducts from "./admin/AdminProducts";

export default function AdminProductTablePage() {
	return (
		<>
			<AdminNavbar />
			<AdminProducts />
			<Footer />
		</>
	);
}
