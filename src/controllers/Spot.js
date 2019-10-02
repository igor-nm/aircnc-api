const User = require("./../models/User");
const Spot = require("./../models/Spot");

module.exports = {
    async index(request, response)
    {
        const { tech } = request.query;

        const spots = await Spot.find({ techs: tech });

        if (!spots.length)
        {
            return response.status(204).json();
        }

        return response.json(spots);
    },

    async store(request, response)
    {
        const { filename } = request.file;
        const { user_id } = request.headers;
        const { company, price, techs } = request.body;

        const user = await User.findById(user_id);

        if (!user) {
            return response.status(401).json({ error: "user not found" });
        }

        const spot = await Spot.create({
            user: user_id,
            price: price,
            company: company,
            thumbnail: filename,
            techs: techs.split(",").map(it => it.trim())
        });

        response.json(spot);
    }
}