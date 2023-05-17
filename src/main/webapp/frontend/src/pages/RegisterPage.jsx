import React from "react";
import RegisterForm from "../components/RegisterForm";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";

export default function RegisterPage() {
	return (
		<>
			<Navbar />
			<RegisterForm />
			<Footer />
		</>
	);
}
