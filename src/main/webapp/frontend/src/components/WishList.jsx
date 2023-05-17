import React, { useState, useEffect, useContext } from "react";
import {
	MDBCol,
	MDBContainer,
	MDBRow,
	MDBTypography,
	MDBIcon,
	MDBBtn,
} from "mdb-react-ui-kit";
import CartCard from "./common/CartCard";
import { WishApi } from "../api/wishlistApi";
import { AuthContext } from "../context/AuthContext";

export default function WishList() {
	const { customer } = useContext(AuthContext);
	const [prods, setProds] = useState([]);
	let wishId = customer.wishlist.wishlistId;
	let mybutton;

	window.onscroll = function () {
		mybutton = document.getElementById("btn-back-to-top");
		scrollFunction(mybutton);
	};

	function scrollFunction(mybutton) {
		if (
			document.body.scrollTop > 20 ||
			document.documentElement.scrollTop > 20
		) {
			mybutton.style.display = "block";
		} else {
			mybutton.style.display = "none";
		}
	}

	function backToTop() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}

	useEffect(() => {
		// Call the API to get cart products when component mounts
		/** props.match.params.id */
		const fetch = async () => {
			await WishApi.getAllWishProducts(wishId)
				.then((response) => {
					console.log(response.data);
					setProds(response.data);
				})
				.catch((error) => console.log(error.response.data));
		};
		fetch();
	}, [wishId]);
	// , [props.match.params.id]);

	if (!prods || prods.length === 0) {
		return (
			<div style={{ height: "100vh" }}>
				<h1 style={{ color: "#40513B" }}>
					WISHLIST EMPTY!! You must want something right? GO CHOOSE!!
				</h1>
			</div>
		);
	}

	return (
		<section className="h-100">
			<MDBContainer className="py-5 h-100">
				<MDBBtn
					onClick={backToTop}
					id="btn-back-to-top"
					style={{
						position: "fixed",
						bottom: "20px",
						right: "20px",
						display: "none",
					}}
					className="btn-floating"
					color="success"
					size="lg"
				>
					<MDBIcon fas icon="arrow-up" />
				</MDBBtn>
				<MDBRow className="justify-content-center align-items-center h-100">
					<MDBCol md="10">
						<div className="d-flex justify-content-between align-items-center mb-4">
							<MDBTypography
								style={{ color: "#40513B" }}
								tag="h3"
								className="fw-normal mb-0 text-black"
							>
								Your Personal Wishlist
							</MDBTypography>
						</div>

						{prods?.map((prod) => {
							function handleAdd(p) {
								console.log("Add button clicked");
								const fetch = async (id) => {
									return await WishApi.addProductToWishlist(
										wishId,
										id
									)
										.then((res) => {
											console.log(res.data);
											setProds(res.data);
										})
										.catch((err) =>
											console.log(err.response.data)
										);
								};
								fetch(p.id);
								window.scrollTo(0, document.body.scrollHeight);
							}

							function handleDelete(p) {
								console.log("Delete button clicked");
								const fetch = async (id) => {
									return await WishApi.deleteProductFromWishlist(
										wishId,
										id
									)
										.then((res) => {
											console.log(res.data);
											setProds(res.data);
										})
										.catch((err) =>
											console.log(err.response.data)
										);
								};
								fetch(p.id);
							}

							return (
								<CartCard
									// key={prod.productId}
									id={prod.productId}
									name={prod.productName}
									size={prod.dimension}
									color={prod.colour}
									category={prod.productCategory}
									price={prod.price}
									add={handleAdd}
									delete={handleDelete}
									showAddButton={false}
								/>
							);
						})}
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		</section>
	);
}
