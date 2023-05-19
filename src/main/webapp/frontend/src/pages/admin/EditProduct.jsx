import React, { useEffect, useState } from "react";
import {
	MDBBtn,
	MDBCard,
	MDBCardBody,
	MDBCardImage,
	MDBCol,
	MDBContainer,
	MDBIcon,
	MDBInput,
	MDBRow,
	MDBTypography,
} from "mdb-react-ui-kit";
import AddProdImg from "../../components/assets/images/addproduct.jpg";
import productApi from "../../api/productApi";
import { useNavigate, useLocation } from "react-router-dom";

export default function EditProductForm() {
	const navigate = useNavigate();
	const location = useLocation();
	const prodId = location.state.prodId;
	const [prod, setProd] = useState({
		price: 0,
		colour: "",
		dimension: "",
		brand: "",
		quantity: 0,
		productCategory: "",
		productName: "",
	});

	useEffect(() => {
		const fetch = async (id) => {
			return await productApi
				.getProdById(id)
				.then((res) => setProd(res.data))
				.catch((err) => console.log(err.response.data));
		};
		fetch(prodId);
	}, [prodId]);

	function handleChange(event) {
		const { name, value } = event.target;
		setProd((prevProd) => {
			return {
				...prevProd,
				[name]: value,
			};
		});
	}

	function handleAdd() {
		const add = async () => {
			return await productApi
				.updateProduct(prod)
				.then((res) => console.log(res.data))
				.catch((err) => console.log(err));
		};
		add();
		setTimeout(() => navigate("/admin/products"), 1000);
	}

	return (
		<MDBContainer className="py-5" style={{ maxWidth: "1100px" }}>
			<MDBRow className="justify-content-center align-items-center">
				<MDBCol>
					<MDBCard className="my-4 shadow-3">
						<MDBRow className="g-0">
							<MDBCol md="6" className="d-xl-block bg-image">
								<MDBCardImage
									src={AddProdImg}
									alt="Sample photo"
									fluid
								/>
								<div
									className="mask"
									style={{
										backgroundColor: "rgba(0, 0, 0, 0.6)",
									}}
								>
									<div className="justify-content-center align-items-center h-100">
										<div
											className="text-center"
											style={{ marginTop: "220px" }}
										>
											<MDBIcon
												fas
												icon="shopping-basket text-white"
												size="3x"
											/>
											<p className="text-white title-style">
												Edit this Product
											</p>
											<p className="text-white mb-0"></p>

											<figure className="text-center mb-0">
												<blockquote className="blockquote text-white">
													<p className="pb-3">
														<MDBIcon
															fas
															icon="quote-left text-success"
															size="xs"
															style={{
																color: "hsl(210, 100%, 50%)",
															}}
														/>
														<span className="lead font-italic">
															Always keep it
															Updated
														</span>
														<MDBIcon
															fas
															icon="quote-right text-success"
															size="xs"
															style={{
																color: "hsl(210, 100%, 50%)",
															}}
														/>
													</p>
												</blockquote>
											</figure>
										</div>
									</div>
								</div>
							</MDBCol>
							<MDBCol md="6">
								<MDBCardBody className="p-md-5 text-black">
									<MDBTypography
										tag="h3"
										className="mb-4 text-uppercase"
									>
										Product Info
									</MDBTypography>

									<MDBInput
										onChange={handleChange}
										name="productName"
										label="Product Name*"
										type="text"
										className="mb-5"
										size="lg"
										autoComplete="off"
										value={prod.productName}
										required
									/>

									<MDBInput
										onChange={handleChange}
										name="brand"
										label="Product Brand*"
										type="text"
										className="mb-5"
										size="lg"
										value={prod.brand}
										autoComplete="off"
										required
									/>

									<MDBRow>
										<MDBCol md="6" className="mb-5">
											<MDBInput
												onChange={handleChange}
												name="dimension"
												label="Dimensions*"
												type="text"
												size="lg"
												value={prod.dimension}
												autoComplete="off"
												required
											/>
										</MDBCol>
										<MDBCol md="6" className="mb-5">
											<MDBInput
												onChange={handleChange}
												name="quantity"
												label="Quantity*"
												type="text"
												size="lg"
												value={prod.quantity}
												autoComplete="off"
												required
											/>
										</MDBCol>
									</MDBRow>

									<MDBRow>
										<MDBCol md="6" className="mb-5">
											<MDBInput
												onChange={handleChange}
												name="colour"
												label="Color*"
												type="text"
												size="lg"
												value={prod.colour}
												autoComplete="off"
												required
											/>
										</MDBCol>
										<MDBCol md="6" className="mb-5">
											<MDBInput
												onChange={handleChange}
												name="price"
												label="Price*"
												type="text"
												size="lg"
												value={prod.price}
												autoComplete="off"
												required
											/>
										</MDBCol>
									</MDBRow>

									<MDBInput
										onChange={handleChange}
										name="productCategory"
										label="Category*"
										type="text"
										className="mb-5"
										value={prod.productCategory}
										size="lg"
										autoComplete="off"
										required
									/>

									<div className="d-flex justify-content-end pt-3">
										<MDBBtn
											onClick={handleAdd}
											size="lg"
											className="ms-2"
											style={{
												backgroundColor: "#40513b",
											}}
										>
											Update Product
										</MDBBtn>
									</div>
								</MDBCardBody>
							</MDBCol>
						</MDBRow>
					</MDBCard>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
}
