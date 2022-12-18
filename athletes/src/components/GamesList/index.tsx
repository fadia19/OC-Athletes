import { Spin } from "antd";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Dispatch } from "redux";
import { IAthlete } from "../../models/athletes";
import { IGame } from "../../models/games";
import { IAction } from "../../models/shared";
import {
  fetchGamesList,
  setSelectedAthlete,
} from "../../redux/actions/athletes";
import CustomCarousel from "../CustomCarousel/CustomCarousel";
import "./GamesList.scss";

type Props = {
  fetchGamesListProp: () => void;
  gamesList: IGame[];
  isFetchingGamesList: boolean;
  setSelectedAthleteProp: (athlete: IAthlete) => void;
};

const GamesList = ({
  gamesList,
  isFetchingGamesList,
  fetchGamesListProp,
  setSelectedAthleteProp,
}: Props) => {
  const navigate = useNavigate();

  useEffect(() => {
    fetchGamesListProp();
  }, []);

  const handleAthleteClick = (athlete: IAthlete) => {
    setSelectedAthleteProp(athlete);
    navigate("/athlete");
  };

  return isFetchingGamesList ? (
    <Spin />
  ) : (
    <div className="game-wrapper">
      {gamesList.map((game) => (
        <>
          <div className="game-title" key={game.year}>
            <span className="game-name">{game.city} - </span>
            <span className="game-year">{game.year}</span>
          </div>
          <CustomCarousel
            athletes={game.athletes}
            key={game.game_id}
            onAthleteClick={handleAthleteClick}
          />
        </>
      ))}
    </div>
  );
};

const mapStateToProps = ({
  athletesState: { gamesList, isFetchingGamesList },
}: any) => ({
  gamesList,
  isFetchingGamesList,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchGamesListProp: (): void => dispatch(fetchGamesList()),
  setSelectedAthleteProp: (athlete: IAthlete): IAction =>
    dispatch(setSelectedAthlete(athlete)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GamesList);
