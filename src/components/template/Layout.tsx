import React from 'react';
import './Layout.css';

export default function Layout(props:any){
  return (
    <React.StrictMode>
      {/* header */}
      <header className='flex fl-justify-between'>
        <img src="/assets/Logo.svg" alt="logo" />
        <button>
          <img src="/assets/Menu.svg" alt="menu" />
        </button>
      </header>
      {/* content */}
      <main className='layout_content flex'>
        {props.content}
      </main>
      {/* footer */}
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