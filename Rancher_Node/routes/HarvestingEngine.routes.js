const express = require("express");
const router = express.Router();
const HarvestingEngineModel = require("../models/HarvestignEngine.model");

// POST route for creating a new engine
router.post("/EngineSave", async function (req, res) {
  const {
    engineId,
    engineName,
    ownerName,
    ownerMobile,
    place,
    priceDetails,
    description,
  } = req.body;
  try {
    const Engine = new HarvestingEngineModel({
      engineId,
      engineName,
      ownerName,
      ownerMobile,
      place,
      priceDetails,
      description,
    });
    await Engine.save();
    res.json(Engine);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

// GET route for getting all engines
router.get("/EngineGet", async function (req, res) {
  try {
    const engines = await HarvestingEngineModel.find();
    res.json(engines);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

router.delete("/EngineDelete", async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).send("Engine ID is required");
  }

  try {
    const engines = await HarvestingEngineModel.findOne({ engineId: id });
    await engines.deleteOne();
    res.send("Successfully deleted engine");
  } catch (e) {
    console.error("Error deleting engine:", e);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
