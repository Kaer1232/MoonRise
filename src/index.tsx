import './index.css';
import Layout from './components/layout/layout';
import { BrowserRouter, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Routess from './components/routes/Routes';
import { Route } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<Layout><Routess /></Layout>} />
    </Routes>
  </BrowserRouter>
);