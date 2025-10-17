function Skills() {
  return (
    <div className="page" style={{ paddingTop: '50px' }}>
      <h2 style={{ 
        margin: 0, 
        marginBottom: '50px', 
        fontSize: '2.5rem', 
        color: '#f5deb3',
        textAlign: 'center'
      }}>
        技能
      </h2>
      
      <div className="skills-grid-layout">
        
        {/* 程式語言 */}
        <div className="skill-item">
          <div className="skill-progress-bar"></div>
          <div className="skill-content">
            <h3 className="skill-item-title">程式語言</h3>
            <p className="skill-item-desc">
              具備多種程式語言相關開發經驗
            </p>
            <div className="skill-item-tags">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">Java</span>
              <span className="skill-tag">C/C++</span>
            </div>
          </div>
        </div>

        {/* 機器學習/深度學習 */}
        <div className="skill-item">
          <div className="skill-progress-bar"></div>
          <div className="skill-content">
            <h3 className="skill-item-title">機器學習/深度學習</h3>
            <p className="skill-item-desc">
              專注於時間序列預測、與電腦視覺應用
            </p>
            <div className="skill-item-tags">
              <span className="skill-tag">TensorFlow</span>
              <span className="skill-tag">PyTorch</span>
              <span className="skill-tag">Scikit-learn</span>
              <span className="skill-tag">OpenCV</span>
            </div>
          </div>
        </div>

        {/* 前端技術 */}
        <div className="skill-item">
          <div className="skill-progress-bar"></div>
          <div className="skill-content">
            <h3 className="skill-item-title">前端技術</h3>
            <p className="skill-item-desc">
              能開發響應式網頁與單頁應用，重視使用者體驗
            </p>
            <div className="skill-item-tags">
              <span className="skill-tag">React</span>
              <span className="skill-tag">HTML/CSS</span>
              <span className="skill-tag">JavaScript</span>
            </div>
          </div>
        </div>

        {/* 後端技術 */}
        <div className="skill-item">
          <div className="skill-progress-bar"></div>
          <div className="skill-content">
            <h3 className="skill-item-title">後端技術</h3>
            <p className="skill-item-desc">
              具備全端開發能力，能建立完整的 Web 應用系統
            </p>
            <div className="skill-item-tags">
              <span className="skill-tag">Flask</span>
              <span className="skill-tag">Django</span>
              <span className="skill-tag">Node.js</span>
            </div>
          </div>
        </div>

        {/* 資料庫 */}
        <div className="skill-item">
          <div className="skill-progress-bar"></div>
          <div className="skill-content">
            <h3 className="skill-item-title">資料庫</h3>
            <p className="skill-item-desc">
            </p>
            <div className="skill-item-tags">
              <span className="skill-tag">MongoDB / MongoDB Compass</span>
              <span className="skill-tag">MySQL / MySQL Workbench</span>

            </div>
          </div>
        </div>

        {/* 開發工具 */}
        <div className="skill-item">
          <div className="skill-progress-bar"></div>
          <div className="skill-content">
            <h3 className="skill-item-title">開發工具</h3>
            <p className="skill-item-desc">
            </p>
            <div className="skill-item-tags">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">Linux</span>
              <span className="skill-tag">VS Code</span>
            </div>
          </div>
        </div>

        {/* 硬體/物聯網 */}
        <div className="skill-item">
          <div className="skill-progress-bar"></div>
          <div className="skill-content">
            <h3 className="skill-item-title">硬體/物聯網</h3>
            <p className="skill-item-desc">
              具備感測器整合與物聯網系統開發實務經驗
            </p>
            <div className="skill-item-tags">
              <span className="skill-tag">Arduino</span>
              <span className="skill-tag">感測器整合</span>
              <span className="skill-tag">NBIOT</span>
              <span className="skill-tag">LoRa</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Skills;