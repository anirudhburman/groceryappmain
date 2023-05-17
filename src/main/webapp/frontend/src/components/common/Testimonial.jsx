import React from "react";
import {
	MDBCol,
	MDBContainer,
	MDBIcon,
	MDBRow,
	MDBTypography,
} from "mdb-react-ui-kit";

export default function Testimonial() {
	return (
		<MDBContainer className="py-5" style={{ color: "#edf1d6" }}>
			<MDBRow className="d-flex justify-content-center">
				<MDBCol md="10" xl="8" className="text-center">
					<h3 className="mb-4">Testimonials</h3>
					<p className="mb-4 pb-2 mb-md-5 pb-md-0">
						See what some of our best customers have to say about us
						and the products they bought!
					</p>
				</MDBCol>
			</MDBRow>
			<MDBRow className="text-center">
				<MDBCol md="4" className="mb-5 mb-md-0">
					<div className="d-flex justify-content-center mb-4">
						<img
							style={{ objectFit: "cover" }}
							src="data:image/jpeg;base64,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"
							className="rounded-circle shadow-1-strong"
							width="150"
							height="150"
							alt="Harley Quinn"
						/>
					</div>
					<h5 className="mb-3">Harley Quinn</h5>
					<h6 className="text-warning mb-3">Home-Maker</h6>
					<p className="px-xl-3">
						<MDBIcon fas icon="quote-left" className="pe-2" />
						HAHAHAHAHA Shopping from CG Mart is the easiest way to
						get daily essentials delivered to your doorstep. I
						recently was out of matches while burning away Joker's
						heist money and I quickly hopped on CG Mart and ordered
						a bunch of Lighters and Match Boxes, NOW I CAN LIGHT THE
						WORLD ON FIRE YAAAY!
					</p>
					<MDBTypography
						listUnStyled
						className="d-flex justify-content-center mb-0"
					>
						<li>
							<MDBIcon
								fas
								icon="star"
								size="sm"
								className="text-warning"
							/>
						</li>
						<li>
							<MDBIcon
								fas
								icon="star"
								size="sm"
								className="text-warning"
							/>
						</li>
						<li>
							<MDBIcon
								fas
								icon="star"
								size="sm"
								className="text-warning"
							/>
						</li>
						<li>
							<MDBIcon
								fas
								icon="star"
								size="sm"
								className="text-warning"
							/>
						</li>
						<li>
							<MDBIcon
								fas
								icon="star-half-alt"
								size="sm"
								className="text-warning"
							/>
						</li>
					</MDBTypography>
				</MDBCol>
				<MDBCol md="4" className="mb-5 mb-md-0">
					<div className="d-flex justify-content-center mb-4">
						<img
							style={{ objectFit: "cover" }}
							src="https://static-ssl.businessinsider.com/image/55df18389dd7cc0f008b64cc-800-600/lisakudrowpheobe.jp2"
							className="rounded-circle shadow-1-strong"
							width="150"
							height="150"
							alt="Pheobe Buffay"
						/>
					</div>
					<h5 className="mb-3">Pheobe Buffay</h5>
					<h6 className="text-warning mb-3">PartTime Homeless</h6>
					<p className="px-xl-3">
						<MDBIcon fas icon="quote-left" className="pe-2" />
						When I used to live in a tent on the streets, I always
						found CG mart carry bags in the dustbins. I knew it was
						very famous and wanted to visit the site. I could not
						imagine so many things on there. I could buy whatever
						Food I want and from whereever I wanted from. Once I
						logged into this site, I never went to sleep hungry
						again. Monica also got fat because of CG Mart's instant
						food delivery.
					</p>
					<MDBTypography
						listUnStyled
						className="d-flex justify-content-center mb-0"
					>
						<li>
							<MDBIcon
								fas
								icon="star"
								size="sm"
								className="text-warning"
							/>
						</li>
						<li>
							<MDBIcon
								fas
								icon="star"
								size="sm"
								className="text-warning"
							/>
						</li>
						<li>
							<MDBIcon
								fas
								icon="star"
								size="sm"
								className="text-warning"
							/>
						</li>
						<li>
							<MDBIcon
								fas
								icon="star"
								size="sm"
								className="text-warning"
							/>
						</li>
						<li>
							<MDBIcon
								fas
								icon="star"
								size="sm"
								className="text-warning"
							/>
						</li>
					</MDBTypography>
				</MDBCol>
				<MDBCol md="4" className="mb-5 mb-md-0">
					<div className="d-flex justify-content-center mb-4">
						<img
							style={{ objectFit: "cover" }}
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs-nrkS7SG8p12jj5FmRsd7i6LFF3TLIle7g&usqp=CAU"
							className="rounded-circle shadow-1-strong"
							width="150"
							height="150"
							alt="Tony Stark"
						/>
					</div>
					<h5 className="mb-3">Tony Stark</h5>
					<h6 className="text-warning mb-3">Saviour of our World</h6>
					<p className="px-xl-3">
						<MDBIcon fas icon="quote-left" className="pe-2" />I knew
						Ms.Potts always ordered from CG mart when we used to
						live in my Malibu mansion. So when I got stuck in space
						for sometime with Nebula I ordered a bunch of snacks
						from CG Mart and they made Gaurdians of the Galaxy find
						me and deliver my favourite Cheese Burger to me along
						with Chips and Coke Zero. Thank you CG Mart, you saved
						my Life.
					</p>
					<MDBTypography
						listUnStyled
						className="d-flex justify-content-center mb-0"
					>
						<li>
							<MDBIcon
								fas
								icon="star"
								size="sm"
								className="text-warning"
							/>
						</li>
						<li>
							<MDBIcon
								fas
								icon="star"
								size="sm"
								className="text-warning"
							/>
						</li>
						<li>
							<MDBIcon
								fas
								icon="star"
								size="sm"
								className="text-warning"
							/>
						</li>
						<li>
							<MDBIcon
								fas
								icon="star"
								size="sm"
								className="text-warning"
							/>
						</li>
						<li>
							<MDBIcon
								far
								icon="star"
								size="sm"
								className="text-warning"
							/>
						</li>
					</MDBTypography>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
}
