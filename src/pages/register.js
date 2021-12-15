import React from "react";
import Bandit from "../images/bandit.png";

const Register = () => {
	return (
		<>
			<header
				style={{
					backgroundImage: "none",
					height: "100px",
				}}
			>
				<img id="header-logo" src={Bandit} alt="" />
			</header>
			<div className="login-form-container">
				<h3 className="login-head">Register</h3>
				<form className="login-form">
					<div>
						<label htmlFor="name">Name</label>
						<input type="name" name="name" required />
					</div>
					<div>
						<label htmlFor="email">Email</label>
						<input type="email" name="email" required />
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input type="password" name="password" required />
					</div>
					<div>
						<label htmlFor="password">Confirm Password</label>
						<input type="password" name="password" required />
					</div>
					<input type="submit" value="Login" className="btn" />
				</form>
			</div>
		</>
	);
};

export default Register;
