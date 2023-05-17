import React from "react";
import { Link } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
import MartImg from "../assets/images/mart.jpg";

export default function Header() {
	return (
		<header>
			<div
				className="p-5 text-center bg-image"
				style={{
					backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url(${MartImg})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					position: "relative",
					height: "90vh",
				}}
			>
				<div
					className="mask"
					style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
				>
					<div className="d-flex justify-content-center align-items-center h-100">
						<div className="text-white">
							<h1 className="mb-3">
								Do not want to leave the comfort of your home to
								shop for Groceries?
							</h1>
							<h4 className="mb-3">
								We can bring you the store to your fingertips.
								Sit and Shop!
							</h4>
							<Link className="text-white" to="/all-products">
								<MDBBtn
									className="card-wrapper"
									tag="a"
									outline
									size="lg"
									style={{
										borderColor: "#EDF1D6",
										color: "#EDF1D6",
									}}
								>
									Browse Products
								</MDBBtn>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
