import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Tools from "./components/tools/Tools";
import Header from "./components/header/Header";
import './App.scss'

function App() {
  return (
    <div className="app">
      <Header/>
      <div className="sections"> 
      
        <Intro/>
        <About/> 
        <Portfolio/>
        <Skills/>
        <Tools />
        <Contact/>
      </div>

    </div>
  );
}

export default App;
