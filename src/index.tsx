import './index.css';
import Layout from './components/layout/layout';
import { BrowserRouter, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Routess from './components/routes/Routes';
import { Route } from 'react-router-dom';
import { AuthProvider } from './components/providers/AuthProvider';
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
const container = document.getElementById('root');
const root = createRoot(container!);
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCpDxDWRsJNSHNRC5Gf9mpwZTHGTuPbqcg",
  authDomain: "moon-8ca34.firebaseapp.com",
  projectId: "moon-8ca34",
  storageBucket: "moon-8ca34.appspot.com",
  messagingSenderId: "234010013417",
  appId: "1:234010013417:web:75f5b230796aeb93fc0a78",
  measurementId: "G-2WWE0T5P67"
}
initializeApp(firebaseConfig);



root.render(
  <BrowserRouter>
  <AuthProvider>
  <Routes>
      <Route path="*" element={<Layout><Routess /></Layout>} />
    </Routes>
  </AuthProvider>
  </BrowserRouter>
);