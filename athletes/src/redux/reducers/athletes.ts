import { athlete } from "../../api/athlete.mock";
import { IAction } from "../../models/shared";
import * as actionTypes from "../constants/athletes";

const initialState = {
  selectedAthlete: athlete,
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
    default:
      return state;
  }
};

export default Athletes;
