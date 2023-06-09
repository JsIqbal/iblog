const jwt = require("jsonwebtoken");
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

        const user = await User.findOne({
            where: {
                email,
            },
        });

        if (!user || !user.password || !user.validPassword(password)) {
            return res.status(400).send({ message: "Invalid Credentials" });
        }

        const token = jwt.sign(
            {
                id: user.id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
            },
            process.env.TOKEN_SECRET,
            { expiresIn: "1h", issuer: user.email }
        );
        user.dataValues.token = token;
        delete user.dataValues.password;

        res.cookie("access_token", token, {
            httpOnly: true,
        });
        res.status(200).send({
            message: "Logged In Successfully",
            user,
        });
    } catch (err) {
        res.status(500).send({ message: "Internal Server Error" });
    }
};

module.exports.login = login;
module.exports.register = register;
