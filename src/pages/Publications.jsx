import { useState } from 'react';

function Publications() {
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
      <h2 style={{ margin: 0, marginBottom: '30px', fontSize: '2.5rem', color: '#f5deb3' }}>
        學術發表 (Publications)
      </h2>
      
      <div className="publication-list">
        
        {/* CACS 2025 - 進行中 */}
        <div className="publication-item" style={{ border: '2px solid #d4af37' }}>
          <div className="pub-header">
            <div>
              <h3 style={{ color: '#d4af37' }}>
                Exploring Deep Learning for Significant Wave Height Prediction: 
A Case Study of Qimei Buoy 
              </h3>
              <p className="pub-venue">
                2025 International Automatic Control Conference (CACS)
              </p>
              <p className="pub-info">📅 November 2025 | 📍 Taiwan</p>
              <p className="pub-status" style={{ 
                color: '#d4af37', 
                fontWeight: 'bold',
                marginTop: '10px' 
              }}>
                ⏳ 進行中 (In Progress)
              </p>
            </div>
          </div>
        </div>

        {/* ICSSE 2025 - S4R2 */}
        <div className="publication-item">
          <div className="pub-header">
            <div style={{ flex: 1 }}>
              <h3>
                Wave Height Prediction Using VMD-Transformer-LSTM: Analysis of Qimei Buoy Data
              </h3>
              <p className="pub-authors">
                C.-H. Zhan, D. Phithiwatwong, Y.-S. Chang
              </p>
              <p className="pub-venue">
                International Conference on System Science and Engineering (ICSSE 2025)
              </p>
              <p className="pub-info">📅 August 9-13, 2025 | 📍 Thailand</p>
            </div>
            <button 
              onClick={() => openModal('/icsse202501.jpg')}
              className="cert-button"
            >
              📜 查看證書
            </button>
          </div>
        </div>

        {/* ICSSE 2025 - S3R1 */}
        <div className="publication-item">
          <div className="pub-header">
            <div style={{ flex: 1 }}>
              <h3>
                Coordinated Observation, Interpretation, and Prediction for Ecosystem Sustainability
              </h3>
              <p className="pub-authors">
                G. Farrel, D. Phithiwatwong, E. A. Gani, V. Nyoman, Y.-S. Chang, C.-H. Zhan
              </p>
              <p className="pub-venue">
                International Conference on System Science and Engineering (ICSSE 2025)
              </p>
              <p className="pub-info">📅 August 9-13, 2025 | 📍 Thailand</p>
            </div>
            <button 
              onClick={() => openModal('/icsse202502.jpg')}
              className="cert-button"
            >
              📜 查看證書
            </button>
          </div>
        </div>

        {/* TACC 2025 */}
        <div className="publication-item">
          <div className="pub-header">
            <div style={{ flex: 1 }}>
              <h3>
                結合 VMD 與 Transformer-LSTM 模型於海洋有效波高預測：以七美浮標資料為例
              </h3>
              <p className="pub-authors">
                詹承翰, 張玉山
              </p>
              <p className="pub-venue">
                2025年臺灣雲端與服務計算研討會 (TWSC2 2025)
              </p>
              <p className="pub-info">📅 July 2025 | 📍 Taiwan</p>
            </div>
            <button 
              onClick={() => openModal('/TWSC2.png')}
              className="cert-button"
            >
              📜 查看證書
            </button>
          </div>
        </div>

        {/* CACS 2024 */}
        <div className="publication-item">
          <div className="pub-header">
            <div style={{ flex: 1 }}>
              <h3>
                Using Layer-wise Depth Recursive Prediction to Predict Underwater Sea Temperature
              </h3>
              <p className="pub-authors">
                Y.-J. Liao, C.-H. Zhan, Y.-S. Chang
              </p>
              <p className="pub-venue">
                2024 International Automatic Control Conference (CACS)
              </p>
              <p className="pub-info">📅 November 2024 | 📍 Taoyuan, Taiwan</p>
              <p className="pub-doi">
                🔗 DOI: <a href="https://doi.org/10.1109/CACS63404.2024.10773357" target="_blank" rel="noopener noreferrer">
                  10.1109/CACS63404.2024.10773357
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* IEEE SMC 2024 */}
        <div className="publication-item">
          <div className="pub-header">
            <div style={{ flex: 1 }}>
              <h3>
                Transformer-Based Model Sea Temperature and Salinity Prediction Using Satellite Remote Sensing and Argo Data Fusion
              </h3>
              <p className="pub-authors">
                Y.-J. Liao, C.-H. Zhan, Y.-S. Chang
              </p>
              <p className="pub-venue">
                2024 IEEE International Conference on Systems, Man, and Cybernetics (SMC)
              </p>
              <p className="pub-info">📅 October 2024 | 📍 Kuching, Malaysia</p>
              <p className="pub-doi">
                🔗 DOI: <a href="https://doi.org/10.1109/SMC54092.2024.10831293" target="_blank" rel="noopener noreferrer">
                  10.1109/SMC54092.2024.10831293
                </a>
              </p>
            </div>
            <button 
              onClick={() => openModal('/smc2024.png')}
              className="cert-button"
            >
              📜 查看證書
            </button>
          </div>
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

export default Publications;