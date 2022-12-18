export interface IAthleteResults {
  gold: number;
  silver: number;
  bronze: number;
}

export interface IAthletePhoto {
  photo_id: number;
  photo: any;
  mime_type: string;
}

export interface IAthlete {
  athlete_id: string;
  athletePhoto: IAthletePhoto;
  name: string;
  surname: string;
  date_of_birth: string;
  bio: string;
  score: IAthleteResults;
  weight: number;
  height: number;
}

export interface IAthleteMedals {
  athlete_id: string;
  game_id: number;
  year: number;
  city: string;
  medals: IAthleteResults;
}
