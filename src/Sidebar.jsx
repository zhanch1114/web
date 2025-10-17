// import { Link } from 'react-router-dom';

// function Sidebar() {
//   return (
//     <div className="sidebar">
//       <h2 className="sidebar-title">關於我</h2>
//       <nav className="nav-menu">
//         <Link to="/" className="nav-item">
//           <span>🏠</span> 首頁
//         </Link>
//         <Link to="/resume" className="nav-item">
//           <span>📄</span> 履歷
//         </Link>
//         <Link to="/education" className="nav-item">
//           <span>🎓</span> 學歷
//         </Link>
//         <Link to="/projects" className="nav-item">
//           <span>💻</span> 專案
//         </Link>
//         <Link to="/skills" className="nav-item">
//           <span>🔧</span> 技能
//         </Link>
//         <Link to="/contact" className="nav-item">
//           <span>📮</span> 聯絡
//         </Link>
//       </nav>
//       <button className="lang-btn">Switch to English</button>
//     </div>
//   );
// }

// export default Sidebar;

import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();
  
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">關於我</h2>
      <nav className="nav-menu">
        <Link 
          to="/" 
          className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}
        >
          <span>🏠</span> 首頁
        </Link>
        <Link 
          to="/resume" 
          className={`nav-item ${location.pathname === '/resume' ? 'active' : ''}`}
        >
          <span>📄</span> 經歷
        </Link>
        <Link to="/publications" className={`nav-item ${location.pathname === '/publications' ? 'active' : ''}`}>
            <span>📚</span> 學術發表
        </Link>
        <Link 
          to="/education" 
          className={`nav-item ${location.pathname === '/education' ? 'active' : ''}`}
        >
          <span>🎓</span> 學歷
        </Link>
        <Link 
          to="/projects" 
          className={`nav-item ${location.pathname === '/projects' ? 'active' : ''}`}
        >
          <span>💻</span> 專案
        </Link>
        <Link 
          to="/skills" 
          className={`nav-item ${location.pathname === '/skills' ? 'active' : ''}`}
        >
          <span>🔧</span> 技能
        </Link>
        <Link 
          to="/contact" 
          className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}
        >
          <span>📮</span> 聯絡
        </Link>
      </nav>
      {/* <button className="lang-btn">Switch to English</button> */}
    </div>
  );
}

export default Sidebar;