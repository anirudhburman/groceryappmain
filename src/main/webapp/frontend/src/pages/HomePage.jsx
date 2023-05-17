import React, { useContext } from "react";
import Navbar from "../components/common/Navbar";
import AdminNavbar from "./admin/AdminNavbar";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Home from "../components/Home.tsx";
import { AuthContext } from "../context/AuthContext";

export default function HomePage() {
	const { isAdmin } = useContext(AuthContext);
	return (
		<>
			{isAdmin ? <AdminNavbar /> : <Navbar />}
			<Header />
			<Home />
			<Footer />
		</>
	);
}
