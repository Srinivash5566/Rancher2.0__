const mongoose = require("mongoose");

const engineSchema = mongoose.Schema({
  engineId: {
    type: Number,
    required: true,
    unique: true,
  },
  image: {
    imgData: Buffer,
    contentType: String,
  },
  ownerName: {
    type: String,
    required: true,
  },
  engineName: {
    type: String,
    required: true,
  },
  ownerMobile: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  priceDetails: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

const HarvestingEngineModel = mongoose.model("HarvestingEngine", engineSchema);
module.exports = HarvestingEngineModel;
