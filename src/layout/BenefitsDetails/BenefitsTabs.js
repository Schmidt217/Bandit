import React from 'react'

const BenefitsTabs = ({isSelected, onSelect}) => {
	
  return (
    <div className="benefits-tab-container">
		<button
			className={`benefits-tab ${isSelected === "partner/integrator" ? "benefits-tab-active" : ""}`}
			value="partner/integrator"
			onClick={onSelect}
		>
			Partner/ Integrator
		</button>
		<button
			className={`benefits-tab ${isSelected === "technicians" ? "benefits-tab-active" : ""}`}
			value={"technicians"}
			onClick={onSelect}
		>
			Technicians
		</button>
		<button
			className={`benefits-tab ${isSelected === "customer" ? "benefits-tab-active" : ""}`}
			value={"customer"}
			onClick={onSelect}
		>
			Customer
		</button>
	</div>
  )
}

export default BenefitsTabs