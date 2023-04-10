const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../config/lib/sequelize");
const Profile = require("./profile.modal");
const Permission = require("../permission/permission.modal");

const PermissionProfile = sequelize.define(
    "permission-profiles",
    {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        permission_id: {
            type: DataTypes.UUID,
        },
        profile_id: {
            type: DataTypes.UUID,
        },
    },
    {
        tableName: "permission-profiles",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);

Profile.hasMany(PermissionProfile, {
    as: "permissionProfiles",
    foreignKey: "profile_id",
});

PermissionProfile.belongsTo(Permission, {
    as: "permission",
    foreignKey: "permission_id",
});

module.exports = PermissionProfile;
