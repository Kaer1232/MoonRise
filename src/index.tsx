import './index.css';
import Layout from './components/layout/layout';
import Home from './components/pages/home/Home';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout>
      <Home/>
      </Layout> } />
    </Routes>
  </BrowserRouter>
);