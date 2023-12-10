import React from 'react'

import CEO from '../Components/CEO/CEO'
import FAQ from '../Components/FAQ/FAQ'
import HeaderPricing from '../Components/HeaderPricing/HeaderPricing.jsx';
import PricingCards from '../Components/PricingCards/PricingCards.jsx';
import PricingCredits from '../Components/PricingCredits/PricingCredits.jsx';
import PricingFeature from '../Components/PricingFeatures/PricingFeature.jsx';

const Pricing = () => {
  return (
    <div className='pricing' id='Pricing'>
      <HeaderPricing />
      <PricingCards />
      <PricingCredits />
      <PricingFeature />

      <CEO />
      <FAQ />
      



    </div>
  )
}

export default Pricing