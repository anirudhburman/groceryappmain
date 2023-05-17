import React, {
	useState,
	useEffect,
	useContext,
	useCallback,
	useMemo,
} from "react";
import {
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBInputGroup,
	MDBInput,
	MDBIcon,
	MDBBtn,
} from "mdb-react-ui-kit";
import productApi from "../api/productApi";
import { addProdToCart } from "../api/cartApi";
import { WishApi } from "../api/wishlistApi";
import ProductCard from "./common/ProductCard";
import { AuthContext } from "../context/AuthContext";

export default function AllProducts() {
	const { customer } = useContext(AuthContext);
	const [prods, setProds] = useState([]);
	const [searchBox, setSearchBox] = useState("");
	const cartId = customer.cart.cartId;
	const wishId = customer.wishlist.wishlistId;
	let mybutton;

	// var res = productApi.getAllProducts();

	// useEffect(() => {
	// 	res.then((response) => {
	// 		console.log(response.data);
	// 	}).catch((error) => console.log(error.response.data));
	// }, []);

	useEffect(() => {
		const fetch = async () => {
			await productApi
				.getAllProducts()
				.then((response) => {
					setProds(() => response.data);
				})
				.catch((error) => console.log(error.response.data));
		};
		fetch();
	}, []);

	window.onscroll = function () {
		mybutton = document.getElementById("btn-back-to-top");
		scrollFunction(mybutton);
	};

	function scrollFunction(mybutton) {
		if (
			document.body.scrollTop > 20 ||
			document.documentElement.scrollTop > 20
		) {
			mybutton.style.display = "block";
		} else {
			mybutton.style.display = "none";
		}
	}

	function backToTop() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}

	// const fetchData = useCallback(async () => {
	// 	try {
	// 		const response = await productApi.getAllProducts();
	// 		setProds(response.data);
	// 	} catch (error) {
	// 		console.log(error.response.data);
	// 	}
	// }, []);

	// useEffect(() => {
	// 	fetchData();
	// }, []);

	const memoizedProds = useMemo(() => prods, [prods]);

	function handleAddToCart(pid) {
		console.log("Adding to cart");
		const fetch = async (id) => {
			return await addProdToCart(cartId, id)
				.then((res) => {
					console.log(res.data);
				})
				.catch((err) => console.log(err.response.data));
		};
		fetch(pid);
	}

	function handleAddToWish(pid) {
		console.log("Adding to Wishlist");
		const fetch = async (id) => {
			return await WishApi.addProductToWishlist(wishId, id)
				.then((res) => {
					console.log(res.data);
				})
				.catch((err) => console.log(err.response.data));
		};
		fetch(pid);
	}

	function handleSearchBox(event) {
		setSearchBox(event.target.value);
	}

	function handleSearch() {
		const fetch = async (val) => {
			return await productApi
				.filterByBrand(val)
				.then((res) => setProds(res.data))
				.catch((err) => console.log(err.response.data));
		};
		fetch(searchBox);
	}

	function handleSort() {
		const fetch = async () => {
			return await productApi
				.sortByPrice()
				.then((res) => {
					setProds(res.data);
				})
				.catch((err) => console.log(err.response.data));
		};
		fetch();
	}

	return (
		<>
			<MDBContainer fluid>
				<MDBBtn
					onClick={backToTop}
					id="btn-back-to-top"
					style={{
						position: "fixed",
						bottom: "20px",
						right: "20px",
						display: "none",
					}}
					className="btn-floating"
					color="success"
					size="lg"
				>
					<MDBIcon fas icon="arrow-up" />
				</MDBBtn>
				<MDBRow className="justify-content-center mb-0">
					<MDBCol md="12" xl="10">
						<MDBRow className="mb-0 mt-3">
							<MDBCol md="6" xl="4">
								<MDBInputGroup>
									<MDBInput
										onChange={handleSearchBox}
										name="searchBox"
										style={{ backgroundColor: "#fcffeb" }}
										label="Search by Brand"
										value={searchBox}
									/>
									<MDBBtn
										onClick={handleSearch}
										style={{ backgroundColor: "#40513B" }}
										rippleColor="dark"
									>
										<MDBIcon icon="search" />
									</MDBBtn>
								</MDBInputGroup>
							</MDBCol>
							<MDBCol md="6" xl="4">
								<MDBBtn
									onClick={handleSort}
									style={{ backgroundColor: "#40513B" }}
									rippleColor="dark"
								>
									<MDBIcon icon="fas fa-sort" /> Sort By Price
								</MDBBtn>
							</MDBCol>
						</MDBRow>
						{memoizedProds?.map((prod) => {
							return (
								<ProductCard
									key={prod.productId}
									id={prod.productId}
									image={prod.productName}
									brand={prod.brand}
									name={prod.productName}
									size={prod.dimension}
									color={prod.colour}
									category={prod.productCategory}
									price={prod.price}
									addToCart={handleAddToCart}
									addToWish={handleAddToWish}
								/>
							);
						})}
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		</>
	);
}
