import React, { useState, useEffect, useContext } from "react";
import {
	MDBBtn,
	MDBInput,
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBCard,
	MDBCardBody,
	MDBCheckbox,
	MDBTypography,
} from "mdb-react-ui-kit";
import "./assets/styles/registerForm.css";
import { updateCustomer, getCustomerById } from "../api/customerApi.js";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function EditForm() {
	const navigate = useNavigate();
	const { customer, setCustomer } = useContext(AuthContext);
	const [user, setUser] = useState({
		userId: 0,
		userName: "",
		userPassword: "",
	});
	const [address, setAddress] = useState({
		addressId: 0,
		buildingNo: "",
		areaName: "",
		city: "",
		state: "",
		zip: 0,
	});
	const [cust, setCust] = useState({
		customerId: 0,
		customerName: "",
		mobileNo: "",
		email: "",
	});
	const custId = customer.customerId;

	useEffect(() => {
		// Call the API to get cart products when component mounts
		/** props.match.params.id */
		const fetch = async () => {
			await getCustomerById(custId)
				.then((res) => {
					setCust({
						customerId: res.data.customerId,
						customerName: res.data.customerName,
						mobileNo: res.data.mobileNo,
						email: res.data.email,
					});
					setAddress({
						addressId: res.data.address.addressId,
						buildingNo: res.data.address.buildingNo,
						areaName: res.data.address.areaName,
						city: res.data.address.city,
						state: res.data.address.state,
						zip: res.data.address.zip,
					});
					setUser({
						userId: res.data.user.userId,
						userName: res.data.user.userName,
						userPassword: res.data.user.userPassword,
					});
				})
				.catch((error) => console.log(error.response.data));
		};
		fetch();
	}, [custId]);

	function handleCustChange(event) {
		const { name, value } = event.target;

		setCust((prevCust) => {
			return {
				...prevCust,
				[name]: value,
			};
		});
	}

	function handleAddressChange(event) {
		const { name, value } = event.target;

		setAddress((prevAdd) => {
			return {
				...prevAdd,
				[name]: value,
			};
		});
	}

	function handleUserChange(event) {
		const { name, value } = event.target;

		setUser((prevUser) => {
			return {
				...prevUser,
				[name]: value,
			};
		});
	}

	async function handleEdit(event) {
		event.preventDefault();
		await updateCustomer(cust, address, user)
			.then((response) => setCustomer(response.data))
			.catch((error) => console.log(error.response.data));
		navigate("/profile");
	}

	return (
		<MDBContainer fluid className="h-custom mb-10">
			<MDBRow className="d-flex justify-content-center align-items-center h-100">
				<MDBCol col="12" className="m-5">
					<div className="d-flex justify-content-between align-items-center mb-4">
						<MDBTypography
							style={{ color: "#40513B" }}
							tag="h3"
							className="fw-normal mb-0 text-black"
						>
							Edit your Profile
						</MDBTypography>
					</div>
					<MDBCard
						className="card-registration card-registration-2"
						style={{ borderRadius: "15px" }}
					>
						<MDBCardBody className="p-0">
							<MDBRow>
								<MDBCol md="6" className="p-5 bg-white">
									<h3
										className="fw-normal mb-5"
										style={{ color: "#40513B" }}
									>
										General Infomation
									</h3>

									<MDBInput
										onChange={handleCustChange}
										name="customerName"
										wrapperClass="mb-4"
										label="Full Name*"
										size="lg"
										id="form1"
										type="text"
										value={cust.customerName}
										required
									/>

									<MDBInput
										onChange={handleCustChange}
										wrapperClass="mb-4"
										name="mobileNo"
										label="Mobile Number*"
										size="lg"
										id="form2"
										type="number"
										value={cust.mobileNo}
										required
									/>

									<MDBInput
										onChange={handleCustChange}
										name="email"
										wrapperClass="mb-4"
										label="Email ID*"
										size="lg"
										id="form3"
										type="email"
										value={cust.email}
										required
									/>

									<MDBInput
										onChange={handleUserChange}
										name="userName"
										wrapperClass="mb-4"
										label="Username*"
										size="lg"
										id="form4"
										type="text"
										value={user.userName}
										required
									/>

									<MDBInput
										onChange={handleUserChange}
										name="userPassword"
										wrapperClass="mb-4"
										label="Password*"
										size="lg"
										id="form5"
										type="password"
										value={user.userPassword}
										required
									/>
								</MDBCol>

								<MDBCol
									md="6"
									className="bg-indigo p-5 text-white"
								>
									<h3
										className="fw-normal mb-5 text-white"
										style={{ color: "#4835d4" }}
									>
										Address Details
									</h3>
									<MDBRow>
										<MDBCol md="5">
											<MDBInput
												style={{ color: "white" }}
												onChange={handleAddressChange}
												name="buildingNo"
												wrapperClass="mb-4"
												labelClass="text-white"
												label="Building No*"
												size="lg"
												id="form6"
												type="text"
												value={address.buildingNo}
												required
											/>
										</MDBCol>

										<MDBCol md="7">
											<MDBInput
												style={{ color: "white" }}
												onChange={handleAddressChange}
												name="zip"
												wrapperClass="mb-4"
												labelClass="text-white"
												label="Zip Code*"
												size="lg"
												id="form7"
												type="text"
												value={address.zip}
												required
											/>
										</MDBCol>
									</MDBRow>

									<MDBInput
										style={{ color: "white" }}
										onChange={handleAddressChange}
										name="areaName"
										wrapperClass="mb-4"
										labelClass="text-white"
										label="Area/Locality*"
										size="lg"
										id="form8"
										type="text"
										value={address.areaName}
										required
									/>

									<MDBInput
										style={{ color: "white" }}
										onChange={handleAddressChange}
										name="city"
										wrapperClass="mb-4"
										labelClass="text-white"
										label="City*"
										size="lg"
										id="form9"
										type="text"
										value={address.city}
										required
									/>

									<MDBInput
										style={{ color: "white" }}
										onChange={handleAddressChange}
										name="state"
										wrapperClass="mb-4"
										labelClass="text-white"
										label="State*"
										size="lg"
										id="form10"
										type="text"
										value={address.state}
										required
									/>

									<MDBCheckbox
										name="flexCheck"
										id="flexCheckDefault"
										labelClass="text-white mb-4"
										label="I do accept the Terms and Conditions of your site."
										required
									/>
									<MDBBtn
										onClick={handleEdit}
										style={{ backgroundColor: "#EDF1D6" }}
										color="black"
										size="lg"
									>
										Update
									</MDBBtn>
								</MDBCol>
							</MDBRow>
						</MDBCardBody>
					</MDBCard>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
}

export default EditForm;
