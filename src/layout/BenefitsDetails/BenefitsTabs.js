import React from 'react'

const BenefitsTabs = ({isSelected, onSelect}) => {
	
  return (
    <div className="benefits-tab-container">
		<button
			id="1"
			className={`benefits-tab benefits-tab-1 ${isSelected === "partner/integrator" ? "benefits-tab-active" : ""}`}
			value="partner/integrator"
			onClick={onSelect}
		>
			Partner/ Integrator
		</button>
		<button
			id="2"
			className={`benefits-tab benefits-tab-1 ${isSelected === "technicians" ? "benefits-tab-active" : ""}`}
			value={"technicians"}
			onClick={onSelect}
		>
			Technicians
		</button>
		<button
			id="3"
			className={`benefits-tab benefits-tab-1 ${isSelected === "customer" ? "benefits-tab-active" : ""}`}
			value={"customer"}
			onClick={onSelect}
		>
			Customer
		</button>
	</div>
  )
}

export default BenefitsTabs