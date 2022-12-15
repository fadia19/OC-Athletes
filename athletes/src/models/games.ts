import { IAthlete } from "./athletes";

export interface IGame {
  game_id: number;
  year: number;
  city: string;
  athletes: IAthlete[];
}
