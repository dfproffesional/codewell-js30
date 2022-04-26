import React from 'react';
import './Layout.css';

export default function Layout(props:any){
  return (
    <React.StrictMode>
      <header className='flex fl-justify-between'>
        <img src="/assets/Logo.svg" alt="logo" />
        <button>
          <img src="/assets/Menu.svg" alt="menu" />
        </button>
      </header>
      <main>
        <section>
          <h1>
            Ondeck is your remote conference calling tool
          </h1>
          <p>
            Ondeck is a service that allows you to create beautiful, online, and encrypted
            video calls for you and your remote team.
          </p>
        </section>
        
        <button>Try for free</button>
        
        <section>
          <p>5.0 Rating based on reviews from:</p>
          <div>
            <img src="/assets/Capterra Logo.svg" alt="icon" />
            <img src="/assets/AlternativeTo Logo.svg" alt="icon" />
          </div>
        </section>
      </main>
    </React.StrictMode>
  )
}