import React from "react";
import {
	MDBRow,
	MDBCol,
	MDBCard,
	MDBCardBody,
	MDBCardImage,
	MDBIcon,
	MDBRipple,
	MDBBtn,
} from "mdb-react-ui-kit";
import HikingBag from "../assets/images/Hiking_Bag.jpg";
import SleepingBag from "../assets/images/Sleeping Bag.jpg";
import SteelAxe from "../assets/images/Steel Axe.jpg";
import WaterBottle from "../assets/images/Water Bottle.jpg";
import CampTent from "../assets/images/Camp Tent.jpg";
import CampStove from "../assets/images/Camp Stove.jpg";
import { getRandomNumber } from "../../utils/helpers";

const productImages = {
	HikingBag: HikingBag,
	SleepingBag: SleepingBag,
	SteelAxe: SteelAxe,
	WaterBottle: WaterBottle,
	CampTent: CampTent,
	CampStove: CampStove,
};

export default function ProductCard(prod) {
	const img = prod.image.replace(/\s+/g, "");
	const prodImg = productImages[img];
	const defaultImg =
		"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.shutterstock.com%2Fshutterstock%2Fphotos%2F2006969189%2Fdisplay_1500%2Fstock-vector-vector-illstration-of-various-everyday-pantry-grocery-shopping-food-items-shopping-and-food-retail-2006969189.jpg&tbnid=IanrE_fc0hbucM&vet=12ahUKEwiKus746vv-AhVKidgFHYqtBk8QMygOegUIARCIAg..i&imgrefurl=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fgrocery%2Bitem%3Fimage_type%3Dvector&docid=doUwVionjivj3M&w=1500&h=945&q=grocery%20items&hl=en&ved=2ahUKEwiKus746vv-AhVKidgFHYqtBk8QMygOegUIARCIAg";
	return (
		<MDBCard
			style={{ backgroundColor: "#fcffeb" }}
			className="shadow-0 border rounded-3 mt-5 mb-3"
		>
			<MDBCardBody>
				<MDBRow>
					<MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
						<MDBRipple
							rippleColor="dark"
							rippleTag="div"
							className="bg-image rounded hover-zoom hover-overlay"
						>
							<MDBCardImage
								// src={prod.image ? img : defaultImg}
								src={prodImg ? prodImg : defaultImg}
								fluid
								className="w-100"
							/>
						</MDBRipple>
					</MDBCol>
					<MDBCol md="6">
						<h5>
							{prod.brand} {prod.name}
						</h5>
						<div className="d-flex flex-row">
							<div className="text-danger mb-1 me-2">
								<MDBIcon fas icon="star" />
								<MDBIcon fas icon="star" />
								<MDBIcon fas icon="star" />
								<MDBIcon fas icon="star" />
								<MDBIcon fas icon="star" />
							</div>
							<span>9999</span>
						</div>
						<div className="mt-1 mb-0 text-muted small">
							<span>{prod.size}</span>
							<span className="text-primary"> • </span>
							<span>{prod.color}</span>
							<span className="text-primary"> • </span>
							<span>
								{prod.category}
								<br />
							</span>
						</div>
						<div className="mb-2 text-muted small">
							<span>Unique design</span>
							<span className="text-primary"> • </span>
							<span>Best Quality</span>
							<span className="text-primary"> • </span>
							<span>
								Very Durable
								<br />
							</span>
						</div>
					</MDBCol>
					<MDBCol
						md="6"
						lg="3"
						className="border-sm-start-none border-start"
					>
						<div className="d-flex flex-row align-items-center mb-1">
							<h4 className="mb-1 me-1">₹{prod.price}</h4>
							<span className="text-danger">
								<s>₹{(prod.price * 1.1).toFixed(2)}</s>
							</span>
						</div>
						<h6 className="text-success">Free shipping</h6>
						<div className="d-flex flex-column mt-4">
							<MDBBtn
								onClick={() => prod.addToCart(prod.id)}
								color="success"
								size="sm"
							>
								Add to Cart
							</MDBBtn>
							<MDBBtn
								onClick={() => prod.addToWish(prod.id)}
								outline
								color="success"
								size="sm"
								className="mt-2"
							>
								Add to wish list
							</MDBBtn>
						</div>
					</MDBCol>
				</MDBRow>
			</MDBCardBody>
		</MDBCard>
	);
}
