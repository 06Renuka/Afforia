import React from 'react'
import Landing14image from '../../Assets/laptop-landing-14.png'

const Landing14 = () => {
    return (
        <div>
            <div className="container" style={{ display: 'flex', flexDirection: 'row', margin: '100px', gap:'20px'}}>
                <div className="leftSide" style={{  padding: '5px', justifyContent:'center',}} >
                    <img  style={{margin:'10px', width: '100%' }} src={Landing14image} alt='' />


                </div>
                <div className="rightSide" style={{ display: 'flex',flexDirection: 'column', justifyContent: 'center', padding: '20px', height: '500px', width: '50%' }}>
                    <div><button style={{ border: '1px solid',color:'blue', borderColor: 'blue', borderRadius: '10px', backgroundColor: 'white' }}>Get more out of your files</button></div>
                    <h1>File Wizard - a game<br /> changing new feature</h1>
                    <p>Convert your files with less effort than ever. Afforai’s File Wizard feature allows you to transform your files, in limitless different ways. We can translate, summarize, or explain your upload in no time.</p>




                </div>
            </div>
        </div>
    )
}

export default Landing14;