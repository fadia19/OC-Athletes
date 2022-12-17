import axios from "axios";
import { ATHLETE_SERVICE_URL } from "../config/constants";
import { IAthleteMedals } from "../models/athletes";
import { IGame } from "../models/games";
import { IErrorResponse } from "../models/shared";
import { athleteMedalsMock } from "./athlete.mock";

export const fetchGamesListAPI = async (): Promise<
  IGame[] | IErrorResponse | any
> => {
  try {
    const url = `${ATHLETE_SERVICE_URL}/games`;
    const response = await axios.get(url);
    const { status, statusText, data } = response;
    if (status === 200) {
      const { results } = data;
      return results;
    }
    return { error: true, message: statusText, status };
  } catch (err: any) {
    const { data } = err.response;
    return { error: true, message: data.message, status: data.status };
  }
};

export const fetchAthleteMedalsAPI = async (
  athleteId: string
): Promise<IAthleteMedals[] | IErrorResponse | any> => athleteMedalsMock;
// try {
//   const url = `${ATHLETE_SERVICE_URL}/medals/${athleteId}`;
//   const response = await axios.get(url);
//   const { status, statusText, data } = response;
// if (status === 200) {
//   const { results } = data;
//   return results;
// }
//   return { error: true, message: statusText, status };
// } catch (err: any) {
//   const { data } = err.response;
//   return { error: true, message: data.message, status: data.status };
// }
