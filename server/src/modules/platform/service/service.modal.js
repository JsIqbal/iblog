const path = require("path");

const sequelize = require(path.join(process.cwd(), "src/config/lib/sequelize"));
const { DataTypes, STRING } = require("sequelize");

const Service = sequelize.define(
    "services",
    {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        name: {
            allowNull: true,
            type: DataTypes.STRING,
        },
        description: {
            allowNull: true,
            type: DataTypes.STRING,
        },
        type: {
            type: DataTypes.ENUM,
            values: ["standard", "custom"],
            defaultValue: "custom",
        },
        created_by: {
            type: DataTypes.UUID,
        },
        updated_by: {
            type: DataTypes.UUID,
        },
    },
    {
        tableName: "services",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);

module.exports = Service;
