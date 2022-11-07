import React from 'react'

const BenefitsContent = ({ isSelected }) => {
  return (
    <>
        <div className={`benefits-content benefits-content-1 ${isSelected === "partner/integrator" ? "benefits-content-active" : ""}`}>
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

		<div className={`benefits-content benefits-content-2 ${isSelected === "technicians" ? "benefits-content-active" : ""}`}>
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

		<div className={`benefits-content benefits-content-3 ${isSelected === "customer" ? "benefits-content-active" : ""}`}>
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
    </>
  )
}

export default BenefitsContent