import React, { useState, useContext } from "react";
import {
	MDBBtn,
	MDBContainer,
	MDBCard,
	MDBCardBody,
	MDBCardImage,
	MDBRow,
	MDBCol,
	MDBIcon,
	MDBInput,
} from "mdb-react-ui-kit";
import Alert from "react-bootstrap/Alert";
import FireImg from "./assets/images/fire.jpg";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
	const navigate = useNavigate();
	const { login, isAuth } = useContext(AuthContext);
	const [showErr, setShowErr] = useState(false);
	const [showSuccess, setShowSuccess] = useState(false);
	const [err, setErr] = useState("");
	const [user, setUser] = useState({
		userName: "",
		password: "",
	});

	function handleChange(event) {
		const { name, value } = event.target;
		setUser((prevUser) => {
			return {
				...prevUser,
				[name]: value,
			};
		});
	}

	async function handleSubmit(event) {
		event.preventDefault();
		await login(user)
			.then((response) => {
				console.log(response.data);
				setShowSuccess(true);
			})
			.catch((error) => {
				let e = error.response.data.message;
				if (
					e ===
					"Validation failed for object='loginRequestDto'. Error count: 2"
				) {
					setErr("Please fill all the fields.");
				} else {
					setErr(error.response.data.message);
				}
				console.log(error);
				console.error(`Error logging in user: ${error}`);
				setShowErr(true);
			});
	}

	if (isAuth) {
		navigate("/");
	}

	return (
		<MDBContainer className="my-5">
			{showErr && (
				<Alert
					variant="danger"
					onClose={() => setShowErr(false)}
					dismissible
				>
					<Alert.Heading>Oh snap! There was an error!</Alert.Heading>
					<p>{err}</p>
				</Alert>
			)}
			{showSuccess && (
				<Alert
					variant="success"
					onClose={() => setShowSuccess(false)}
					dismissible
				>
					<Alert.Heading>Yay! Welcome {user.userName}!</Alert.Heading>
				</Alert>
			)}
			<MDBCard>
				<MDBRow className="g-0">
					<MDBCol md="6">
						<MDBCardImage
							src={FireImg}
							height="550px"
							alt="login form"
							className="rounded-start w-100"
							style={{ objectFit: "cover" }}
						/>
					</MDBCol>

					<MDBCol md="6">
						<MDBCardBody className="d-flex flex-column">
							<div className="d-flex flex-row mt-2">
								<MDBIcon
									fas
									icon="fas fa-shopping-basket fa-3x me-3"
									style={{ color: "#609966" }}
								/>
								<span className="h1 fw-bold mb-0">CG MART</span>
							</div>

							<h5
								className="fw-normal my-4 pb-3"
								style={{ letterSpacing: "1px" }}
							>
								Sign into your account
							</h5>

							<MDBInput
								wrapperClass="mb-4"
								onChange={handleChange}
								type="text"
								name="userName"
								id="userName"
								value={user.userName}
								label="Enter your UserName"
								size="lg"
								autoComplete="off"
								required={true}
							/>
							<MDBInput
								wrapperClass="mb-4"
								onChange={handleChange}
								type="password"
								name="password"
								id="password"
								value={user.password}
								label="Enter your Password"
								size="lg"
								autoComplete="off"
								required={true}
							/>

							<MDBBtn
								onClick={handleSubmit}
								className="mb-4 px-5"
								color="dark"
								size="lg"
								style={{
									backgroundColor: "#40513B",
								}}
							>
								Login
							</MDBBtn>
							<p
								className="mb-5 pb-lg-2"
								style={{ color: "#40513B" }}
							>
								Don't have an account?{" "}
								<a
									href="/register"
									style={{ color: "#40513B" }}
								>
									Register here
								</a>
							</p>

							<div className="d-flex flex-row justify-content-start">
								<a href="#!" className="small text-muted me-1">
									Terms of use.
								</a>
								<a href="#!" className="small text-muted">
									Privacy policy
								</a>
							</div>
						</MDBCardBody>
					</MDBCol>
				</MDBRow>
			</MDBCard>
		</MDBContainer>
	);
}
