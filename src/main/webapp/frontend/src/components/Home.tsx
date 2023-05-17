import React, { useCallback, useEffect } from "react";
import "./assets/styles/home.css";
import Testimonial from "./common/Testimonial";

export default function Home() {
	const imagesMasonry = useCallback(() => {
		const masonryWrapper = document.querySelector(
			".masonry-with-flex"
		) as HTMLElement;
		Array.from(masonryWrapper.children).forEach((child, i) => {
			const order = i % 3;
			(child as HTMLElement).style.order = `${order}`;
		});
	}, []);

	useEffect(() => {
		imagesMasonry();
	}, [imagesMasonry]);

	return (
		<>
			<section>
				<div className="masonry-text">Our Products gallery</div>
				<div
					className="masonry-with-flex masonry-with-columns"
					style={{ maxHeight: "1200px" }}
				>
					<img
						src="https://static.blog.bolt.eu/LIVE/wp-content/uploads/2022/04/30135418/grocery-list-1024x536.jpg"
						alt="pic"
						style={{ width: "33.3%" }}
					/>
					<img
						src="https://5.imimg.com/data5/BM/DV/KV/ANDROID-92423289/product-jpeg-1000x1000.jpg"
						alt="pic"
						style={{ width: "33.3%" }}
					/>
					<img
						alt="pic"
						src="http://www.marketexpress.in/wp-content/uploads/2016/09/grocery-india-retail-hyperlocal-marketexpress-in.jpg"
						style={{ width: "33.3%" }}
					/>
					<img
						alt="pic"
						src="https://imageio.forbes.com/specials-images/imageserve/1141999659/An-Empty-Supermarket-Aisle-Filled-With-Stock/960x0.jpg?format=jpg&width=960"
						style={{ width: "33.3%" }}
					/>
					<img
						alt="pic"
						src="https://www.fitterfly.com/blog/wp-content/uploads/2022/04/blog-img-v1-1.jpg"
						style={{ width: "33.3%" }}
					/>
					<img
						alt="pic"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6u4JWGvDWyq3aOPQMYaN9aOiSF74AgYVxCheF2AjWQg&usqp=CAU&ec=48665699"
						style={{ width: "33.3%" }}
					/>
					<img
						alt="pic"
						src="https://blog.grabon.in/wp-content/uploads/2021/07/Online-Grocery-Stores-in-india.jpg"
						style={{ width: "33.3%" }}
					/>
					<img
						alt="pic"
						src="https://media.gettyimages.com/id/165835430/photo/groceries.jpg?s=612x612&w=gi&k=20&c=p-vineS_IRF4JjFpV3oGaW04BLv4nt-1CnXrOafg5_0="
						style={{ width: "33.3%" }}
					/>
					<img
						alt="pic"
						src="https://www.consultancy.in/illustrations/news/spotlight/2020-11-01-190144635-food-beverage.jpg"
						style={{ width: "33.3%" }}
					/>
					<img
						alt="pic"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5dmJOEI5V021aPvhQFvdKxUly7WaYWfwFFOwNOVP-tg&usqp=CAU&ec=48665699"
						style={{ width: "33.3%" }}
					/>
				</div>
			</section>
			<section className="animated-text">
				<h1>Get the groceries you want</h1>
			</section>
			<section
				style={{
					background: "linear-gradient(to bottom, #10170e, #40513b)",
					marginBottom: "-30px",
				}}
			>
				<Testimonial />
			</section>
		</>
	);
}
