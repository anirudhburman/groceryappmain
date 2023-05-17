import React from "react";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

export const ProductTableRow = (props) => {
	return (
		<tr>
			<th scope="row">{props.id}</th>
			<td>{props.name}</td>
			<td>{props.brand}</td>
			<td>{props.category}</td>
			<td>{props.quantity}</td>
			<td>{props.dimensions}</td>
			<td>{props.color}</td>
			<td>{props.price}</td>
			<td>
				<MDBBtn
					onClick={() => props.edit(props.id)}
					color="warning"
					size="sm"
				>
					<MDBIcon fas icon="edit" />
				</MDBBtn>
			</td>
		</tr>
	);
};
