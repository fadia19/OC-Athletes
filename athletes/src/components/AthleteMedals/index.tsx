import { Spin } from "antd";
import MedalIcon from "../../assets/MedalIcon";
import { IAthleteMedals } from "../../models/athletes";
import "./AthleteMedals.scss";

type Props = {
  medals: IAthleteMedals[];
  isLoading: boolean;
};

const AthleteMedals = ({ medals, isLoading }: Props) =>
  isLoading ? (
    <Spin />
  ) : (
    <div className="medals-wrapper">
      <h3 className="medals-header">Medals:</h3>
      {medals?.map((medal) => (
        <div className="medals-listing" key={medal.game_id}>
          <p className="game-name">
            {medal.city} {medal.year}
          </p>
          <div className="athlete-medals">
            <span className="medal-score">{medal.medals.gold}</span>
            <MedalIcon fill="#eda800" className="medal gold-medal" />
            <span className="medal-score">{medal.medals.silver}</span>
            <MedalIcon fill="#eda800" className="medal silver-medal" />
            <span className="medal-score">{medal.medals.bronze}</span>
            <MedalIcon fill="#eda800" className="medal bronze-medal" />
          </div>
        </div>
      ))}
    </div>
  );
export default AthleteMedals;
