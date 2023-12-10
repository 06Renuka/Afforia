import Landing17Data from "../../Assets/Landing17Data";
import React from 'react'
import './Landing17.css'


const Landing17 = () => {
  return (
    <div className="landing-container">
      <div className="container" style={{ margin: '100px' }}>
        <div className="content">
          <div className="row">
            <h2>Unquestionable accuracy & reliability</h2>
            <p>We pride ourselves on the quality of our chatbot’s responses, and go<br /> the extra mile to ensure the accuracy & reliability of our answers.</p>
          </div>

          <div className="cardbenefits">
            {Landing17Data.map((i) => (
              <div key={i.id} className="card">
                <img src={i.image} alt="" />
                <h5>{i.Description}</h5>
                <p>{i.Description1}</p>
              </div>
            ))}


          </div>

        </div>

      </div>







    </div>

    
    
  )
};

export default Landing17