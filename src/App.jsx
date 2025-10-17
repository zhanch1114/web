import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Publications from './pages/Publications';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/publications" element={<Publications />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;