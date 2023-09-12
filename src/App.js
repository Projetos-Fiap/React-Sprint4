import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importando componentes, Header e Footer
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Importando Páginas (Routes)
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Page1 from "./routes/Page1";
import Page2 from "./routes/Page2";
import Signup from "./routes/Signup";
import ErrorPage from "./routes/ErrorPage"

// Importando CSS
import "./App.css"; // 

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
