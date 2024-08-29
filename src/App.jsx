import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Divisons from './pages/Divisons';


function App() {


  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/divisons' element={<Divisons />} />

      </Routes>

      <Footer />


    </BrowserRouter>
  )
}

export default App
