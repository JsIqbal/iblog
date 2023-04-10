const Profile = require("./profile.modal");

async function createProfile(req, res) {
    try {
        const { name, description } = req.body;

        const existProfile = await Profile.findOne({
            where: { name },
        });
        if (existProfile)
            return res.status(400).send("Already created this profile");

        const profile = await Profile.create({
            name,
            description,
        });
        res.status(201).send(profile);
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal server error");
    }
}

module.exports = { createProfile };
