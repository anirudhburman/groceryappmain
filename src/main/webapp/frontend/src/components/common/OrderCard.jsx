import React from "react";
import {
	MDBCard,
	MDBCardBody,
	MDBCardTitle,
	MDBCardText,
	MDBCardFooter,
	MDBCol,
	MDBBtn,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

export default function OrderCard(order) {
	const navigate = useNavigate();

	function viewInvoice() {
		console.log("Viewing Cart");
		navigate("/invoice", {
			state: { orderId: order.id, fromOrders: true },
		});
	}

	return (
		<MDBCol md="4">
			<MDBCard style={{ margin: "10px", backgroundColor: "#fdfff0" }}>
				<MDBCardBody>
					<MDBCardTitle>#{order.id}</MDBCardTitle>
					<MDBCardText>Total Quantity: {order.quantity}</MDBCardText>
					<MDBCardText>Total Price: {order.price}</MDBCardText>
					<MDBCardText>Dispatched on: {order.dispatch}</MDBCardText>
					<MDBCardText>Delivery by: {order.delivery}</MDBCardText>
				</MDBCardBody>
				<MDBCardFooter>
					<MDBBtn onClick={viewInvoice} outline color="success">
						View Invoice
					</MDBBtn>
				</MDBCardFooter>
			</MDBCard>
		</MDBCol>
	);
}
