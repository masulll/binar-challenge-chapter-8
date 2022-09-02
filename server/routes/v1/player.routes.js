const PlayerController = require("../../controllers/player.controller");
const playerRouter = require("express").Router();

/**
 * @Routes "/api/v1/players"
 */

playerRouter.get("/", PlayerController.getPlayers); //1.1
playerRouter.post("/", PlayerController.createPlayer); //1.2
playerRouter.get("/:id", PlayerController.getPlayerById); //2
playerRouter.put("/:id", PlayerController.updatePlayer); //1.3
playerRouter.delete("/:id", PlayerController.deletePlayer); //1.4
playerRouter.post("/exp/:id", PlayerController.updateExperience); //3

module.exports = playerRouter;
