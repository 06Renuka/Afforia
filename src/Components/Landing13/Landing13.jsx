import React from 'react'

import landing13image from '../../Assets/laptop-landing-13.png'

const Landing13 = () => {
  return (
    <div>
       <div className="container"  style={{display:'flex', flexDirection:'row', margin:'100px'}}>
      <div className="leftSide" style={{display:'flex',flexDirection:'column',padding:'5px',justifyContent:'center', width:'50%'}} >
        
        <div><button style={{ border: '1px solid', borderColor: 'blue', borderRadius: '10px', backgroundColor: 'white',color:'blue' }}>Multiple Language Supported</button></div>
          <h1>Regardless of where you are <br/>from, Afforai is for you</h1>
          <p>We support more than 100 Languages, meaning you can seamlessly use our services regardless of where you are from. Our Cross Language Querying feature also allows flawless translation of documents.</p>
        </div>
        <div className="rightSide" style={{display:'flex',padding:'20px',height:'500px',width:'50%' }}>
        
          <img  src={landing13image} alt=''/>
          
        
      </div>
      </div>
      
      
    </div>
   
  )
}

export default Landing13;