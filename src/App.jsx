// import { Routes, Route } from 'react-router-dom';
// import Sidebar from './Sidebar';
// import Home from './pages/Home';
// import Resume from './pages/Resume';
// import Education from './pages/Education';
// import Projects from './pages/Projects';
// import Skills from './pages/Skills';
// import Contact from './pages/Contact';
// import Publications from './pages/Publications';
// import './App.css';

// function App() {
//   return (
//     <div className="app-container">
//       <Sidebar />
//       <div className="main-content">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/resume" element={<Resume />} />
//           <Route path="/education" element={<Education />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/skills" element={<Skills />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/publications" element={<Publications />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default App;
import { useState } from 'react';
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
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="app-container">
      {/* 漢堡選單按鈕 */}
      <button className="hamburger" onClick={toggleSidebar}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* 遮罩 */}
      {sidebarOpen && <div className="overlay" onClick={closeSidebar}></div>}

      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
      
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