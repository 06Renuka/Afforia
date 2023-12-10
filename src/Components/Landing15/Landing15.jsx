import React from 'react'

import dropbox from '../../Assets/laptop-landing-15.png'

const Landing15 = () => {
    return (
        <div>
            <div className="container" style={{ margin: '100px' }}>
                <div className="leftSide" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '20px', gap: '20px' }}>

                    <div style={{ gap: '20px', justifyContent: 'space-between', textAlign: 'center' }} >
                        <div><button style={{ border: '1px solid', borderColor: 'blue', borderRadius: '5px', backgroundColor: 'white', color: 'blue' }}>Seamless Integrations - Coming Soon</button></div>
                        <h2>Upload Files directly from Google<br /> Drive, One Drive & Dropbox</h2>
                        <p>Afforai allows you to upload files directly from Google Drive, One Drive & Dropbox,<br /> meaning your experience will be smooth sailing regardless of your preferred</p>
                    </div>
                    <div className='row' style={{ width: '75%', maxWidth: '1440px', margin: '0px auto', justifyContent:'center' }}>
                        <img style={{height:'auto', maxwidth:'100%'}} src={dropbox} alt='' />
                    </div>
                </div>



            </div>

        </div>
    )
};
export default Landing15;
