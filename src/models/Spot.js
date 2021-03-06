const mongoose = require("mongoose");

const SpotSchema = new mongoose.Schema(
{
    price: Number,
    company: String,
    thumbnail: String,
    techs: [ String],
    user: { type: mongoose.Schema.Types.ObjectId }
}, {
    toJSON: {
        virtuals: true
    }
});

SpotSchema.virtual("thumbnail_url").get(function() {
    return `http://192.168.0.9:3333/files/${this.thumbnail}`;
})

module.exports = mongoose.model("Spot", SpotSchema);
