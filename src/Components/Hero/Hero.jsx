import React from 'react'
import './Hero.css'
import sumo from '../../Assets/appsumo.png'
import landing1 from '../../Assets/laptop-landing-1.png'
import lovedpeople from '../../Assets/laptop-landing-2.png'
import background from '../../Assets/laptop-landing-3.png'
import tick_data from '../../Assets/tick_data'

const Hero = () => {
  return (


    <div className='' style={{ width: '100%' }}>
      <div className='hero' style={{ paddingTop: '100px' }} id='Hero'>
        <div className='row' style={{ marginBottom: '20px', display: 'flex', textAlign: 'center', justifyContent: 'center', flexDirection: 'column', gap: '20px' }} >
          <div className=''><button style={{ border: '1px solid rgb(255, 174, 0)', borderRadius: '10px' }}><img style={{ backgroundColor: 'whitesmoke', width: '20px', height: '20px' }} src={sumo} alt='' />Nowon Appsumo<button>get life time deal</button></button></div>

          <span className="text-center" style={{ fontWeight: '600', fontSize: '45px', }}>Your second brain for<br /> maximizing productivity</span>
          <span className="text-center" style={{ fontWeight: '350', fontSize: '20px' }}>Afforai is an AI chatbot that searches, summarizes,<br />
            and translates info from multiple sources to produce trustworthy research. <br />
            Feed lengthy research documents to stacks of dry compliance requirements and extract the<br />
            key findings you need.</span>
          <div className='benefits'>
            {tick_data.map((i) => (
              <div key={i.id} className='line'>
                <img style={{ width: '20px', height: '20px' }} src={i.image} alt="" />
                <span>{i.commet}</span>
              </div>
            ))}
          </div>

          <div style={{ gap: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <button type="button" class="new-btn gray px-2 px-md-3 btn" style={{ backgroundColor: 'blue', color: 'white', padding: ' 0px 20px' }}>Try for free</button>
            <button type="button" class="try-button new-btn violet-fill px-2 px-md-3 btn" style={{ backgroundColor: 'white', fontWeight: '500' }}>View Pricing</button>
          </div>

        </div>










      </div>
      <div className='container d-flex flex-column' style={{ marginBottom: '100px',position: 'relative',padding:'10px' }}>
        <div style={{ overflow: 'hidden', width: '100%', marginTop: '150px', zIndex: '2',marginBottom:'100px' }}>
          <img style={{ width: '90%', justifyContent: 'center',borderRadius: '30px',margin:'0px 72px'}} src={landing1} alt='' />
        </div>
        <div style={{ overflow: 'hidden', width: '100%', zIndex: '1', position: 'absolute', top: 0, left: 0 }}>
          <img style={{ height: '300px', width: '100%', borderRadius: '30px' }} src={background} alt='' />
        </div>
      </div>


      <div>
        <div className='row' style={{ marginBottom: '20px', padding: '100px', margin: '10px', display: 'flex', textAlign: 'center', justifyContent: 'center', flexDirection: 'column', gap: '20px' }}>
          <p>Loved by 20,000+ users around the world</p>
          <img style={{ marginBottom: '20px', justifyContent: 'center', width: '40%', height: '50px', margin: '0px auto' }} src={lovedpeople} alt='' />



        </div>
      </div>

    </div>
  )
}

export default Hero