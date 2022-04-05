import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Tools from "./components/tools/Tools";
import Header from "./components/header/Header";
import './App.scss'
import Navigation from "./components/navigation/Navigation";

//ideas :
// - add a active state for the skills section. scale down .9 transformation for navigation



function App() {
  return (

        <div className="menu">
          <Header/>
          <Navigation/>
          <About/>
          <Portfolio/>
          <Skills/>
          <Tools />
          <Contact/>
            <div className="sections"> 
            
            
              
            </div>
        </div>
        

  );
}

export default App;
