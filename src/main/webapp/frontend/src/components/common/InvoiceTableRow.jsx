import React from "react";

export default function InvoiceTableRow(prod) {
	return (
		<tr>
			<th scope="row">{prod.num}</th>
			<td>{prod.brand}</td>
			<td>{prod.name}</td>
			<td>{prod.color}</td>
			<td>{prod.price}</td>
		</tr>
	);
}
