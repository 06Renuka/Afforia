import React from 'react';
import PricingDatacards from '../../Assets/PricingDatacards';
import './PrincingCards.css'; // Create a CSS file for styling

const PricingCards = () => {
  return (
    <div className='pricing-cards-container container'>
      {PricingDatacards.map((card) => (
        <div key={card.id} className='pricing-card'>
          <div className='d-flex flex-row' style={{gap:'100px'}}>
            <h5>{card.benfits}</h5>
            <button style={{float:'right',border:'none',
                borderRadius: '10px', backgroundColor:'whitesmoke', color: 'blue',fontWeight:'400'}} className='power'>{card.power}</button>
          </div>

          <div>
            <p className='price'>${card.price.toFixed(2)}</p>
            <p>{card.sentence1}</p>
            <p style={{ display: 'flex', flexDirection: 'row' }}>
              <img style={{ height: '30px', width: '30px' }} src={card.image} alt='' />
              {card.sentence2}
            </p>
            <p style={{ display: 'flex', flexDirection: 'row' }}>
              <img style={{ height: '30px', width: '30px' }} src={card.image} alt='' />
              {card.sentence3}
            </p>
            <p style={{ display: 'flex', flexDirection: 'row' }}>
              <img style={{ height: '30px', width: '30px' }} src={card.image} alt='' />
              {card.sentence4}
            </p>
            <p style={{ display: 'flex', flexDirection: 'row' }}>
              <img style={{ height: '30px', width: '30px' }} src={card.image} alt='' />
              {card.sentence5}
            </p>
          </div>
          <div>
            <button
              href={card.purchase}
              className='purchase-link'
              style={{
                border: '1px solid',
                padding: '8px 80px',
                borderColor: 'blue',
                borderRadius: '10px',


                color: 'white',
                fontSize: '100',
              }}
            >
              Get started
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingCards;
