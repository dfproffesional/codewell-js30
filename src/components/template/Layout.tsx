import React from 'react';
import './Layout.css';
import { Link } from "react-router-dom";
export default function Layout(props:any){
  return (
    <React.StrictMode>
      {/* header */}
      <header className='flex fl-justify-between '>
        <img src="/assets/Logo.svg" alt="logo" />
        <nav className='flex fl-align-center'>
          <Link to="/products">Products</Link>
          <Link to="/challenges">Challenges</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/other_links">Other Links</Link>
        </nav>
        <section>
          <div className='flex fl-align-center'>
            <a href="#">Sign in</a>
            <button className='btn btn-primary'>Try for free</button>
          </div>
          <button>
            <img src="/assets/Menu.svg" alt="menu" />
          </button>
        </section>
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