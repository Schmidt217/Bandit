import React, { useState, useEffect } from "react";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const [showSuccess, setShowSuccess] = useState(false);
	const [showError, setShowError] = useState(false);
	const [loading, setLoading] = useState(false);

	const submitEmail = (e) => {
		e.preventDefault();
		setLoading(true);

		// create a URLParamObject
		const params = new URLSearchParams();
		params.append("name", name);
		params.append("email", email);
		params.append("phone", phone);
		params.append("subject", subject);
		params.append("message", message);
		params.append("form-name", "contact"); // the name of your form in Netlify
		const urlEncodedData = params.toString();

		fetch("/", {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded", // important! we are not sending JSON, we are sending URL encoded data
			},
			body: urlEncodedData,
		})
			.then((response) => {
				if (response.ok) {
					setShowSuccess(true);
					setLoading(false);
				} else {
					setShowError(true);
					setLoading(false);
					console.error(
						"An error occurred submitting the form: ",
						response.error
					);
				}
			})
			.catch((error) => {
				console.error(error);
			});
	};

	// let success/error message show for 6 seconds, then reset form
	useEffect(() => {
		setTimeout(() => {
			setName("");
			setEmail("");
			setPhone("");
			setSubject("");
			setMessage("");
			setShowSuccess(false);
			setShowError(false);
		}, 4000);
	}, [showError, showSuccess]);

	return (
		<div id="contact" className="section-holder odd-section">
			<section className="section">
				<h2>Contact Us!</h2>
				<p>For more information or if you have any questions please ask!</p>
				<hr />
				<div className="contact-row">
					<div className="contact-column">
						<form onSubmit={submitEmail}>
							<input
								type="text"
								value={name}
								onChange={(e) => setName(e.target.value)}
								className="input-search name"
								name="name"
								placeholder="Name"
								required
							/>

							<input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="input-search email"
								name="email"
								placeholder="Email"
								required
							/>

							<input
								type="text"
								value={subject}
								onChange={(e) => setSubject(e.target.value)}
								className="input-search subject"
								name="subject"
								placeholder="Subject"
								required
							/>

							<input
								type="tel"
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
								className="input-search phone"
								name="phone"
								placeholder="Phone Number"
								required
							/>

							<textarea
								name="message"
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								className="input-search"
								cols="30"
								rows="10"
								placeholder="Message"
								id="message"
							></textarea>
							<button id="form-submit">
								{loading ? "Submitting..." : "SUBMIT"}
							</button>
							{showSuccess && (
								<div>
									Thank you for your message. We will get back to you shortly.
								</div>
							)}
							{showError && (
								<div>
									There was an error sending your message. Please try again
									later.
								</div>
							)}
						</form>
					</div>
					<div className="contact-column-2">
						<h3>Contact Information</h3>
						<h4>Location</h4>
						<p className="location">
							12600 Hill Country Blvd Suite R-275, <br />
							Bee Cave, TX 78738
						</p>
						<h4>Email</h4>
						<p className="our-email">info@banditsvc.com</p>
						<h4>Call Us</h4>
						<p className="call">+1 (512) 827-1888</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Contact;
