import React from 'react'
import landing5 from '../../Assets/laptop-landing-5.png'

const Productivity = () => {
  return (
    <div className='container' style={{display:'flex', flexDirection:'column',justifyContent:'center',margin:'100px'}}>
        <div className='row' style={{marginBottom:'20px',display:'flex',textAlign:'center', justifyContent:'center', flexDirection:'column'}}>
        <div><button style={{border:'1px solid', borderColor:'blue',borderRadius:'5px',backgroundColor:'white', color:'blue',alignItems:'center'}}>10x your productivity</button></div>
          

            <h2>Save yourself from stress & <br/>streamline your workflow</h2>
            <p>The average worker spends 9 hours per week looking through & gathering information<br/>
             from thick stacks of documents. With Afforai, you can save<br/> yourself 8 hours per week (plus a lot of headaches).</p>
        </div>
        <div className='row' style={{width:'75%', maxWidth:'1440px',margin:'0px auto'}}>
          <img src={landing5} alt=''/>
        </div>
    </div>
  )
}

export default Productivity