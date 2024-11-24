const mongoose = require('mongoose');

const engineSchema = mongoose.Schema({
    engineId: {
        type: Number,  // Set as Number for increment
        required: true,
        unique: true
    },
    ownerName: {
        type: String,
        required: true
    },
    engineName: {
        type: String,
        required: true
    },
    ownerMobile: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    priceDetails: {
        type: String,
        required: true
    },
    description: {
        type: String,
    }
});

const HarvestingEngineModel = mongoose.model('HarvestingEngine', engineSchema);
module.exports = HarvestingEngineModel;
