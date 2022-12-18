import { IAction } from "../../models/shared";
import * as actionTypes from "../constants/athletes";

const initialState = {
  gamesList: [],
  isFetchingGamesList: false,
  selectedAthlete: null,
  selectedAthleteMedals: [],
  isFetchingAthleteMedals: false,
};

export type AthletesState = Readonly<typeof initialState>;
const initialAction = {
  type: "",
  payload: {},
  message: "",
};
const Athletes = (
  state: AthletesState = initialState,
  action: IAction = initialAction
): AthletesState => {
  switch (action.type) {
    case actionTypes.SET_SELECTED_ATHLETE: {
      return {
        ...state,
        selectedAthlete: action.payload.athlete,
      };
    }
    case actionTypes.FETCH_GAMES_BEGIN: {
      return {
        ...state,
        isFetchingGamesList: true,
      };
    }
    case actionTypes.FETCH_GAMES_SUCCESS: {
      return {
        ...state,
        isFetchingGamesList: false,
        gamesList: action.payload.games,
      };
    }
    case actionTypes.FETCH_GAMES_FAILURE: {
      return {
        ...state,
        isFetchingGamesList: false,
      };
    }
    case actionTypes.FETCH_ATHLETE_MEDALS_BEGIN: {
      return {
        ...state,
        isFetchingAthleteMedals: true,
      };
    }
    case actionTypes.FETCH_ATHLETE_MEDALS_SUCCESS: {
      return {
        ...state,
        isFetchingAthleteMedals: false,
        selectedAthleteMedals: action.payload.medals,
      };
    }
    case actionTypes.FETCH_ATHLETE_MEDALS_FAILURE: {
      return {
        ...state,
        isFetchingAthleteMedals: false,
      };
    }
    default:
      return state;
  }
};

export default Athletes;
