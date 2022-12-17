const express = require("express");
const router = express.Router();
const athletes = require("../services/athletes");

/* GET games listing. */
router.get("/games", (req, res, next) => {
  try {
    return res.json(athletes.retrieveGamesList());
  } catch (err) {
    console.error(`Error while getting athletes `, err.message);
    next(err);
  }
});

/* GET athlete medals details */
router.get(`/medals/:athleteId`, (req, res, next) => {
  try {
    const { params } = req;
    return res.json(athletes.getAthleteMedalsList(params.athleteId));
  } catch (err) {
    console.error(`Error while getting quotes `, err.message);
    next(err);
  }
});

module.exports = router;
