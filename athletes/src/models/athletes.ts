export interface IAthleteResults {
  gold: number;
  silver: number;
  bronze: number;
}

export interface IAthletePhoto {
  photo_id: number;
  photo?: Blob;
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
  globalScore: number;
}
