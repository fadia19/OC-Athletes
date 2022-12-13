import { combineReducers } from "redux";
import athletesState from "./athletes";

const rootReducer = combineReducers({
  athletesState,
});

export default rootReducer;
