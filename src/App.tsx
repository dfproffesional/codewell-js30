import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Layout from "./components/template/Layout";
function App() {
  return (
    <React.StrictMode>
      <Layout
        className="flex"
        h1={<h1>Hi</h1>}
      />
        
      <Routes>
        {/* <Route path="/" element={<Layout />} /> */}
      </Routes>
    </React.StrictMode>
  );
}

export default App;
