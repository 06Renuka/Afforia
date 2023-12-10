import React from 'react'
import './CSS/signuponly.css'

const Singnuponly = () => {
    return (
        <div id='signup' >
            <div className="signup-container" id='signup'  style={{display: 'flex', flexDirection:'column' }}>
                <h2 className='' style={{ fontSize: '40px',justifyContent:'center' }}>Afforai</h2>
                <p>Join Friends of Afforai</p>
                <div className='inner-container' style={{backgroundColor:'white'}}>
                    <p><bold>Receive a 30% commission on</bold> all payments within the first<br/> 12 months for paying customers you refer to afforai.com!</p>
                     <hr style={{border:'1px solid',borderColor:'blue'}}/>
                    <form className="signup-form" action="#" method="post">
                        <div className="form-group">
                            <label htmlFor="firstName">First name</label>
                            <input type="text" placeholder="John" id="firstName" name="firstName" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last name</label>
                            <input type="text" placeholder="Doe" id="lastName" name="lastName" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="example@gmail.com" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" placeholder="password" minLength="8" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm password</label>
                            <input type="password" placeholder="confirmPassword" id="confirmPassword" name="confirmPassword" minLength="8" required />
                        </div>
                        <div className="checkbox-group">
                            <input type="checkbox" id="humanCheck" name="humanCheck" required />
                            <label htmlFor="humanCheck">Are you human?</label>
                        </div>
                        <button style={{backgroundColor:'blue', color:'white', padding:'10px 10px'}}  type="submit" className="signup-button">Sign Up</button>
                    </form>
                    <p>By signing up you agree to the <a href="/Login">Terms of Use</a>.</p>
                </div>


                <p>Already have an account? <a href="/Login">Login</a></p>
                <p>Friends of Afforai is powered by Rewardful<a href="/Login">Terms of Use</a></p>
            </div>
        </div>
    )
}

export default Singnuponly