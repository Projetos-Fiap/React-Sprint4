import React from 'react';
import { BrowserRouter, Switch, Route, } from 'react-router-dom'; 
import { createHashHistory } from 'history';

// Importing Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Importing Pages
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Page1 from "./routes/Page1";
import Page2 from "./routes/Page2";
import Signup from "./routes/Signup";

import "./App.css"; // Import CSS

const hashHistory = createHashHistory();

function App() {
  return (
    <BrowserRouter history={hashHistory}> 
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
        <Route path="/signup" component={Signup} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
