import React from 'react';
import './Content.css';

export default function Content(props:any){
  return (
    <React.StrictMode>
      <section>
        <div className='content_description'>
          <h1>
            Ondeck is your remote <span>conference calling tool</span>
          </h1>
          <p>
            Ondeck is a service that allows you to create beautiful, online, and encrypted
            video calls for you and your remote team.
          </p>
        </div>
      
        <button className='content_button btn btn-primary'>Try for free</button>
      
        <div className='content_review flex fl-align-center'>
          <p>5.0 Rating based on reviews from:</p>
          <div>
            <img src="/assets/Capterra Logo.svg" alt="icon" />
            <img src="/assets/AlternativeTo Logo.svg" alt="icon" />
          </div>
        </div>
      </section>
      <section className='content_hero'>
        <img src="/assets/Hero Image.png" alt="her-image" />
      </section>
    </React.StrictMode>
  )
}