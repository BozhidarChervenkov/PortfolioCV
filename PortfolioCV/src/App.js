import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import ProfessionalExperience from './components/ProfessionalExperience';
import PersonalProjects from './components/PersonalProjects';
import Contact from './components/Contact';

function App() {
  return (
    <div >
      <Navbar />
      <Home />
      <About />
      <Education />
      <Achievements />
      <Skills />
      <ProfessionalExperience />
      <PersonalProjects />
      <Contact />
    </div>
  );
}

export default App;