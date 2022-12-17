const express = require("express");
const router = express.Router();
const athletes = require("../services/athletes");

/* GET games listing. */
router.get("/games", function (req, res, next) {
  try {
    // Get list of games
    const games = athletes.getAllGames();

    // Assign list of scores for each game
    const gamesWithScores = games.data.map((game) => {
      const athleteResults = athletes.getAthletesResultsPerGame(game.game_id);
      return {
        ...game,
        score: athleteResults,
      };
    });

    // List athletes in each game with their scores and photos
    const gamesWithAthletes = gamesWithScores.map((game) => {
      const { score, ...newGame } = game;
      const athletesData = [];
      score.forEach((athlete) => {
        const newAthlete = athletes.getAthleteInfoById(athlete.athlete_id)[0];
        const athleteScore = score.find(
          (item) => item.athlete_id === athlete.athlete_id
        );
        athletesData.push({
          ...newAthlete,
          score: athleteScore,
        });
      });
      const athletesDataWithPhotos = athletesData.map((athlete) => {
        const athletePhoto = athletes.getAthletePhotoByPhotoId(
          athlete.photo_id
        )[0];
        return {
          ...athlete,
          athletePhoto,
        };
      });
      return {
        ...newGame,
        athletes: athletesDataWithPhotos,
      };
    });

    return res.json(gamesWithAthletes);
  } catch (err) {
    console.error(`Error while getting athletes `, err.message);
    next(err);
  }
});

/* GET athlete medals details */
router.get(`/medals`, function (req, res, next) {
  try {
    const { query } = req;
    const athleteMedals = athletes
      .getAthleteMedalsInAllGames(query.athleteId)
      .map((game) => {
        const gameDetails = athletes.getGameDetailsByGameId(game.game_id)[0];
        const { city, year } = gameDetails;
        const { gold, silver, bronze, ...newGame } = game;
        return {
          ...newGame,
          city,
          year,
          medals: {
            gold,
            silver,
            bronze,
          },
        };
      });
    return res.json(athleteMedals);
  } catch (err) {
    console.error(`Error while getting quotes `, err.message);
    next(err);
  }
});

module.exports = router;
