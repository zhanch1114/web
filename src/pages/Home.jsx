import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="profile-section">
        <img 
          src="/web/picture.png" 
          alt="個人照片" 
          className="profile-img"
        />
        <h1>詹承翰</h1>
        <p className="subtitle">資訊工程碩士</p>
        <div className="intro-box">
        <p>
          畢業於國立臺北大學資訊工程研究所,具備程式設計與資料分析能力。
          碩士論文為「結合變分模態分解與 Transformer-LSTM 的海洋有效波高預測」,
          專注於深度學習於時序資料預測與 AIoT 領域的應用。
          熟悉模型訓練、資料前處理與效能優化。
          熱衷於學習新技術,期望運用 AI 與資料科學方法解決實際問題並創造價值。
        </p>
        <div className="divider"></div>
        <p className="interests">
          <strong>💡 個人興趣 : </strong>&nbsp; 烹飪 、 健身 、 園藝 、 旅遊
        </p>
      </div>
        
        <div className="button-group">
          <button className="btn" onClick={() => navigate('/resume')}>經歷</button>
          <button className="btn" onClick={() => navigate('/publications')}>學術發表</button>
          <button className="btn" onClick={() => navigate('/education')}>學歷</button>
          <button className="btn" onClick={() => navigate('/projects')}>專案</button>
          <button className="btn" onClick={() => navigate('/skills')}>技能</button>
          <button className="btn" onClick={() => navigate('/contact')}>聯絡我</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
