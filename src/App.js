import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Tools from "./components/tools/Tools";
import Header from "./components/header/Header";
import './App.scss'
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div className="menu">
      <Header/>
      <Navigation/>
      <About/>
      
      <div className="sections"> 
        
         
        <Portfolio/>
        <Skills/>
        <Tools />
        <Contact/>
      </div>

    </div>
  );
}

export default App;
