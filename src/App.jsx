// App.js
import React from 'react';
import { HashRouter } from "react-router-dom";
import "./App.css";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Service from './Components/services/Service';
import Projects from './Components/Portfolio/projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


/*import ScrollUp from './Components/scrollup/ScrollUp'; */


function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <main className='main'>
          <Home />
          <About />
          <Skills />
          <Service />
          <Projects />

          <Contact />

        </main>
        <Footer />

      </HashRouter>

    </>
  );
}

export default App;
