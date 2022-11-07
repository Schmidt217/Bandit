import React, { useState } from "react";
import BenefitsContent from "./BenefitsDetails/BenefitsContent";
import BenefitsTabs from "./BenefitsDetails/BenefitsTabs";

const Benefits = () => {
	const [isSelected, setIsSelected] = useState('partner/integrator')

	const selectTab = (e) => {
		setIsSelected(e.target.value)	
	}

	return (
		<div>
				<div id="benefits" className="section-holder odd-section">
				<section className="section">
					<h2>Benefits</h2>
					<BenefitsTabs isSelected={isSelected} onSelect={selectTab}/>
					<BenefitsContent isSelected={isSelected}/>
				</section>
			</div>
		</div>
	)
}

export default Benefits;
