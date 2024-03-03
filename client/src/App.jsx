import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Layout from './pages/Layout.jsx';
import Register from './pages/Register/Register.jsx';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Layout/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
  