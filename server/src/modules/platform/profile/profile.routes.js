const AuthStrategy = require("../user/user.authenticate.middleware");

module.exports = (app) => {
    app.get("/profiles", AuthStrategy);
};
