import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Crypto App</span>
			</Link>
			<div className="ml-auto">
				<Link to="/Login">
					<button className="btn btn-primary">Login</button>
				</Link>
			</div>
		</nav>
	);
};
