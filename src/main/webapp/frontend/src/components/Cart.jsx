import React, { useState, useEffect, useContext } from "react";
import {
	MDBBtn,
	MDBCard,
	MDBCardBody,
	MDBCol,
	MDBContainer,
	MDBRow,
	MDBTypography,
	MDBIcon,
} from "mdb-react-ui-kit";
import {
	addProdToCart,
	deleteProdFromCart,
	getCartProds,
} from "../api/cartApi";
import { useNavigate } from "react-router-dom";
import CartCard from "./common/CartCard";
import { addOrder } from "../api/orderApi";
import { AuthContext } from "../context/AuthContext";

export default function Cart() {
	const { customer } = useContext(AuthContext);
	const navigate = useNavigate();
	const [prods, setProds] = useState([]);
	const totalPrice = prods.reduce((acc, curr) => acc + curr.price, 0);
	let cartId = customer.cart.cartId;
	let mybutton;

	useEffect(() => {
		// Call the API to get cart products when component mounts
		/** props.match.params.id */
		const fetch = async () => {
			await getCartProds(cartId)
				.then((response) => {
					setProds(response.data);
				})
				.catch((error) => console.log(error.response.data));
		};
		fetch();
	}, [cartId]);
	// , [props.match.params.id]);

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

	function handlePlaceOrder() {
		console.log("placing order");
		const placeOrder = async (id, total) => {
			return await addOrder(id, total)
				.then((res) => {
					console.log(res.data);
					navigate("/invoice", {
						state: { orderId: res.data.orderId, fromOrders: false },
					});
				})
				.catch((err) => console.log(err.response.data));
		};
		placeOrder(cartId, totalPrice);
	}

	if (!prods || prods.length === 0) {
		return (
			<div style={{ height: "100vh" }}>
				<h1>
					CART EMPTY!! Your shopping bag seems too light. Go buy
					something!!
				</h1>
			</div>
		);
	}

	function handleDelete(p) {
		console.log("Delete button clicked");
		const fetch = async (cid, id) => {
			return await deleteProdFromCart(cid, id)
				.then((res) => {
					console.log(res.data);
					setProds(res.data);
				})
				.catch((err) => console.log(err.response.data));
		};
		fetch(cartId, p.id);
	}

	return (
		<section className="h-100">
			<MDBContainer className="py-5 h-100" style={{ minHeight: "100vh" }}>
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
								Your Shopping Cart
							</MDBTypography>
						</div>

						{prods?.map((prod) => {
							function handleAddToCart(p) {
								console.log("Add button clicked");
								const fetch = async (cid, id) => {
									return await addProdToCart(cid, id)
										.then((res) => {
											console.log(res.data);
											setProds(res.data);
										})
										.catch((err) =>
											console.log(err.response.data)
										);
								};
								fetch(cartId, p.id);
								window.scrollTo(0, document.body.scrollHeight);
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
									add={handleAddToCart}
									delete={handleDelete}
									showAddButton={true}
								/>
							);
						})}
						<MDBCard
							style={{ backgroundColor: "#EDF1D6" }}
							className="mb-4"
						>
							<MDBCardBody className="p-4 d-flex flex-row">
								{/* <MDBInput
									label="Discound code"
									wrapperClass="flex-fill"
									size="lg"
								/> */}
								<MDBTypography
									tag="h3"
									className="fw-normal mb-0 text-black"
								>
									Subtotal:
								</MDBTypography>
								<MDBTypography
									tag="h3"
									className="text-end fw-normal mb-0 text-black ms-auto"
								>
									₹{totalPrice}
								</MDBTypography>
							</MDBCardBody>
						</MDBCard>

						<MDBCard style={{ backgroundColor: "#EDF1D6" }}>
							<MDBCardBody>
								<MDBBtn
									onClick={handlePlaceOrder}
									className="m-auto"
									color="success"
									block
									size="lg"
								>
									Place Order
								</MDBBtn>
							</MDBCardBody>
						</MDBCard>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		</section>
	);
}
