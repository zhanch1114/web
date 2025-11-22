function Projects() {
  return (
    <div className="page" style={{ paddingTop: '50px' }}>
      <h2 style={{ 
        margin: 0, 
        marginBottom: '40px', 
        fontSize: '2.5rem', 
        color: '#f5deb3',
        textAlign: 'center'
      }}>
        專案作品
      </h2>
      
      <div className="project-grid">
        
        {/* 專案一：海洋箱網養殖智慧監控系統 */}
        <div className="project-card">
          <div className="project-images">
            <img src="/web/project-ocean-1.png" alt="海洋箱網養殖系統 1" />
            <img src="/web/海洋計畫圖片2.jpg" alt="海洋箱網養殖系統 2" />
          </div>
          <div className="project-content">
            <h3>海洋箱網養殖智慧監控系統</h3>
            <p className="project-period">📅 2022.08 - 2025.07</p>
            <p className="project-desc">
              開發物聯網水質監測系統，使用 Arduino 搭配多種感測器（溫度、pH 值、溶氧量等）即時監測養殖環境。
              建立全端網頁平台，整合深度學習模型預測水質變化與養殖產能，提供養殖業者決策參考，推動智慧養殖技術應用。
            </p>
            
            <div className="project-tags">
              <span className="project-tag">Arduino</span>
              <span className="project-tag">NBIOT</span>
              <span className="project-tag">全端開發</span>
              <span className="project-tag">Deep learning</span>
              <span className="project-tag">MongoDB</span>
            </div>
            
            <div className="project-links">
              <a 
                href="http://120.126.151.152:5002/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                🔗 查看專案
              </a>
            </div>
          </div>
        </div>

        {/* 專案二：憂鬱症預測與評估系統 */}
        <div className="project-card">
          <div className="project-images">
            <img src="/web/emo01.png" alt="憂鬱症預測系統 1" />
            <img src="/web/emo02.png" alt="憂鬱症預測系統 2" />
          </div>
          <div className="project-content">
            <h3>憂鬱症預測與評估系統</h3>
            <p className="project-period">📅 2023.09 - 至今</p>
            <p className="project-desc">
              與臺北醫學大學合作開發憂鬱症風險評估平台，使用 3D 列印技術製作 HRV（心率變異）以及配合腦波儀(EEG)量測裝置，
              收集患者生理訊號。建立全端網頁系統，整合深度學習模型分析生理與心理指標，提供憂鬱症風險評估功能，
              協助早期發現與介入治療。
            </p>
            
            <div className="project-tags">
              <span className="project-tag">3D列印</span>
              <span className="project-tag">HRV</span>
              <span className="project-tag">EEG</span>
              <span className="project-tag">Deep learning</span>
              <span className="project-tag">全端開發</span>
              <span className="project-tag">MongoDB/MySQL</span>
            </div>
            
            <div className="project-links">
              <a 
                href="http://120.126.151.152:5006/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                🔗 查看專案
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;