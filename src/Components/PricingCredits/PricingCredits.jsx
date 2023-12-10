import React from 'react';

export let PricingCreditsdata = [
  {
    purpose: 'Upload Files',
    points: '1 credit/10 pages',
  },
  {
    purpose: 'Default Mode Answer',
    points: '1 credit',
  },
  {
    purpose: 'Google Mode Answer',
    points: '1 credit',
  },
  {
    purpose: 'Powerful Mode Answer',
    points: '1 credit',
  },
  {
    purpose: 'Powerful + Google Mode Answer',
    points: '1 credit',
  },
];

const PricingCredits = () => {
  return (
    <div className='container' style={{margin:'100px', display:'flex', flexDirection:'column', gap:'20px'}}>
      <div className='row text-center' style={{margin:'10px'}}>
        <h3>Credit Pricing Breakdown</h3>
      </div>
      <table className='table mx-auto' style={{ width:'50%'}}>
        
        <tbody>
          {PricingCreditsdata.map((item, index) => (
            <tr key={index}  className='my-3'  style={{ display:'flex',justifyContent:'space-between',}}>
              <td>{item.purpose}</td>
              <td>
                <button
                  style={{
                    border: 'none',
                    borderRadius: '10px',
                    backgroundColor: 'whitesmoke',
                    color: 'blue',
                    fontWeight: '400',
                  }}
                >
                  {item.points}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className='text-center'>Max. Document upload size is 256MB</p>
    </div>
  );
};

export default PricingCredits;
