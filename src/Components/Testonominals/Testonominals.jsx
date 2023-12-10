
import Slider from "react-slick";
import phreview from '../../Assets/ph-review.webp'

import 'slick-carousel/slick/slick.css';
import logop from '../../Assets/producthunt.svg'

import 'slick-carousel/slick/slick-theme.css';
import TestonominalsData from '../../Assets/TestonominalsData'

const Testonominals = () => {
  

  
  
 
  const settings = {
    
    infinite: true,
    speed: 10,
   
    autoplaySpeed: 10,
    slidesToShow: 2,
    slidesToScroll: 3,
    initialSlide: 0,
    
    
    

    
  };
  return (
    <div className='testonominals' id='Testimonials' style={{marginTop:'100px', marginBottom:'100px'}}>
    <div className='container' style={{ margin: '100px' }}>
    <div className='content' style={{ textAlign: 'center'}}>
      <div className='row'>
        <div>
          <img src={phreview} alt=''/>
        </div>
        <h1>See what our users say</h1>
        <p>Loved by thousands, all around the World</p>
      </div>
      </div>
    </div>
      <div className='row'>
        <div>
          <Slider {...settings}>
            {TestonominalsData.map((i) => (
              <div key={i.id} >
                <p>{i.comment}</p>
                <img style={{width:'40px', height:'40px'}}  src={i.image} alt=''/>
                <p style={{display:'flex', flexDirection:'row'}}>{i.name}: <h5>{i.position}</h5> </p>
                
                <button style={{border:'1px solid', borderColor:'orange' ,display:'flex', flexDirection:'row'}}><img src={logop} alt=''/>view on p hunt</button>
              </div>

            ))}
          </Slider>
        </div>

      </div>
      <div className='row'>
        <div>
          <Slider {...settings}>
            {TestonominalsData.map((i) => (
              <div key={i.id}>
                <p>{i.comment}</p>
                <img style={{width:'40px', height:'40px'}} src={i.image} alt='' />
                <h4>{i.name}</h4>
                <button style={{border:'1px solid', borderColor:'orange'}}><img src={logop} alt=''/>view on p hunt</button>
              </div>

            ))}
          </Slider>
        </div>

      </div>
      

    </div>
     
    
  )
}

export default Testonominals