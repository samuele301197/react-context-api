import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OurPost from './pages/OurPost';
import Home  from "./pages/Home";
import Contatti from './pages/Contatti';
import GuestLayout from './layouts/GuestLayout';
import CreatePost from './pages/CreaPost';
import SinglePost from './pages/SinglePost';
import NotFound from './pages/NotFound';
import { PostProvider } from './components/contexts/PostContexts';


function App() {
  return (   
    <PostProvider>
      <BrowserRouter>
    <Routes>
      <Route element={<GuestLayout />}>
      <Route path="/" element={<Home />} />
      < Route path='/home' element={<Home />} />
      <Route path='/contatti' element={<Contatti />}/>
      <Route path='/ourpost' element={<OurPost />} />
      <Route path='/create-post' element={<CreatePost />} />
      <Route path="/ourpost/:id" element={<SinglePost />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
    </PostProvider>    
  );
};

export default App
