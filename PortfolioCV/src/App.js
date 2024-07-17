import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import ProfessionalExperience from './components/ProfessionalExperience';
import Works from './components/Works';

function App() {
  return (
    <div >
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Works />
      <ProfessionalExperience/>
      <Contact />
    </div>
  );
}

export default App;