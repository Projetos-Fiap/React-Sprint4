import React from "react";
import RoutesApp from "../routes2";
import { AuthProvider } from "../contexts/auth";
import GlobalStyle from "../styles/global";

const App = () => (
  <AuthProvider>
    <RoutesApp />
    <GlobalStyle />
  </AuthProvider>
);

export default App;