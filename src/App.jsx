import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OurPost from './pages/OurPost';
import Home  from "./pages/Home";
import Contatti from './pages/Contatti';
import AppHeader from './components/AppHeader';
import GuestLayout from './layouts/GuestLayout';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<GuestLayout />}>
      < Route path='/home' element={<Home />} />
      <Route path='/contatti' element={<Contatti />}/>
      <Route path='/ourpost' element={<OurPost />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
