import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Importando componentes, Header e Footer
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Importando Páginas (Routes)
import HomePage from "./routes/HomePage";
import SobrePage from "./routes/SobrePage";
import ContactPage from "./routes/ContactPage";
import MapPage from "./routes/MapPage";
import AprendaPage from "./routes/AprendaPage";
import LoginPage from "./routes/LoginPage";
import ErrorPage from "./routes/ErrorPage"

// Importando CSS
import "./App.css"; // 

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/sobre-nos" element={<SobrePage />} />
      <Route path="/contato" element={<ContactPage />} />
      <Route path="/mapa-dos-ecopontos" element={<MapPage />} />
      <Route path="/aprenda-mais" element={<AprendaPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App;
