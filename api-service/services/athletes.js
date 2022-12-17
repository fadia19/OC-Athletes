const db = require("../services/db");

const getAllGames = () => {
  const data = db.query(`SELECT * FROM Game g`, []);
  return { data };
};

const getGamesResults = (gameIDs) => {
  const placeholders = gameIDs.map(() => "?").join(",");
  const data = db.query(
    `SELECT * FROM AthleteResult WHERE game_id IN (${placeholders})`,
    gameIDs
  );
  return { data };
};

const getAthletesInGamesResults = (athletesIDs) => {
  const placeholders = athletesIDs.map(() => "?").join(",");
  const data = db.query(
    `SELECT * FROM Athlete WHERE athlete_id IN (${placeholders})`,
    athletesIDs
  );
  return { data };
};

const getAthletesPhotos = (photoIDs) => {
  const placeholders = photoIDs.map(() => "?").join(",");
  const data = db.query(
    `SELECT * FROM AthletePhoto WHERE photo_id IN (${placeholders})`,
    photoIDs
  );
  return { data };
};

const retrieveGamesList = () => {
  // Get list of games
  const games = getAllGames();

  const gameIDs = games.data.map((game) => game.game_id);
  const gamesResults = getGamesResults(gameIDs);
  const athleteIDs = [];
  const photoIDs = [];

  // Assign list of scores for each game
  const gamesWithScores = games.data.map((game) => {
    const athleteResults = gamesResults.data.filter((result) => {
      if (athleteIDs.indexOf(result.athlete_id) === -1)
        athleteIDs.push(result.athlete_id);
      return result.game_id == game.game_id;
    });
    const athletesInfo = getAthletesInGamesResults(athleteIDs).data;
    const gameAthletes = athleteResults.map((result) => {
      const athlete = athletesInfo.find(
        (info) => info.athlete_id === result.athlete_id
      );
      return {
        ...athlete,
        score: result,
      };
    });
    gameAthletes.forEach((athlete) => {
      if (photoIDs.indexOf(athlete.photo_id) === -1)
        photoIDs.push(athlete.photo_id);
    });
    const AthletesPhotos = getAthletesPhotos(photoIDs).data;
    const gameAthletesWithPhotos = gameAthletes.map((athlete) => {
      const athletePhoto = AthletesPhotos.filter(
        (photo) => photo.photo_id === athlete.photo_id
      );
      return {
        ...athlete,
        athletePhoto,
      };
    });
    return {
      ...game,
      athletes: gameAthletesWithPhotos,
    };
  });

  return gamesWithScores;
};

const getAthleteMedalsInAllGames = (athlete_id) => {
  const data = db.query(
    `SELECT * FROM AthleteResult ar INNER JOIN Game g on ar.game_id = g.game_id  WHERE athlete_id = ?`,
    [athlete_id]
  );
  return data;
};

const getAthleteMedalsList = (athlete_id) => {
  const athleteMedals = getAthleteMedalsInAllGames(athlete_id).map((medal) => {
    const { gold, silver, bronze, ...newMedal } = medal;
    return {
      ...newMedal,
      medals: {
        gold,
        silver,
        bronze,
      },
    };
  });
  return athleteMedals;
};

module.exports = {
  retrieveGamesList,
  getAthleteMedalsList,
};
