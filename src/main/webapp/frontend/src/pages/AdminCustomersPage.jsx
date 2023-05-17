import React from "react";
import Footer from "../components/common/Footer";
import AdminNavbar from "./admin/AdminNavbar";
import AllCustomers from "./admin/AllCustomers";

export default function AdminCustomerTablePage() {
	return (
		<>
			<AdminNavbar />
			<AllCustomers />
			<Footer />
		</>
	);
}
