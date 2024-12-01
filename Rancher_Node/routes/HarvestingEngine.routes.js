const express = require("express");
const router = express.Router();
const multer = require("multer");
const HarvestingEngineModel = require("../models/HarvestignEngine.model");

// Configure Multer to use memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// POST route for creating a new engine
router.post("/EngineSave", upload.single("image"), async function (req, res) {
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
    const newEngine = new HarvestingEngineModel({
      engineId,
      image: {
        imgData: req.file.buffer,
        contentType: req.file.mimetype,
      },
      engineName,
      ownerName,
      ownerMobile,
      place,
      priceDetails,
      description,
    });

    await newEngine.save();
    const formattedEngines = {
      engineId: newEngine.engineId,
      engineName: newEngine.engineName,
      ownerName: newEngine.ownerName,
      ownerMobile: newEngine.ownerMobile,
      place: newEngine.place,
      priceDetails: newEngine.priceDetails,
      description: newEngine.description,
      image: {
        imgData: newEngine.image.imgData.toString("base64"),
        contentType: newEngine.image.contentType,
      },
    };
    res.status(201).json(formattedEngines);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// GET route for getting all engines
router.get("/EngineGet", async function (req, res) {
  try {
    const engines = await HarvestingEngineModel.find();

    // Format images for response
    const formattedEngines = engines.map((engine) => ({
      engineId: engine.engineId,
      engineName: engine.engineName,
      ownerName: engine.ownerName,
      ownerMobile: engine.ownerMobile,
      place: engine.place,
      priceDetails: engine.priceDetails,
      description: engine.description,
      image: {
        imgData: engine.image.imgData.toString("base64"),
        contentType: engine.image.contentType,
      },
    }));
    // console.log(formattedEngines);
    res.json(formattedEngines);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
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
