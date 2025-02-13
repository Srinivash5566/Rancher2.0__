const mongoose = require("mongoose");

const cropSeedSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  },
  discount: {
    type: Number,
    default: 0,
  },
  image: {
    type: [String],
    required: true,
  },
});

const cropSeed = mongoose.model("CropSeed", cropSeedSchema);

module.exports = { cropSeed };
