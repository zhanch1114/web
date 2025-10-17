function Education() {
  return (
    <div className="page" style={{ paddingTop: '50px' }}>
      <h2 style={{ 
        margin: 0, 
        marginBottom: '40px', 
        fontSize: '2.5rem', 
        color: '#f5deb3',
        textAlign: 'center'
      }}>
        學歷
      </h2>
      
      <div className="education-list">
        {/* 碩士學歷 */}
        <div className="education-card">
          <div className="edu-header">
            <div className="edu-icon">🎓</div>
            <div className="edu-main">
              <h3>國立臺北大學</h3>
              <p className="edu-degree">資訊工程研究所 碩士</p>
              <p className="edu-period">📅 2023 - 2025</p>
            </div>
          </div>
          
          <div className="edu-content">
            <div className="thesis-section">
              <h4>📝 碩士論文</h4>
              <p className="thesis-title">
                主要研究方向為深度學習、時間序列預測與海洋資料分析，參與國科會計畫「建置創新海上箱網養殖平台與監控系統--子計畫二」。碩士論文聚焦於結合變分模態分解(VMD)與 Transformer-LSTM 混合架構進行海洋有效波高預測，透過 VMD 技術將複雜波浪訊號分解為多個頻率分量，並針對各模態建立獨立預測模型。提出改良的 Transformer 架構，採用 1D CNN 層進行特徵提取，搭配 Transformer 編碼器與 LSTM 層，分別捕捉長短期時間依賴特徵，實現 48 小時長期預測。
              </p>
            </div>
          </div>
        </div>

        {/* 學士學歷 */}
        <div className="education-card">
          <div className="edu-header">
            <div className="edu-icon">🎓</div>
            <div className="edu-main">
              <h3>亞洲大學</h3>
              <p className="edu-degree">資訊工程學系 學士</p>
              <p className="edu-period">📅 2019 - 2023</p>
            </div>
          </div>
          
          <div className="edu-content">
            <div className="thesis-section">
              <h4>💻 畢業專題</h4>
              <p className="thesis-title">
                畢業專題為「高麗菜病蟲害分級分類系統」，主要負責收集超過一萬張田間影像與模型訓練工作，建立專家標註系統將病蟲害依損傷程度分為四個等級。採用 EfficientNet B0 深度學習架構進行訓練，達成 80% 以上準確率。團隊開發 Discord Bot 作為互動式展示平台，實現多圖批次辨識功能，為智慧農業提供不一樣的解決方案。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;