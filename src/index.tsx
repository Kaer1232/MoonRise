import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './components/layout/layout';
import Home from './components/pages/home/Home';
import Routess from './components/routes/Routes';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Sidebar from './components/layout/sidebar/Sidebar';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <BrowserRouter>
    <div>
    <Routes>
    <Route path='./' element={<Home />} />
        <Route path="./" element={<Layout />} />
        <Route path="./" element={<Sidebar />} />
        <Route path="./" element={<Routess />} />
    </Routes>
    </div>
    </BrowserRouter>
    
);