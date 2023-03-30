const User = require("../user/user.modal");

const register = async (req, res, next) => {
    try {
        const { email, password, firstName, lastName } = req.body;
        const user = await User.findOne({
            where: {
                email,
            },
        });
        if (!user) {
            await User.create({
                email,
                password,
                firstName,
                lastName,
            });
            res.status(201).send({ message: "User created successfully" });
        }
        res.status(409).send("User already exists");
    } catch (err) {
        res.status(500).send({ message: "Internal Server Error" });
    }
};

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        console.log(email, password);

        const user = await User.findOne({
            where: {
                email,
            },
        });

        if (!user || !user.password || !user.validPassword(password)) {
            return res.status(400).send({ message: "Invalid Credentials" });
        }
        res.status(200).send({ message: "Logged In Successfully" });
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: "Internal Server Error" });
    }
};

module.exports.login = login;
module.exports.register = register;
