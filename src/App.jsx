import Contact from './Components/Contact/Contact';
import Cursor from './Components/Cursor/Cursor';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Parallax from './Components/Parallax/Parallax';
import Portfolio from './Components/Portfolio/Portfolio';
import Projects from './Components/Services/Projects';
import './app.scss';


const App = () => {
  return (
    <div>
      <Cursor/>
      <section id='Homepage'>
        <Navbar />
        <Hero />
      </section>
      <section id='Projects'><Parallax type="projects" /></section>
      <section><Projects /></section>
      <section id='Portfolio'><Parallax type="portfolio" /></section>
      <Portfolio />
      <section id='Contact'>
        <Contact/> 
      </section>
    </div>
  );
};

export default App;
