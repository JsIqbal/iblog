const validate = require("../../core/middlewares/validate");
const AuthStrategy = require("../user/user.authenticate.middleware");
const { createProfileSchema } = require("./profile.schema");
const { createProfile } = require("./profile.controller");

module.exports = (app) => {
    app.get("/profiles", AuthStrategy);

    app.post("/profile/create", validate(createProfileSchema), createProfile);
};
