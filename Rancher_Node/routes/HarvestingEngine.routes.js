const express = require('express');
const router = express.Router();
const HarvestingEngineModel = require('../models/HarvestignEngine.model');

// POST route for creating a new engine
router.post('/EngineSave', async function (req, res) {
    const { engineId, engineName, ownerName, ownerMobile, place, priceDetails, description } = req.body;
    try {
        const Engine = new HarvestingEngineModel({engineId, engineName, ownerName, ownerMobile, place, priceDetails, description});
        await Engine.save();
        res.json(Engine);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

// GET route for getting all engines
router.get('/EngineGet', async function (req, res) {
    try {
        const engines = await HarvestingEngineModel.find();
        res.json(engines);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

module.exports = router;
