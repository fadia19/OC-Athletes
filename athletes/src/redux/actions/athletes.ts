import { message } from "antd";
import { Dispatch } from "redux";
import { IAthlete } from "../../models/athletes";
import { IAction } from "../../models/shared";
import * as actionTypes from "../constants/athletes";
import { IGame } from "../../models/games";
import { fetchGamesListAPI } from "../../api/athletes";
import { sortGamesByDate } from "../../utils/helpers";

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

export const fetchGamesList =
  (): IGame[] | any => async (dispatch: Dispatch) => {
    dispatch(fetchGamesListBegin());
    try {
      const gamesList = await fetchGamesListAPI();
      dispatch(fetchGamesListSuccess(sortGamesByDate(gamesList)));
    } catch (error: any) {
      dispatch(fetchGamesListSuccess(error.message));
      message.error("Unable to load roles list. Please try again later.");
    }
  };
