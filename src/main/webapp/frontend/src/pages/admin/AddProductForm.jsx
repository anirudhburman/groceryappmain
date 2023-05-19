import React, { useState } from "react";
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
	MDBValidation,
	MDBValidationItem,
} from "mdb-react-ui-kit";
import AddProdImg from "../../components/assets/images/addproduct.jpg";
import productApi from "../../api/productApi";
import { useNavigate } from "react-router-dom";

export default function AddProductForm() {
	const navigate = useNavigate();
	const [prod, setProd] = useState({
		price: 0,
		colour: "",
		dimension: "",
		brand: "",
		quantity: 0,
		productCategory: "",
		productName: "",
	});

	const [errors, setErrors] = useState({
		productName: "",
		brand: "",
		dimension: "",
		quantity: "",
		colour: "",
		price: "",
		productCategory: "",
	});

	function handleChange(event) {
		const { name, value } = event.target;
		setProd((prevProd) => {
			return {
				...prevProd,
				[name]: value,
			};
		});

		let updatedErrors = { ...errors };

		if (name === "productName") {
			if (value.length > 50) {
				updatedErrors.productName =
					"Product Name should not exceed 50 characters";
			} else {
				updatedErrors.productName = "";
			}
		}

		if (name === "brand") {
			if (value.length > 50) {
				updatedErrors.brand =
					"Product Brand should not exceed 50 characters";
			} else {
				updatedErrors.brand = "";
			}
		}

		if (name === "dimension") {
			if (value.length === 0) {
				updatedErrors.dimension = "Dimensions is required";
			} else {
				updatedErrors.dimension = "";
			}
		}

		if (name === "quantity") {
			if (isNaN(value) || value <= 0) {
				updatedErrors.quantity = "Quantity should be a positive number";
			} else {
				updatedErrors.quantity = "";
			}
		}

		if (name === "colour") {
			if (value.length === 0) {
				updatedErrors.colour = "Color is required";
			} else if (!/^[a-zA-Z]+$/.test(value)) {
				updatedErrors.colour = "Color should contain only alphabets";
			} else {
				updatedErrors.colour = "";
			}
		}

		if (name === "price") {
			if (isNaN(value) || value <= 0) {
				updatedErrors.price = "Price should be a positive number";
			} else {
				updatedErrors.price = "";
			}
		}

		if (name === "productCategory") {
			if (value.length === 0) {
				updatedErrors.productCategory = "Category is required";
			} else if (!/^[a-zA-Z]+$/.test(value)) {
				updatedErrors.productCategory =
					"Product Category should contain only alphabets";
			} else {
				updatedErrors.productCategory = "";
			}
		}

		setErrors(updatedErrors);
	}

	function handleAdd() {
		if (
			prod.productName === "" ||
			prod.brand === "" ||
			prod.dimension === "" ||
			prod.quantity === "" ||
			prod.colour === "" ||
			prod.price === "" ||
			prod.productCategory === ""
		) {
			alert("Please fill in all the required fields");
			return;
		}

		const add = async () => {
			return await productApi
				.addProduct(prod)
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
												icon="hiking text-white"
												size="3x"
											/>
											<p className="text-white title-style">
												Add a New Product
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
															The More, The
															Merrier
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
								<MDBValidation isInvalidated>
									<MDBCardBody className="p-md-5 text-black">
										<MDBTypography
											tag="h3"
											className="mb-4 text-uppercase"
										>
											Product Info
										</MDBTypography>
										<MDBValidationItem valid>
											<MDBInput
												onChange={handleChange}
												name="productName"
												label="Product Name*"
												type="text"
												className="mb-5"
												size="lg"
												autoComplete="off"
												value={prod.productName}
												required={true}
											/>
											{errors.productName && (
												<div className="text-danger">
													{errors.productName}
												</div>
											)}
										</MDBValidationItem>
										<MDBValidationItem valid>
											<MDBInput
												onChange={handleChange}
												name="brand"
												label="Product Brand*"
												type="text"
												className="mb-5"
												size="lg"
												value={prod.brand}
												autoComplete="off"
												required={true}
											/>
											{errors.brand && (
												<div className="text-danger">
													{errors.brand}
												</div>
											)}
										</MDBValidationItem>

										<MDBRow>
											<MDBCol md="6" className="mb-5">
												<MDBValidationItem valid>
													<MDBInput
														onChange={handleChange}
														name="dimension"
														label="Dimensions*"
														type="text"
														size="lg"
														value={prod.dimension}
														autoComplete="off"
														required={true}
													/>
													{errors.dimension && (
														<div className="text-danger">
															{errors.dimension}
														</div>
													)}
												</MDBValidationItem>
											</MDBCol>
											<MDBCol md="6" className="mb-5">
												<MDBValidationItem invalid>
													<MDBInput
														onChange={handleChange}
														name="quantity"
														label="Quantity*"
														type="text"
														size="lg"
														value={prod.quantity}
														autoComplete="off"
														required={true}
													/>
													{errors.quantity && (
														<div className="text-danger">
															{errors.quantity}
														</div>
													)}
												</MDBValidationItem>
											</MDBCol>
										</MDBRow>

										<MDBRow>
											<MDBCol md="6" className="mb-5">
												<MDBValidationItem valid>
													<MDBInput
														onChange={handleChange}
														name="colour"
														label="Color*"
														type="text"
														size="lg"
														value={prod.colour}
														autoComplete="off"
														required={true}
													/>
													{errors.colour && (
														<div className="text-danger">
															{errors.colour}
														</div>
													)}
												</MDBValidationItem>
											</MDBCol>
											<MDBCol md="6" className="mb-5">
												<MDBValidationItem valid>
													<MDBInput
														onChange={handleChange}
														name="price"
														label="Price*"
														type="text"
														size="lg"
														value={prod.price}
														autoComplete="off"
														required={true}
													/>
													{errors.price && (
														<div className="text-danger">
															{errors.price}
														</div>
													)}
												</MDBValidationItem>
											</MDBCol>
										</MDBRow>
										<MDBValidationItem invalid>
											<MDBInput
												onChange={handleChange}
												name="productCategory"
												label="Category*"
												type="text"
												className="mb-5"
												value={prod.productCategory}
												size="lg"
												autoComplete="off"
												required={true}
											/>
											{errors.productCategory && (
												<div className="text-danger">
													{errors.productCategory}
												</div>
											)}
										</MDBValidationItem>

										<div className="d-flex justify-content-end pt-3">
											<MDBBtn
												onClick={handleAdd}
												size="lg"
												className="ms-2"
												style={{
													backgroundColor: "#40513b",
												}}
											>
												Add Product
											</MDBBtn>
										</div>
									</MDBCardBody>
								</MDBValidation>
							</MDBCol>
						</MDBRow>
					</MDBCard>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
}
