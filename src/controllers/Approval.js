const Booking = require("./../models/Booking");

module.exports = {
    async store(request, response)
    {
        const { booking_id } = request.params;
        const booking = await Booking.findById(booking_id).populate("spot");

        booking.approved = true;
        booking.save();

        const socketUserFromBooking = request.connectedUsers[booking.user];

        if (socketUserFromBooking)
        {
            request.io.to(socketUserFromBooking).emit("booking_response", booking);
        }

        return response.json({ booking });
    }
}
