// import { Link, useLocation } from 'react-router-dom';

// function Sidebar() {
//   const location = useLocation();
  
//   return (
//     <div className="sidebar">
//       <h2 className="sidebar-title">關於我</h2>
//       <nav className="nav-menu">
//         <Link 
//           to="/" 
//           className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}
//         >
//           <span>🏠</span> 首頁
//         </Link>
//         <Link 
//           to="/resume" 
//           className={`nav-item ${location.pathname === '/resume' ? 'active' : ''}`}
//         >
//           <span>📄</span> 經歷
//         </Link>
//         <Link to="/publications" className={`nav-item ${location.pathname === '/publications' ? 'active' : ''}`}>
//             <span>📚</span> 學術發表
//         </Link>
//         <Link 
//           to="/education" 
//           className={`nav-item ${location.pathname === '/education' ? 'active' : ''}`}
//         >
//           <span>🎓</span> 學歷
//         </Link>
//         <Link 
//           to="/projects" 
//           className={`nav-item ${location.pathname === '/projects' ? 'active' : ''}`}
//         >
//           <span>💻</span> 專案
//         </Link>
//         <Link 
//           to="/skills" 
//           className={`nav-item ${location.pathname === '/skills' ? 'active' : ''}`}
//         >
//           <span>🔧</span> 技能
//         </Link>
//         <Link 
//           to="/contact" 
//           className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}
//         >
//           <span>📮</span> 聯絡
//         </Link>
//       </nav>
//       {/* <button className="lang-btn">Switch to English</button> */}
//     </div>
//   );
// }

// export default Sidebar;
import { Link, useLocation } from 'react-router-dom';

function Sidebar({ isOpen, onClose }) {
  const location = useLocation();

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h2>關於我</h2>
      </div>
      
      <nav className="sidebar-nav">
        <Link 
          to="/" 
          className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}
          onClick={handleLinkClick}
        >
          <span>🏠</span> 首頁
        </Link>
        
        <Link 
          to="/resume" 
          className={`nav-item ${location.pathname === '/resume' ? 'active' : ''}`}
          onClick={handleLinkClick}
        >
          <span>📄</span> 經歷
        </Link>
        
        <Link 
          to="/publications" 
          className={`nav-item ${location.pathname === '/publications' ? 'active' : ''}`}
          onClick={handleLinkClick}
        >
          <span>📚</span> 學術發表
        </Link>
        
        <Link 
          to="/education" 
          className={`nav-item ${location.pathname === '/education' ? 'active' : ''}`}
          onClick={handleLinkClick}
        >
          <span>🎓</span> 學歷
        </Link>
        
        <Link 
          to="/projects" 
          className={`nav-item ${location.pathname === '/projects' ? 'active' : ''}`}
          onClick={handleLinkClick}
        >
          <span>💻</span> 專案
        </Link>
        
        <Link 
          to="/skills" 
          className={`nav-item ${location.pathname === '/skills' ? 'active' : ''}`}
          onClick={handleLinkClick}
        >
          <span>🔧</span> 技能
        </Link>
        
        <Link 
          to="/contact" 
          className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}
          onClick={handleLinkClick}
        >
          <span>📧</span> 聯絡
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;