const User = require("./../models/User");
const Spot = require("./../models/Spot");
const Booking = require("./../models/Booking");

module.exports = {
    async store(request, response)
    {
        const { spot_id } = request.params;
        const { user_id } = request.headers;

        const { date } = request.body;

        const user = await User.findById(user_id);
        const spot = await Spot.findById(spot_id);

        if (!user)
        {
            return response.status(401).json({ error: "invalid user" });
        }

        if (!spot)
        {
            return response.status(400).json({ error: "invalid spot" });
        }

        const booking = await Booking.create(
        {
            date: date,
            user: user_id,
            spot: spot_id
        });

        await booking.populate("user").populate("spot").execPopulate();

        const ownerSpot = request.connectedUsers[booking.spot.user];

        if (ownerSpot)
        {
            request.io.to(ownerSpot).emit("booking_request", booking);
        }

        return response.json(booking);
    }
}
