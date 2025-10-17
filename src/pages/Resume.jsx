import { useState } from 'react';

function Resume() {
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const openModal = (imagePath) => {
    setCurrentImage(imagePath);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="page" style={{ paddingTop: '50px' }}>
      <h2 style={{ margin: 0, marginBottom: '20px', fontSize: '2.5rem', color: '#f5deb3' }}>
        經歷
      </h2>
      <div className="timeline">
        {/* 學歷 */}
        <div className="timeline-item">
          <h3>學歷 (Education)</h3>
          <p className="company">國立臺北大學 資訊工程研究所 碩士 (2023.09 - 2025.07)</p>
          <ul> 
            <li>碩士論文：結合變分模態分解與 Transformer-LSTM 的海洋有效波高之預測</li>
          </ul>
          <br />
          <p className="company">亞洲大學 資訊工程學系 學士 (2019.09 - 2023.06)</p>
          <ul>
            <li>畢業專題：高麗菜病蟲害分級分類系統</li>
          </ul>
        </div>

        {/* 研究計畫 */}
        <div className="timeline-item">
          <h3>研究計畫 (Research Projects)</h3>
          <p className="company">國科會計畫 - 憂鬱症預測模型研究 (2023.09 - 至今)</p>
          <ul>
            <li>使用 3D 列印配合Nano開發版製作 HRV 量測裝置和腦波儀EEG供憂鬱症患者使用</li>
            <li>開發全端網頁系統，整合深度學習模型進行憂鬱症風險評估</li>
            <li>負責前後端開發、模型訓練與 API 部署</li>
          </ul>
          <br />
          <p className="company">國科會計畫 - 海洋箱網養殖智慧監控系統 (2022.08 - 2025.07)</p>
          <ul>
            <li>使用 Arduino 感測器建置水質監測系統</li>
            <li>開發全端監控網頁，實現即時資料視覺化與歷史數據分析</li>
          </ul>
          <br />
          <p className="company">宏匯民生股份有限公司113年研究計畫-永續環境與智慧建築 (2024.04 - 2025.03)</p>
          <ul>
            <li>指導大學部使用 Arduino 感測器以及LORA通訊技術於臺北大學心湖建置水質監測系統</li>
            <li>開發全端監控網頁，實現即時資料視覺化與未來8小時的水質預測</li>
          </ul>
        </div>

        {/* 教學助理 */}
        <div className="timeline-item">
          <h3>教學助理 (Teaching Assistant)</h3>
          <p className="company">雲端計算 課程助教</p>
          <ul>
            <li>協助學生理解 AWS 基本雲端運算架構與實作操作</li>
          </ul>
          <br />
          <p className="company">微算機與組合語言和實驗 課程助教</p>
          <ul>
            <li>教導Arduino程式設計基礎概念與實作技巧</li>
          </ul>
        </div>

        {/* 競賽經驗 */}
        <div className="timeline-item">
          <h3>競賽經驗 (Competition Experience)</h3>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p className="company">2024國際黑客松</p>
            <button 
              onClick={() => openModal('/hackathon2024.png')}
              style={{
                padding: '8px 16px',
                background: '#8b7355',
                border: 'none',
                borderRadius: '6px',
                color: '#fff',
                cursor: 'pointer',
                fontSize: '0.9rem'
              }}
            >
              📜 查看證書
            </button>
          </div>
          <ul>
            <li>發揮團隊合作精神與創意能力</li>
          </ul>
          
          <br/>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p className="company">2022 AI CUP 春季賽 - 前標成績</p>
            <button 
              onClick={() => openModal('/AICUP.png')}
              style={{
                padding: '8px 16px',
                background: '#8b7355',
                border: 'none',
                borderRadius: '6px',
                color: '#fff',
                cursor: 'pointer',
                fontSize: '0.9rem'
              }}
            >
              📜 查看證書
            </button>
          </div>
          <ul>
            <li>參與農業相關 AI 應用競賽，運用深度學習技術解決實務問題</li>
          </ul>
        </div>
      </div>

      {/* Modal 彈出視窗 */}
      {showModal && (
        <div 
          onClick={closeModal}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
          }}
        >
          <div style={{ position: 'relative', maxWidth: '90%', maxHeight: '90%' }}>
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '-40px',
                right: '0',
                background: 'transparent',
                border: 'none',
                color: '#fff',
                fontSize: '2rem',
                cursor: 'pointer'
              }}
            >
              ✕
            </button>
            <img 
              src={currentImage} 
              alt="證書"
              style={{
                maxWidth: '100%',
                maxHeight: '85vh',
                objectFit: 'contain'
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Resume;