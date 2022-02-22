import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';

import Header from './components/layout/Header'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'

import Guia from './pages/Guia'
import Home from './pages/Home'
import Reglas from './pages/Reglas'
import Contacto from './pages/Contacto'
import Novedades from './pages/Novedades'

function App() {
  return (
    <div className="App">
    <div className="background-image"></div>
      <Router>
        <Header/>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Novedades" element={<Novedades />}/>
          <Route path="/Guia" element={<Guia />}/>
          <Route path="/Reglas" element={<Reglas />}/>
          <Route path="/Contacto" element={<Contacto />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
