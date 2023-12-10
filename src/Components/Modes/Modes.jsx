import React from 'react'
import landing12 from '../../Assets/laptop-landing-12.png'
import fastforward from '../../Assets/fast-forward.svg'
import poweroff from '../../Assets/power-off.svg'
import serch from '../../Assets/search-plus.svg'

const Modes = () => {
  return (
    <div>
      <div className='container' style={{ display: 'flex', flexDirection: 'row', margin: '20px' }}>

      <div className="rightSide" style={{display:'flex',padding:'20px',height:'500px',width:'50%' }}>
        
        <img  src={landing12} alt=''/>
        
      
    </div>
        <div className='right_side' style={{display:'flex',flexDirection:'column',padding:'5px',justifyContent:'center', width:'50%'}}>
        <div><button style={{ border: '1px solid', borderColor: 'blue', borderRadius: '10px', backgroundColor: 'white',color:'blue' }}>Different Modes Available</button></div>
          <h2>Customize your assistant with a range of different modes</h2>
          <p>Further power your questions with additional modes. Afforai allows you to switch between three different modes, each which have unique ways of utilising our AI tools to answer your question(s).
          </p>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div>
            <div style={{display:'flex',flexDirection:'row',gap:'4px'}}>
            <img src={fastforward} alt=''/>
            <h5>Fast Mode (default)</h5>
            <button style={{ border: 'px', borderColor: 'blue', borderRadius: '10px', color:'blue' }}>1 credit</button>

            

            </div>
            <div>
            <img src={poweroff} alt=''/>

            </div>
            <div>
            <img src={serch} alt=''/>

            </div>
              
            </div>
          </div>
          

        </div>
      </div>

    </div>
  )
}

export default Modes