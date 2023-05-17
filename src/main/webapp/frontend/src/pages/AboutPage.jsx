import React, { useContext } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { AuthContext } from "../context/AuthContext";
import AdminNavbar from "./admin/AdminNavbar";
import About from "../components/About";

export default function AboutPage() {
	const { isAdmin } = useContext(AuthContext);
	return (
		<>
			{isAdmin ? <AdminNavbar /> : <Navbar />}
			<About />
			<Footer />
		</>
	);
}
