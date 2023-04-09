const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("iblog", "root", "", {
    host: "localhost",
    dialect: "mysql",
    logging: true,
    sync: true,
});

module.exports = sequelize;
