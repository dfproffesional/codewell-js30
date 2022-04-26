import React from 'react';
import './Content.css';

export default function Content(props:any){
  return (
    <React.StrictMode>
      <section className='content_description'>
        <h1>
          Ondeck is your remote <span>conference calling tool</span>
        </h1>
        <p>
          Ondeck is a service that allows you to create beautiful, online, and encrypted
          video calls for you and your remote team.
        </p>
      </section>
    
      <button className='btn btn-primary'>Try for free</button>
    
      <section className='content_review flex fl-align-center'>
        <p>5.0 Rating based on reviews from:</p>
        <div>
          <img src="/assets/Capterra Logo.svg" alt="icon" />
          <img src="/assets/AlternativeTo Logo.svg" alt="icon" />
        </div>
      </section>
    </React.StrictMode>
  )
}