import React from 'react';

import './Profile.css';
import profileBackground from '../assets/profile-background.jpg';
import Posts from './Posts';

function Profile() {
  return (
    <section className="profile">
      <p className="profile-background-image">
        <img src={profileBackground} alt="Profile background" />
      </p>
      <div>ava + description</div>
      <Posts />
    </section>
  );
}

export default Profile;
