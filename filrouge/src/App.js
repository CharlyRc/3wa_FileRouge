import Home from "./components/Home.jsx"
import Products from "./components/Products.jsx"
import Contact from "./components/Contact.jsx"
import Header from "./components/Header.jsx"
import Nav from "./components/Nav.jsx"
import Footer from "./components/Footer.jsx"

import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="home" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<p>C'est une erreur</p>} />
        </Routes>
        <Footer />
    </BrowserRouter>
    
  );
}

export default App;
