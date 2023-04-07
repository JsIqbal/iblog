const async = require("async");
const path = require("path");

async function init() {
    const sequelize = require("./src/config/lib/sequelize");

    await sequelize.query(`CREATE DATABASE IF NOT EXISTS ecommerce`);
    const User = require(path.join(
        process.cwd(),
        "src/modules/platform/user/user.modal.js"
    ));

    function userSeeder(callback) {
        User.findOrCreate({
            where: { email: "javascriptiqbal@gmail.com" },
            defaults: {
                firstName: "System",
                lastName: "Admin",
                password: "1234asdf",
            },
        }).then((users) => {
            callback(null, users[0].id);
        });
    }

    async.waterfall([userSeeder], (err) => {
        if (err) console.error(err);
        else console.log("DB seed completed");
        process.exit();
    });
}

init();
