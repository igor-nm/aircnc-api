const mongoose = require("mongoose");

const SpotSchema = new mongoose.Schema(
{
    price: Number,
    company: String,
    thumbnail: String,
    techs: [ String],
    user: { type: mongoose.Schema.Types.ObjectId }
});

module.exports = mongoose.model("Spot", SpotSchema);
