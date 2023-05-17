import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import PastOrders from "../components/PastOrders";

export default function PastOrdersPage() {
	return (
		<>
			<Navbar />
			<PastOrders />
			<Footer />
		</>
	);
}
