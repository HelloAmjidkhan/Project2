import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Protfolio from './components/Protfolio';
import Services from './components/Services';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
     <Header />
     <Home />
     <Services />
     <About />
     <Skills />
     <Protfolio />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
