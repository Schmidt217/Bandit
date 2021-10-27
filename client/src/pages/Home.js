import React, { Fragment } from "react";

const Home = () => {
	return (
		<Fragment>
			<header>
				<img id="header-logo" src="images/bandit.png" alt="" />
				<section id="home">
					<h1>Your On-Demand Solution to Security Service Calls</h1>
					<button className="learn-more">Learn More </button>
				</section>
			</header>

			{/* <!--------- ABOUT ---------> */}
			<div id="about" className="section-holder odd-section">
				<section className="section">
					<h2>About Us</h2>
					<p>
						The mission of Bandit is to provide qualified resources for low
						voltage and IT Partners in areas where internal service technicians
						are unavailable or nonexistent to assist customers. With the
						continual commoditization of product, service levels are even more
						imperative to provide value and lower attrition in the “on demand”
						world. The Bandit network allows Partners to utilize certified labor
						24/7 and maintain the current service rate card structure.
						Furthermore, it provides the flexibility to comply with shorter
						response times that are being demanded by today’s market.
						Exceptional service is far too rare and Bandit is out to solve this
						with prompt exceptional service. Anytime. Anywhere.
					</p>
				</section>
			</div>

			{/* <!--------- SERVICES/ HOW IT WORKS ---------> */}
			<div id="services" className="section-holder even-section services">
				<section className="section">
					<h2>Services</h2>

					<div className="services-row">
						<div className="services-column">
							<img
								src="images/cctv.webp"
								alt=""
								id="services-img3"
								className="services-img"
							/>
						</div>

						<div className="services-column">
							<p>
								Bandit leverages the power of mobile connectivity with an
								extensive network of licensed security and low voltage
								technicians to aid in service calls and small projects.
							</p>
						</div>

						<div className="services-column">
							<img
								src="/images/access-control2.webp"
								alt=""
								id="services-img1"
								className="services-img"
							/>
							<img
								src="/images/panel-technician.webp"
								alt=""
								id="services-img2"
								className="services-img"
							/>
						</div>
					</div>
				</section>

				<section id="how-it-works" className="section">
					<div className="how-it-works">
						<h2>How It Works</h2>
						<img
							src="/images/Bandit-how-it-works.png"
							alt=""
							className="how-it-works-img"
						/>

						<hr />

						<ul>
							<li>
								The Partner receives the inbound service request from their
								customer.
							</li>
							<li>
								Details about service call are filled out on the web portal and
								submitted to the network
							</li>
							<li>
								Local technicians are alerted and the first technician to accept
								the job prompts a link for the Partner with the technician's
								profile and ETA.
							</li>
							<li>
								Upon completion, the Partner and customer grade the technician’s
								service and Bandit releases payment
							</li>
						</ul>
					</div>
				</section>
			</div>

			{/* <!-------- Benefits ---------> */}
			<div id="benefits" className="section-holder odd-section">
				<section className="section">
					<h2>Benefits</h2>
					<div className="benefits-tab-container">
						<button
							className="benefits-tab benefits-tab-1 benefits-tab-active"
							data-tab="1"
						>
							Partner/ Integrator
						</button>
						<button className="benefits-tab benefits-tab-2" data-tab="2">
							Technicians
						</button>
						<button className="benefits-tab benefits-tab-3" data-tab="3">
							Customer
						</button>
					</div>

					<div className="benefits-content benefits-content-1 benefits-content-active">
						<img
							className="partner-image benefit-image"
							src="images/partner-image.webp"
							alt="partner"
						/>

						<ul className="partner-benefits benefit-list">
							<li>Less expensive labor rates</li>
							<li>Frees up W2 employees for priority work</li>
							<li>Meets growing demand for immediate response times</li>
							<li>Higher customer satisfaction</li>
							<li>
								Uncover new opportunities in areas traditionally not able to
								support
							</li>
						</ul>
					</div>

					<div className="benefits-content benefits-content-2">
						<ul className="technician-benefits benefit-list">
							<li>Flexibility in hours</li>
							<li>Additional income</li>
							<li>Ability to work for yourself</li>
							<li>Immediate payment</li>
							<li>A mechanism for growth to add additional certifications</li>
						</ul>

						<img
							className="technician-image benefit-image"
							src="images/technician.jpg"
							alt="technician"
						/>
					</div>
					<div className="benefits-content benefits-content-3">
						<img
							className="customer-image benefit-image"
							src="images/city.webp"
							alt="city"
						/>

						<ul className="customer-benefits benefit-list">
							<li>Rapid resolution from on-demand techs</li>
							<li>More consistent service process</li>
							<li>
								Feedback request on each call to optimize network integrity
							</li>
							<li>
								No overcharge fee for additional hours (no 2-hour minimum)
								<small>*Partner dependent</small>
							</li>
						</ul>
					</div>
				</section>
			</div>

			{/* <!------------ CORE VALUES --------------> */}

			<div id="core_values" className="section-holder core_values even-section">
				<section className="section">
					<h2>Core Values</h2>
					<div className="core-values-container">
						<div className="row">
							<img src="/images/shield.png" alt="" />
							<h3>Commitment</h3>
							<p>
								Our commitment to providing the best team members as an
								extension of your business is a great honor. We understand the
								trust required to allow us to interact with your customer and
								our promise is to meet that expectation. Everytime.
							</p>
						</div>
						<div className="row">
							<img src="/images/comment.png" alt="" />
							<h3>Accountability</h3>
							<p>
								Follow-through with a service call/project is at the core of
								every technician that has gone through the Bandit vetting
								process. Technicians are responsible for keeping up to date on
								the industry standards and best practices to ensure the safety
								of the client and ultimate satisfaction upon completion. When a
								technician accepts a job, it is their responsibility to see it
								through.
							</p>
						</div>
						<div className="row">
							<img src="/images/hand-shake.png" alt="" />
							<h3>Honesty</h3>
							<p>
								Having a team with integrity and openness builds a foundation of
								trust that subcontractors do not always achieve. Challenges can
								and do happen within a call, thus effective communication to
								reassure and provide options in our top priority... resolution.
							</p>
						</div>

						<div className="row">
							<img src="/images/thought.png" alt="" />
							<h3>Expertise</h3>
							<p>
								The Bandit team Tiers allow a Partner to choose which level of
								expertise is needed on a call. Some situations are more critical
								than others, so having the flexibility to reduce cost for the
								customer for a quick resolution can help tremendously.
								Certifications, licensing documentation and work-related history
								is also required to advance in Tiers. So, we can guarantee
								Partners are being represented as well as, if not better, than a
								W2 employee.
							</p>
						</div>
						<div className="row">
							<img src="/images/expert.png" alt="" />
							<h3>Ownership</h3>
							<p>
								Joining the Bandit team requires that extreme ownership be part
								of your DNA. If we accept a job, it’s guaranteed to be resolved.
								Our staff has an extensive history in security, making our
								collective knowledge among the top. In addition, our dedication
								to putting your customer first is second to none. When a project
								is accepted, our goal is to create a unified front as problem
								solvers willing to do whatever it takes.
							</p>
						</div>
					</div>
				</section>
			</div>

			{/* <!-------- CONTACT ---------> */}
			<div id="contact" className="section-holder odd-section">
				<section className="section">
					<h2>Contact Us!</h2>
					<p>For more information or if you have any questions please ask!</p>
					<hr />
					<div className="contact-row">
						<div className="contact-column">
							<form id="contact-form">
								<input
									type="text"
									className="input-search name"
									name="name"
									id="full-name"
									placeholder="Name"
									required
								/>

								<input
									type="email"
									className="input-search email"
									name="email"
									id="email-address"
									placeholder="Email"
									required
								/>

								<input
									type="text"
									className="input-search subject"
									placeholder="Subject"
									id="subject"
									required
								/>

								<input
									type="tel"
									className="input-search phone"
									name="phone"
									id="phone"
									placeholder="Phone Number"
									required
								/>

								<textarea
									name="message"
									id="message"
									className="input-search"
									cols="30"
									rows="10"
									placeholder="Message"
								></textarea>
								<button id="form-submit">Submit</button>
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
			<div>
				<footer>
					<a href="downloads" className="download-google">
						<img
							src="images/googlePlayDownload.svg"
							alt="Download from the Google Play Store"
						/>
					</a>
					<a href="downloads" className="download-apple">
						<img
							src="images/appleDownload.svg"
							alt="Download from the Apple Store"
						/>
					</a>

					<p id="footer-text">
						&copy; <span id="date-year"></span> All Rights Reserved.
					</p>
				</footer>
			</div>
		</Fragment>
	);
};

export default Home;
