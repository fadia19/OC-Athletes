import { IAction } from "../../models/shared";
import * as actionTypes from "../constants/athletes";

const initialState = {};

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
    default:
      return state;
  }
};

export default Athletes;
