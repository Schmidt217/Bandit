import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import Logo from "../images/logo.png";

const Navbar = ({ icon }) => {
	const navRef = useRef();
	const location = useLocation();

	const toggleNav = () => {
		navRef.current.classList.toggle("active");
	};

	const goToSection = (e) => {
		e.preventDefault();
		const id = e.target.getAttribute("href");
		document.querySelector(id).scrollIntoView({ behavior: "smooth" });
		toggleNav();
	};

	const loginLinks = (
		<>
			<ul className="page-nav">
				<li className="nav-item" onClick={toggleNav}>
					<Link to="/">Home</Link>
				</li>
				<li className="nav-item" onClick={toggleNav}>
					<Link to="/login">Login</Link>
				</li>
			</ul>
		</>
	);

	const homeLinkData = [
		{ label: "Home", href: "#home" },
		{ label: "About Us", href: "#about" },
		{ label: "Services", href: "#services" },
		{ label: "How It Works", href: "#how-it-works" },
		{ label: "Benefits", href: "#benefits" },
		{ label: "Core Values", href: "#core-values" },
		{ label: "Contact Us", href: "#contact" },
	];

	const homeLinks = (
		<>
			<ul className="nav-items">
				{homeLinkData.map((link) => {
					return (
						<li key={link.href} className="nav-item" onClick={goToSection}>
							<a className="nav-link" href={link.href}>
								{link.label}
							</a>
						</li>
					);
				})}
			</ul>
			<ul className="page-nav">
				<li className="nav-item" onClick={toggleNav}>
					<Link to="/login">Login</Link>
				</li>
			</ul>
		</>
	);

	const changeNav = () => {
		if (location.pathname === "/") {
			return homeLinks;
		}
		if (location.pathname === "/login") {
			return loginLinks;
		}
	};

	let navMenu = changeNav();

	return (
		<>
			<nav ref={navRef}>
				<button
					className="closeBtn"
					id="lines"
					aria-label="menu button"
					onClick={toggleNav}
				>
					<div className="line line1"></div>
					<div className="line line2"></div>
					<div className="line line3"></div>
				</button>
				{icon}
				{navMenu}
			</nav>
		</>
	);
};

Navbar.propTypes = {
	icon: PropTypes.element.isRequired,
};

Navbar.defaultProps = {
	icon: <img src={Logo} alt="" />,
};

export default Navbar;
