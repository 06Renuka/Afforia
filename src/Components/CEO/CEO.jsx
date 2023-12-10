import React from 'react'
import './CEO.css'
import CEOImage from '../../Assets/laptop-landing-20.png'

const CEO = () => {
    return (
        <div>
            <div className="container" style={{ display: 'flex', flexDirection: 'row', gap:'50px',justifyContent:'center', margin:'100px'}}>
                <div className='row' style={{ display: 'flex', flexDirection: 'column', padding: '5px', justifyContent: 'center', width: '50%', gap: '20px' }}>
                    <div><button style={{ border: '1px solid', borderColor: 'blue', borderRadius: '5px', backgroundColor: 'white', color: 'blue' }}>My promise to you</button></div>
                    <h2>100% money back guaranteed if you are not satisfied</h2>
                    <p>We crafted Afforai with total belief in our ability to make a chatbot that is not only powerful and reliable, but able to maximise your satisfaction as a user. This is why we have implemented a money back guarantee if you find yourself not satisfied with the capabilities of Afforai.
                    </p>
                    




                </div>
                <div className="rightSide" style={{ display: 'flex', marginLeft:'20px',  padding: '20px', height: '300px', width: '30%' }}>

                    <img  style={{justifyContent:'right'}} src={CEOImage} alt='' />


                </div>

            </div>

        </div>
    )
};
export default CEO;
