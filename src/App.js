import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Topbar from "./components/topbar/Topbar";
import Works from "./components/works/Works";

function App() {
  return (
    <div className="app">
      <Contact/>
      <Intro/>
      <Topbar/>
      <Works/>
      <Portfolio/>
    </div>
  );
}

export default App;
