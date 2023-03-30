function init() {
    const sequelize = require("./src/config/lib/sequelize");

    sequelize
        .query(`CREATE DATABASE IF NOT EXISTS routine`)
        .then(() => {
            require("./src/modules/platform/user/user.modal");
            sequelize
                .sync()
                .then(() => {
                    console.log("DB seed completed");
                })
                .catch((err) => {
                    console.log(err);
                });
        })
        .catch((err) => {
            console.log(err);
        });
}

init();
