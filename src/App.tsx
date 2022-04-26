import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import Content from './components/Content'
import './App.css';

import Layout from "./components/template/Layout";
function App() {
  return (
    <React.StrictMode>
      <Layout
        content={<Content/>}
      />
        
      <Routes>
        {/* <Route path="/" element={<Layout />} /> */}
      </Routes>
    </React.StrictMode>
  );
}

export default App;
