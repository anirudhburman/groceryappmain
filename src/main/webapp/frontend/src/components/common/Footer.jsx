import React from "react";
import { Link } from "react-router-dom";
import {
	MDBFooter,
	MDBContainer,
	MDBCol,
	MDBRow,
	MDBBtn,
} from "mdb-react-ui-kit";
import { getCurrentYear } from "../../utils/helpers";

export default function Footer() {
	return (
		<MDBFooter
			className="text-center text-white footer"
			style={{ backgroundColor: "#40513B" }}
		>
			<MDBContainer className="p-4 pb-0">
				<section className="">
					<p className="d-flex justify-content-center align-items-center">
						<span className="me-3">
							Browse our wide range of Products
						</span>
						<Link
							className="text-white card-wrapper"
							to="/all-products"
						>
							<MDBBtn type="button" outline color="light" rounded>
								Show me
							</MDBBtn>
						</Link>
					</p>
				</section>
			</MDBContainer>

			<div
				className="text-center p-3"
				style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
			>
				© {getCurrentYear()} Copyright{" "}
				<a className="text-white" href="/">
					CGMart.com
				</a>
			</div>
		</MDBFooter>
	);
}
