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
      <main className='layout_content'>
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
        
        <section className='content_review flex fl-align-center'>
          <p>5.0 Rating based on reviews from:</p>
          <div>
            <img src="/assets/Capterra Logo.svg" alt="icon" />
            <img src="/assets/AlternativeTo Logo.svg" alt="icon" />
          </div>
        </section>
      </main>
      <footer>
        <p>Trusted by 3+ million people at companies like</p>
        <section className='flex fl-wrap fl-justify-around'>
          <img src="/assets/Netflix Logo.svg" alt="logo-netflix" />
          <img src="/assets/Shopify Logo.svg" alt="logo-netflix" />
          <img src="/assets/Spotify Logo.svg" alt="logo-netflix" />
          <img src="/assets/Walmart Logo.svg" alt="logo-netflix" />
        </section>
      </footer>
    </React.StrictMode>
  )
}