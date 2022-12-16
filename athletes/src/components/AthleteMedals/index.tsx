import MedalIcon from "../../assets/MedalIcon";
import "./AthleteMedals.scss";

const AthleteMedals = () => (
  <div className="medals-wrapper">
    <h3 className="medals-header">Medals:</h3>
    <div className="medals-listing">
      <p className="game-name">Tokyo</p>
      <div className="athlete-medals">
        <span className="medal-score">2</span>
        <MedalIcon fill="#eda800" className="medal gold-medal" />
        <span className="medal-score">3</span>
        <MedalIcon fill="#eda800" className="medal silver-medal" />
        <span className="medal-score">1</span>
        <MedalIcon fill="#eda800" className="medal bronze-medal" />
      </div>
    </div>
  </div>
);

export default AthleteMedals;
