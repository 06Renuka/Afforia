import React from 'react';
import featuresData from '../../Assets/featuresData';
import plansData from '../../Assets/PlansData';
import tick from '../../Assets/tick.png'

const PricingFeature = () => {


    return (
        <div className='container' style={{ margin: '100px' }}>
            <table className='table'>
                <thead>
                    <tr>
                        <th className='text-center' style={{ padding: '30px' }}>Features</th>

                        {plansData.map((plan, index) => (
                            <th key={index}>

                                {plan.name} {plan.popular && <span>({plan.popular})</span>} {plan.bestValue && <span>({plan.bestValue})</span>}
                                <div className='d-flex flex-row gap-1' ><h4 style={{ color: 'blue' }}>{plan.price}</h4><span style={{ fontSize: '15px', paddingTop: '5px' }}>{plan.frequency}</span></div>
                                <div><button  className='new-btn violet-fill btn btn-primary'  style={{
                                    border: '1px solid',
                                    color:'white',

                                    padding: '8px 20px',
                                    borderColor: 'blue',
                                    borderRadius: '10px', 
                                    fontSize: '100',
                                }}>Get started</button></div>
                            </th>



                        ))}
                    </tr>
                </thead>
                <tbody>
                    {featuresData.map((feature, index) => (
                        <tr key={index} >
                            <td>{feature.feature}</td>
                            <td>{feature.plan1 === tick ? <img style={{width:'30px', height:'30px',backgroundColor:'rgb(239 230 255)',color:'rgb(38 2 102)', borderRadius:'50px'}} src={tick} alt="tick" /> : feature.plan1}</td>
                            <td>{feature.plan2 === tick ? <img style={{width:'30px', height:'30px',backgroundColor:'rgb(239 230 255)',color:'rgb(38 2 102)', borderRadius:'20px'}} src={tick} alt="tick" /> : feature.plan2}</td>
                            <td>{feature.plan3 === tick ? <img style={{width:'30px', height:'30px' ,backgroundColor:'rgb(239 230 255)',color:'rgb(38 2 102)', borderRadius:'20px'}} src={tick} alt="tick" /> : feature.plan3}</td>
                            <td>{feature.plan4 === tick ? <img style={{width:'30px', height:'30px' ,backgroundColor:'rgb(239 230 255)',color:'rgb(38 2 102)', borderRadius:'20px'}} src={tick} alt="tick" /> : feature.plan4}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PricingFeature;
