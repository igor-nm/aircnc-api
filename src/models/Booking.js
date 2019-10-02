const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
{
    date: String,
    approved: Boolean,
    user:
    {
        ref: "User",
        type: mongoose.Schema.Types.ObjectId
    },
    spot:
    {
        ref: "Spot",
        type: mongoose.Schema.Types.ObjectId
    }
});

module.exports = mongoose.model("Booking", BookingSchema);
