const path = require("path");
const config = require("../../config");
const bodyParser = require("body-parser");

module.exports = () => {
    const app = require("express")();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    const globalConfig = config.getGlobalConfig();

    globalConfig.routes.forEach((routePath) => {
        require(path.resolve(routePath))(app);
    });

    return app;
};
