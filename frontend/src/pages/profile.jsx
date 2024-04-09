import React from 'react';
import Footer from '../components/footer';
import '../styles/profile.css';
import SmileOne from '../../public/assets/smile';

const Profile = () => {
    return (
        <div>
            <div className="profile-container">
                <div className='left-wrapper'>
                    <div className="left-wrapper__profile">
                        <SmileOne/>
                        <h1 className='left-wrapper__tag'>@risunyaaa</h1>
                        <h3 className='left-wrapper__description'>Full Stack Developer</h3>
                    </div>
                    <div className="left-wrapper__links">
                    </div>
                </div>
                <div className='right-wrapper'>
                    <div className="right-wrapper__parameters"></div>
                    <div className="right-wrapper__quiz-stats"></div>
                </div>
            </div>
            <Footer />
         </div>
    )
}

export default Profile;
