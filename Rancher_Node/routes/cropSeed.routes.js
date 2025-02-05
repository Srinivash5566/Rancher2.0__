const express = require("express");
const { cropSeed } = require("../models/cropSeed.model");

const router = express.Router();

router.get("/getSeed", async (req, res) => {
  try {
    const data = await cropSeed.find();
    res.send(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

router.post("/addSeed", async (req, res) => {
  try {
    const newSeed = new cropSeed(req.body);
    await cropSeed.save();
    res.send(newSeed);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

router.put("/updateSeed/:id", async (req, res) => {
  try {
    const seed = await cropSeed.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!seed) {
      return res.status(404).send("Seed not found");
    }
    res.send(seed);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});
