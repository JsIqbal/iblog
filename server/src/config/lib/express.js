const path = require("path");
const config = require("../../config");
const bodyParser = require("body-parser");
const cors = require("cors");

module.exports = () => {
    const app = require("express")();

    const corsOptions = {
        credentials: true,
        origin: (origin, callback) => {
            return callback(null, true);

            callback(new Error("Not allowed by CORS"));
        },
    };
    app.use(cors(corsOptions));

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    const globalConfig = config.getGlobalConfig();

    globalConfig.routes.forEach((routePath) => {
        require(path.resolve(routePath))(app);
    });

    return app;
};
