import { IAthlete, IAthleteResults } from "../models/athletes";
import { IGame } from "../models/games";

export const calculateGlobalScore = (results: IAthleteResults) =>
  results.gold * 5 + results.silver * 3 + results.bronze * 1;

export const sortGamesByDate = (games: IGame[]) =>
  games.sort((a: IGame, b: IGame) => a.year - b.year);

export const sortAthletesByGlobalScore = (athletes: IAthlete[]) =>
  athletes.sort((a: IAthlete, b: IAthlete) => a.globalScore - b.globalScore);
