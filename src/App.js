import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Importando componentes, Header e Footer
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Importando Páginas (Routes)
import HomePage from "./routes/HomePage";
import MapPage from "./routes/MapPage";
import AprendaPage from "./routes/AprendaPage";
import BeneficiosPage from "./routes/BeneficiosPage";
import SobrePage from "./routes/SobrePage";
import ContactPage from "./routes/ContactPage";
import ErrorPage from "./routes/ErrorPage"

import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";
import { AuthProvider } from "./contexts/auth";

// Importando CSS
import "./App.css"; // 

const App = () => {
  return (
    <AuthProvider>
      <>
      <Navbar />
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/mapa" element={<MapPage />} />
        <Route path="/aprenda" element={<AprendaPage />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/beneficios" element={<BeneficiosPage />} />
        <Route path="/contato" element={<ContactPage />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
      <Footer />
      </>
    </AuthProvider>  
  )
}

export default App;
