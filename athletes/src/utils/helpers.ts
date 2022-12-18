import { IAthlete, IAthletePhoto, IAthleteResults } from "../models/athletes";
import { IGame } from "../models/games";

export const calculateGlobalScore = (results: IAthleteResults) =>
  results.gold * 5 + results.silver * 3 + results.bronze * 1;

export const sortGamesByDate = (games: IGame[]) =>
  games.sort((a: IGame, b: IGame) => b.year - a.year);

export const sortAthletesByGlobalScore = (athletes: IAthlete[]) =>
  athletes.sort(
    (a: IAthlete, b: IAthlete) =>
      calculateGlobalScore(b.score) - calculateGlobalScore(a.score)
  );

export const convertBufferToImage = (athletePhoto: IAthletePhoto) => {
  const prefix = `data:${athletePhoto.mime_type};base64,`;
  const photo = btoa(
    athletePhoto.photo.data.reduce(
      (data: any, byte: any) => data + String.fromCharCode(byte),
      ""
    )
  );
  return prefix + photo;
};
