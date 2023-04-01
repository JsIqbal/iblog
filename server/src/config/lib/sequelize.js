const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("routine", "root", "", {
    host: "localhost",
    dialect: "mysql",
    logging: true,
    sync: true,
});

module.exports = sequelize;
