const { login, register } = require("./user.controller");
const validate = require("../../core/middlewares/validate");
const { registerSchema } = require("./user.schema");

module.exports = (app) => {
    app.route("/users").get((req, res) => {
        res.send("hello");
    });
    app.post("/users/login", login);
    app.post("/users/register", validate(registerSchema), register);
};
