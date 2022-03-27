
const express = require("express");

const router = express.Router();

const openWorkController = require("../controllers/openWorkController");

// attention a bien ajouter multer apres l'authentification
router.get("/getOpenJobsInfos/:company",openWorkController.getAllOpenWork);

module.exports = router;
