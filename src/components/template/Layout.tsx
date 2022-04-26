import React from 'react';
import './Layout.css';

export default function Layout(props:any){
  return (
    <header className='flex fl-justify-between'>
      <img src="/assets/Logo.svg" alt="logo" />
      <button>
        <img src="/assets/Menu.svg" alt="menu" />
      </button>
    </header>
  )
}