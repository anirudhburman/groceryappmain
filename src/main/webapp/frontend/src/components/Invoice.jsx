import React, { useState, useEffect, useContext } from "react";
import {
	MDBCard,
	MDBCardBody,
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBBtn,
	MDBIcon,
	MDBTypography,
	MDBTable,
	MDBTableHead,
	MDBTableBody,
	MDBModal,
	MDBModalDialog,
	MDBModalContent,
	MDBModalHeader,
	MDBModalTitle,
	MDBModalBody,
	MDBModalFooter,
} from "mdb-react-ui-kit";
import { useLocation, useNavigate } from "react-router-dom";
import { getOrderById, cancelOrderById } from "../api/orderApi";
import InvoiceTableRow from "./common/InvoiceTableRow";
import Alert from "react-bootstrap/Alert";
import { AuthContext } from "../context/AuthContext";

export default function Invoice() {
	const navigate = useNavigate();
	const location = useLocation();
	const orderId = location.state.orderId;
	const [basicModal, setBasicModal] = useState(false);
	const toggleShow = () => setBasicModal(!basicModal);
	const { customer } = useContext(AuthContext);
	// let orderId = 7;
	const [order, setOrder] = useState({
		orderId: 0,
		products: [],
		totalQuantity: 0,
		totalPrice: 0,
		orderDeliveryDate: "",
		orderDispatchDate: "",
	});
	const [showAlert, setShowAlert] = useState(false);
	const isFromOrders = location.state?.fromOrders;

	useEffect(() => {
		const fetch = async (id) => {
			await getOrderById(id)
				.then((response) => {
					console.log(response.data);
					setOrder(response.data);
				})
				.catch((error) => console.log(error.response.data));
		};
		fetch(orderId);
	}, [orderId]);

	// console.log(order);
	let i = 0;

	function handleCancel() {
		console.log("User clicked Cancel");
		const fetch = async (id) => {
			await cancelOrderById(id)
				.then((res) => {
					alert(res.data);
					navigate("/your-orders");
				})
				.catch((error) => console.log(error.response.data));
		};
		fetch(orderId);
	}

	function handlePay() {
		setShowAlert(true);

		setTimeout(() => {
			navigate("/your-orders");
		}, 2000);
	}

	return (
		<MDBContainer className="py-5">
			<MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
				<MDBModalDialog>
					<MDBModalContent>
						<MDBModalHeader>
							<MDBModalTitle>CONFIRM CANCEL</MDBModalTitle>
							<MDBBtn
								className="btn-close"
								color="none"
								onClick={toggleShow}
							></MDBBtn>
						</MDBModalHeader>
						<MDBModalBody>
							Are you sure you want to CANCEL YOUR ORDER? You will
							also lose your Cart Items once done!
						</MDBModalBody>

						<MDBModalFooter>
							<MDBBtn color="secondary" onClick={toggleShow}>
								Close
							</MDBBtn>
							<MDBBtn onClick={handleCancel} color="danger">
								Confirm Cancel
							</MDBBtn>
						</MDBModalFooter>
					</MDBModalContent>
				</MDBModalDialog>
			</MDBModal>
			<MDBCard style={{ backgroundColor: "#fdfff0" }} className="p-4">
				<MDBCardBody>
					<MDBContainer className="mb-2 mt-3">
						<MDBRow className="d-flex align-items-baseline">
							<MDBCol xl="9">
								<p
									style={{
										color: "#7e8d9f",
										fontSize: "20px",
									}}
								>
									Invoice &gt; &gt;{" "}
									<strong>ID: #{order.orderId}</strong>
								</p>
							</MDBCol>
							<MDBCol xl="3" className="float-end">
								<MDBBtn
									onClick={toggleShow}
									color="danger"
									ripple="dark"
									className="float-end text-capitalize border-0 ms-2"
								>
									<MDBIcon
										far
										icon="fas fa-trash-alt"
										className="me-1"
									/>
									Cancel
								</MDBBtn>
								<MDBBtn
									onClick={() => window.print()}
									style={{ backgroundColor: "#40513b" }}
									ripple="dark"
									className="float-end text-capitalize border-0 ms-2"
								>
									<MDBIcon
										fas
										icon="print"
										className="me-1"
									/>
									Print
								</MDBBtn>
							</MDBCol>
						</MDBRow>
					</MDBContainer>
					<MDBContainer>
						<MDBCol md="12" className="text-center">
							<MDBIcon
								fas
								icon="shopping-basket"
								size="3x"
								className="ms-0"
								style={{ color: "#5d9fc5" }}
							/>
							<p className="pt-0">cgmart.com</p>
						</MDBCol>
					</MDBContainer>
					<MDBRow>
						<MDBCol xl="8">
							<MDBTypography listUnStyled>
								<li className="text-muted">
									To:{" "}
									<span style={{ color: "#5d9fc5" }}>
										{customer.customerName}
									</span>
								</li>
								<li className="text-muted">
									{customer.address.buildingNo},{" "}
									{customer.address.areaName}
								</li>
								<li className="text-muted">
									{customer.address.city},{" "}
									{customer.address.state}
								</li>
								<li className="text-muted">
									<MDBIcon fas icon="phone-alt" />{" "}
									{customer.mobileNo}
								</li>
							</MDBTypography>
						</MDBCol>
						<MDBCol xl="4">
							<p className="text-muted">Invoice</p>
							<MDBTypography listUnStyled>
								<li className="text-muted">
									<MDBIcon
										fas
										icon="circle"
										style={{ color: "#84B0CA" }}
									/>
									<span className="fw-bold ms-1">ID:</span>#
									{order.orderId}
								</li>
								<li className="text-muted">
									<MDBIcon
										fas
										icon="circle"
										style={{ color: "#84B0CA" }}
									/>
									<span className="fw-bold ms-1">
										Dispatch Date:{" "}
									</span>
									{order.orderDispatchDate}
								</li>
								<li className="text-muted">
									<MDBIcon
										fas
										icon="circle"
										style={{ color: "#84B0CA" }}
									/>
									<span className="fw-bold ms-1">
										Status:
									</span>
									{!isFromOrders ? (
										<span className="badge bg-warning text-black fw-bold ms-1">
											Unpaid
										</span>
									) : (
										<span className="badge bg-success text-white fw-bold ms-1">
											Paid
										</span>
									)}
								</li>
							</MDBTypography>
						</MDBCol>
					</MDBRow>
					<MDBRow className="my-2 mx-1 justify-content-center">
						<MDBTable striped borderless>
							<MDBTableHead
								className="text-white"
								style={{ backgroundColor: "#9DC08B" }}
							>
								<tr>
									<th scope="col">#</th>
									<th scope="col">Brand</th>
									<th scope="col">Name</th>
									<th scope="col">Color</th>
									<th scope="col">Amount</th>
								</tr>
							</MDBTableHead>
							<MDBTableBody>
								{order.products?.map((prod) => {
									i++;
									return (
										<InvoiceTableRow
											num={i}
											brand={prod.brand}
											name={prod.productName}
											color={prod.colour}
											price={prod.price}
										/>
									);
								})}
							</MDBTableBody>
						</MDBTable>
					</MDBRow>
					<MDBRow>
						<MDBCol xl="8">
							<p className="ms-3">
								Add additional notes and payment information
							</p>
						</MDBCol>
						<MDBCol xl="3">
							<MDBTypography listUnStyled>
								<li className="text-muted ms-3">
									<span className="text-black me-4">
										SubTotal
									</span>
									Rs.{order.totalPrice}
								</li>
								<li className="text-muted ms-3 mt-2">
									<span className="text-black me-4">
										Tax(15%)
									</span>
									Rs.{order.totalPrice * 0.15}
								</li>
							</MDBTypography>
							<p className="text-black float-start">
								<span className="text-black me-3">
									{" "}
									Total Amount
								</span>
								<span style={{ fontSize: "25px" }}>
									Rs.
									{order.totalPrice + order.totalPrice * 0.15}
								</span>
							</p>
						</MDBCol>
					</MDBRow>
					<hr />
					<MDBRow>
						<MDBCol xl="10">
							<p>Thank you for your purchase</p>
						</MDBCol>
						<MDBCol xl="2">
							{!isFromOrders && (
								<MDBBtn
									onClick={handlePay}
									className="text-capitalize"
									style={{ backgroundColor: "#40513B" }}
								>
									Pay Now
								</MDBBtn>
							)}
						</MDBCol>
						{showAlert && (
							<Alert className="mt-2" variant="success">
								Thank you! Redirecting...
							</Alert>
						)}
					</MDBRow>
				</MDBCardBody>
			</MDBCard>
		</MDBContainer>
	);
}
