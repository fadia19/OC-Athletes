const db = require("../services/db");
const config = require("../config");

function getMultiple(page = 1) {
  const offset = (page - 1) * config.listPerPage;
  const data = db.query(`SELECT * FROM Athlete LIMIT ?,?`, [
    offset,
    config.listPerPage,
  ]);
  const meta = { page };

  return {
    data,
    meta,
  };
}

function getAllGames() {
  const data = db.query(`SELECT * FROM Game`, []);
  return { data };
}

function getAthletesResultsPerGame(game_id) {
  const data = db.query(`SELECT * FROM AthleteResult WHERE game_id = ?`, [
    game_id,
  ]);
  return data;
}

function getAthleteInfoById(athlete_id) {
  const data = db.query(`SELECT * FROM Athlete WHERE athlete_id = ?`, [
    athlete_id,
  ]);
  return data;
}

function getAthletePhotoByPhotoId(photo_id) {
  const data = db.query(`SELECT * FROM AthletePhoto WHERE photo_id = ?`, [
    photo_id,
  ]);
  return data;
}

function getAthleteMedalsInAllGames(athlete_id) {
  const data = db.query(`SELECT * FROM AthleteResult WHERE athlete_id = ?`, [
    athlete_id,
  ]);
  return data;
}

function getGameDetailsByGameId(game_id) {
  const data = db.query(`SELECT * FROM Game WHERE game_id = ?`, [game_id]);
  return data;
}

module.exports = {
  getMultiple,
  getAllGames,
  getAthletesResultsPerGame,
  getAthleteInfoById,
  getAthletePhotoByPhotoId,
  getAthleteMedalsInAllGames,
  getGameDetailsByGameId,
};
