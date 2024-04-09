import React from 'react'

const AccountSetting = () => {
    return (
        <div className='account-wrap'>
            <div className='acc-heading'>Account Settings</div>
            <div className="info-wrap">
                <div className="profile-wrap">
                    <div className="img">
                        <img src="/Ellipse 114.png" alt="user profile" />
                        <img src="/Group 1585.png" alt="change-photo" className='camera'/>
                    </div>
                    <div className="user">
                        <div className="name">Marry Doe</div>
                        <div className="gmail">Marry@Gmail.Com</div>
                    </div>
                </div>
                <div className="text">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</div>
            </div>
        </div>
    )
}

export default AccountSetting