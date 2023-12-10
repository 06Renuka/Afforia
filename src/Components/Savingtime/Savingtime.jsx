import React from 'react'
import lastimage from '../../Assets/laptop-landing-16.png'

const Savingtime = () => {
    return (

        <div className='container d-flex flex-column' style={{ marginBottom: '100px', }}>
             <div style={{ borderRadius: '30px', overflow: 'hidden', width: '100%', }}>
                
                <div className='row' style={{ display: 'flex',marginTop:'100px', textAlign: 'center', justifyContent: 'center', flexDirection: 'column' }}>



                <h2>Start saving time today!</h2>
                <p>Join an ever-growing community, and get with Afforai started free of charge!</p>
                <div>
                    <button style={{ border: '1px solid', padding: '10px 20px', borderColor: 'blue', borderRadius: '10px', backgroundColor: 'blue', color: 'white', fontSize: '100' }}>Get started for Free</button>
                </div>
                



            </div>
            <img style={{height:'200px', width:'100%'}} src={lastimage} alt='' />
            </div>
        </div>
       
        
    )
}

export default Savingtime;