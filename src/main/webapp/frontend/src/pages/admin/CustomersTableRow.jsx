import React from "react";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

export const CustomerTableRow = (props) => {
	return (
		<tr>
			<th scope="row">{props.id}</th>
			<td>{props.name}</td>
			<td>{props.email}</td>
			<td>{props.userName}</td>
			<td>{props.phone}</td>
			<td>{props.cid}</td>
			<td>{props.wid}</td>
			<td>{props.uid}</td>
			<td>{props.orders}</td>
			<td>
				<MDBBtn
					onClick={() => props.delete(props.id)}
					color="warning"
					size="sm"
				>
					<MDBIcon fas icon="trash" />
				</MDBBtn>
			</td>
		</tr>
	);
};
