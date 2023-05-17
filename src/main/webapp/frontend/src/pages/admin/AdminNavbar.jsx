import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import {
	MDBNavbar,
	MDBContainer,
	MDBIcon,
	MDBNavbarToggler,
	MDBCollapse,
	MDBBtn,
} from "mdb-react-ui-kit";
import "../../components/assets/styles/navbar.css";

export default function AdminNavbar() {
	const navigate = useNavigate();
	const { currentUser, isAuth, logout } = useContext(AuthContext);
	const [showAnimated3, setShowAnimated3] = useState(false);
	// var cartLen = customer.cart.products.length;

	return (
		<>
			<MDBNavbar
				dark
				style={{ backgroundColor: "#609966" }}
				className="m-auto p-auto pt-3 pb-3"
			>
				<MDBContainer fluid>
					<Link className="text-white" to="/">
						<div className="text-white">
							<MDBIcon
								fas
								icon="fas fa-hiking fa-2x me-2"
								style={{ color: "#EDF1D6" }}
							/>
							CG MART ADMIN{" "}
						</div>
					</Link>
					<div>
						{isAuth ? (
							<MDBBtn
								rounded
								onClick={() => {
									logout();
									navigate("/login");
								}}
								className="me-1 mb-0"
								size="sm"
								color="dark"
							>
								Logout
							</MDBBtn>
						) : (
							<>
								<MDBBtn
									onClick={() => navigate("/login")}
									rounded
									className="me-1 mb-0"
									size="sm"
									color="dark"
								>
									Login
								</MDBBtn>
								<MDBBtn
									onClick={() => navigate("/register")}
									rounded
									className="me-1 mb-0"
									size="sm"
									color="dark"
								>
									Register
								</MDBBtn>
							</>
						)}
						<MDBNavbarToggler
							type="button"
							className="third-button"
							data-target="#navbarToggleExternalContent"
							aria-controls="navbarToggleExternalContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
							onClick={() => {
								setShowAnimated3(!showAnimated3);
							}}
						>
							<div
								className={`animated-icon3 ${
									showAnimated3 && "open"
								}`}
							>
								<span></span>
								<span></span>
								<span></span>
							</div>
						</MDBNavbarToggler>
					</div>
				</MDBContainer>
			</MDBNavbar>

			<MDBCollapse show={showAnimated3}>
				<div
					style={{ backgroundColor: "#609966" }}
					className="shadow-3 p-4"
				>
					<MDBBtn
						block
						className="border-bottom m-0"
						style={{ backgroundColor: "#609966" }}
					>
						<Link className="text-white" to="/">
							Home
						</Link>
					</MDBBtn>
					<MDBBtn
						block
						className="border-bottom m-0"
						style={{ backgroundColor: "#609966" }}
					>
						<Link className="text-white" to="/about">
							About us
						</Link>
					</MDBBtn>
					<MDBBtn
						block
						className="border-bottom m-0"
						style={{ backgroundColor: "#609966" }}
					>
						<Link className="text-white" to="/admin/products">
							Browse Products
						</Link>
					</MDBBtn>
					<MDBBtn
						block
						className="border-bottom m-0"
						style={{ backgroundColor: "#609966" }}
					>
						<Link className="text-white" to="/admin/add-product">
							Add a New Product
						</Link>
					</MDBBtn>
					<MDBBtn
						block
						className="border-bottom m-0"
						style={{ backgroundColor: "#609966" }}
					>
						<Link className="text-white" to="/admin/all-customers">
							View All Customers
						</Link>
					</MDBBtn>
				</div>
			</MDBCollapse>
		</>
		// </section>
	);
}
