import React from 'react'

const Landingpage = () => {
    return (
        <div className="home-wrap">
            <h1 className='heading'>Welcome to PopX</h1>
            <p className='sub-heading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            <div className="btn-wrap">
                <button type='button' className='create-btn' onClick={() => { window.location.href = '/sign'; }}>Create Account</button>
                <button type='button' className='login-btn' onClick={() => {window.location.href = '/login'}}>Already Registered? Login</button>
            </div>
        </div>
    )
}

export default Landingpage;