import React, { useEffect, useState } from "react";
import { getAllCustomers, deleteCustomerById } from "../../api/customerApi";
import { CustomerTableRow } from "./CustomersTableRow";
import "../../components/assets/styles/prodTable.css";
import {
	MDBTypography,
	MDBTable,
	MDBTableHead,
	MDBTableBody,
} from "mdb-react-ui-kit";

export default function AllCustomers() {
	const [customers, setCustomers] = useState([]);
	const [count, setCount] = useState(0);

	useEffect(() => {
		const fetch = async () => {
			return await getAllCustomers()
				.then((res) => setCustomers(res.data))
				.catch((err) => console.log(err.response.data));
		};
		fetch();
	}, [count]);

	function handleDelete(cid) {
		const deleteCust = async (id) => {
			return await deleteCustomerById(id)
				.then((res) => console.log(res.data))
				.catch((err) => console.log(err.response.data));
		};
		deleteCust(cid);
		setCustomers((prevCusts) => {
			return prevCusts.filter((cust) => cust.customerId !== cid);
		});
	}

	return (
		<>
			<div style={{ margin: "5em" }}>
				<MDBTypography
					style={{ color: "#40513B" }}
					tag="h3"
					className="fw-normal mb-0 text-black"
				>
					All Customers
				</MDBTypography>
			</div>
			<section className="prod-table">
				<MDBTable align="middle">
					<MDBTableHead dark>
						<tr>
							<th scope="col">Customer#</th>
							<th scope="col">FullName</th>
							<th scope="col">Email</th>
							<th scope="col">UserName</th>
							<th scope="col">Mobile No</th>
							<th scope="col">CartId</th>
							<th scope="col">WishListId</th>
							<th scope="col">UserId</th>
							<th scope="col">Total Orders</th>
							<th scope="col">Delete</th>
						</tr>
					</MDBTableHead>
					<MDBTableBody>
						{customers?.map((cust) => (
							<CustomerTableRow
								count={count}
								key={cust.customerId}
								id={cust.customerId}
								name={cust.customerName}
								email={cust.email}
								userName={cust.user.userName}
								phone={cust.mobileNo}
								cid={cust.cart.cartId}
								wid={cust.wishlist.wishlistId}
								uid={cust.user.userId}
								orders={cust.orders.length}
								delete={handleDelete}
							/>
						))}
					</MDBTableBody>
				</MDBTable>
			</section>
		</>
	);
}
