import React from 'react';
import landing12 from '../../Assets/laptop-landing-12.png';
import fastforward from '../../Assets/fast-forward.svg';
import poweroff from '../../Assets/power-off.svg';
import search from '../../Assets/search-plus.svg';

const Modes = () => {
  return (
    <div className='container' style={{ display: 'flex', flexDirection: 'row', margin: '20px' ,gap:'130px'}}>
      <div className="rightSide" style={{ display: 'flex', padding: '20px', height: '500px', width: '50%' }}>
        <img src={landing12} alt='Laptop Landing 12' />
      </div>
      <div className='col' style={{ padding: '10px', width: '100%', float: 'right' }}>
        <div className='row' style={{ display: 'flex', flexDirection: '', padding: '5px',gap:'10px', justifyContent: 'center', width: '100%' }}>
          <div><button style={{ border: '1px solid', borderColor: 'blue', borderRadius: '5px', backgroundColor: 'white', color: 'blue' }}>Different Modes Available</button></div>
          <h2>Customize your assistant with a range of different modes</h2>
          <p>Further power your questions with additional modes. Afforai allows you to switch between three different modes, each which have unique ways of utilizing our AI tools to answer your question(s).</p>
        </div>
        <div className='row' style={{ display: 'flex', flexDirection: 'column', padding: '5px', justifyContent: 'center', width: '100%' ,margin:'10px'}}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <ModeItem icon={fastforward} name="Fast Mode (default)" description="Quickly ask a question and receive an answer from the AI. This mode is most suited for applications that require only a small part of the documents to be scanned (ex. FAQ Chatbot, Search)." credits="1" />
            <ModeItem icon={poweroff} name="Powerful Mode" description="Get answers of extra high quality from the AI. This mode is most suited for applications that require inferences as well as the full documents to be scanned (ex. Textual Data Analysis, Search with Inference, Report Generation)." credits="2" />
            <ModeItem icon={search} name="Search Mode" description="Supplement your answers with the top 3 results from Google Search. This adds extra reliability to back up our already incredibly accurate answers." credits="3" />
          </div>
        </div>
      </div>
    </div>
  );
};

const ModeItem = ({ icon, name, description, credits }) => {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>
        <img style={{ width: "20px", height: '20px' }} src={icon} alt={name} />
        <h6>{name}</h6>
        <button className="modeButton" style={{border:'none',fontSize:'14px', borderRadius:'20px' , backgroundColor:'rgb(239 230 255)'}}>{credits} credit(s)</button>

      </div>
      <div style={{ display: 'flex', flexDirection: 'row', margin:'10px'}}>

        <span style={{fontSize:'14px', color:'rgb(38 2 102)'}}>{description}</span>

      </div>
    </div>


  );
};

export default Modes;
