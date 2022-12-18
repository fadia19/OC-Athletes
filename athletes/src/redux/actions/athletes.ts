import { message } from "antd";
import { Dispatch } from "redux";
import {
  sortAthletesByGlobalScore,
  sortGamesByDate,
} from "../../utils/helpers";
import { IAthlete, IAthleteMedals } from "../../models/athletes";
import { IAction } from "../../models/shared";
import * as actionTypes from "../constants/athletes";
import { IGame } from "../../models/games";
import { fetchAthleteMedalsAPI, fetchGamesListAPI } from "../../api/athletes";

export const setSelectedAthlete = (athlete: IAthlete): IAction => ({
  type: actionTypes.SET_SELECTED_ATHLETE,
  payload: { athlete },
});

export const fetchGamesListBegin = (): IAction => ({
  type: actionTypes.FETCH_GAMES_BEGIN,
});

export const fetchGamesListSuccess = (games: IGame[]): IAction => ({
  type: actionTypes.FETCH_GAMES_SUCCESS,
  payload: { games },
});
export const fetchGamesListFailure = (): IAction => ({
  type: actionTypes.FETCH_GAMES_FAILURE,
});

export const fetchAthleteMedalsBegin = (): IAction => ({
  type: actionTypes.FETCH_ATHLETE_MEDALS_BEGIN,
});

export const fetchAthleteMedalsSuccess = (
  medals: IAthleteMedals[]
): IAction => ({
  type: actionTypes.FETCH_ATHLETE_MEDALS_SUCCESS,
  payload: { medals },
});
export const fetchAthleteMedalsFailure = (): IAction => ({
  type: actionTypes.FETCH_ATHLETE_MEDALS_FAILURE,
});

export const fetchGamesList =
  (): IGame[] | any => async (dispatch: Dispatch) => {
    dispatch(fetchGamesListBegin());
    try {
      const gamesList = await fetchGamesListAPI();
      const sortedGames = sortGamesByDate(gamesList).map((game) => ({
        ...game,
        athletes: sortAthletesByGlobalScore(game.athletes),
      }));
      dispatch(fetchGamesListSuccess(sortedGames));
    } catch (error: any) {
      dispatch(fetchGamesListSuccess(error.message));
      message.error("Unable to load games list. Please try again later.");
    }
  };

export const fetchAthleteMedals =
  (athleteId: string): IAthleteMedals[] | any =>
  async (dispatch: Dispatch) => {
    dispatch(fetchAthleteMedalsBegin());
    try {
      const medals = await fetchAthleteMedalsAPI(athleteId);
      dispatch(fetchAthleteMedalsSuccess(medals));
    } catch (error: any) {
      dispatch(fetchAthleteMedalsSuccess(error.message));
      message.error("Unable to load athlete medals. Please try again later.");
    }
  };
