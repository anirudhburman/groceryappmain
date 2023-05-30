/* eslint-disable testing-library/no-render-in-setup */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { AuthContext } from "../../context/AuthContext";
import Navbar from "./Navbar";

// Mock the AuthContext
const mockAuthContext = {
	customer: {
		cart: {
			products: [],
		},
	},
	isAuth: true,
	logout: jest.fn(),
};

// Mock the useNavigate hook
const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
	Link: ({ to, children }) => <a href={to}>{children}</a>,
	useNavigate: () => mockNavigate,
}));

describe("Navbar", () => {
	beforeEach(() => {
		render(
			<AuthContext.Provider value={mockAuthContext}>
				<Navbar />
			</AuthContext.Provider>
		);
	});

	it("renders the logo correctly", () => {
		expect(screen.getByText("CG MART")).toBeInTheDocument();
	});

	it("renders the login and register buttons when user is not authenticated", () => {
		const loginButton = screen.getByText("Login");
		const registerButton = screen.getByText("Register");

		expect(loginButton).toBeInTheDocument();
		expect(registerButton).toBeInTheDocument();
	});

	it("renders the logout button when user is authenticated", () => {
		const logoutButton = screen.getByText("Logout");

		expect(logoutButton).toBeInTheDocument();
	});

	it("calls the logout function and navigates to '/login' when logout button is clicked", () => {
		const logoutButton = screen.getByText("Logout");

		fireEvent.click(logoutButton);

		expect(mockAuthContext.logout).toHaveBeenCalled();
		expect(mockNavigate).toHaveBeenCalledWith("/login");
	});

	it("toggles the collapse component and updates the cart length when the navbar toggler is clicked", () => {
		const navbarToggler = screen.getByLabelText("Toggle navigation");

		fireEvent.click(navbarToggler);

		const collapseComponent = screen.getByTestId("navbar-collapse");
		const cartButton = screen.getByText("View Cart");

		expect(collapseComponent).toBeInTheDocument();
		expect(cartButton).toHaveTextContent(
			mockAuthContext.customer.cart.products.length
		);

		fireEvent.click(navbarToggler);

		expect(collapseComponent).not.toBeInTheDocument();
	});
});
