import Header from './components/header/Header';
import ToggleColorMode from "./components/togglecolormode/ToggleColorMode";
import './app.css'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Home from './components/Home/home';
import About from './components/About/about';
import Project from './components/Project/project';
import Skills from './components/skills/skills';
import Contact from './components/Contact/contact';





 
const App = () => {
  return (
    <div className='App'>
    
    <Router>
      
      <Header  />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      
  </Router>
    
  </div>
  );
}

export default App;
