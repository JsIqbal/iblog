const async = require("async");
const path = require("path");

const config = require("./src/config");
const sequelize = require("./src/config/lib/sequelize");

async function init() {
    config.initEnvironmentVariables();

    await sequelize.query(
        `CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`
    );

    const User = require(path.join(
        process.cwd(),
        "src/modules/platform/user/user.modal.js"
    ));
    const Profile = require(path.join(
        process.cwd(),
        "src/modules/platform/profile/profile.modal"
    ));
    const Permission = require(path.join(
        process.cwd(),
        "src/modules/platform/permission/permission.modal"
    ));
    const Service = require(path.join(
        process.cwd(),
        "src/modules/platform/service/service.modal"
    ));

    await sequelize.sync();

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

    // function profileSeeder(userId, callback) {
    //     const profiles = [
    //         {
    //             name: "System Admin",
    //             description: "All the previlages",
    //             type: "standard",
    //             created_by: userId,
    //             updated_by: userId,
    //         },
    //         {
    //             name: "Writer",
    //             description: "Only Write Content",
    //             type: "standard",
    //             created_by: userId,
    //             updated_by: userId,
    //         },
    //         {
    //             name: "Reader",
    //             description: "Only Read Content",
    //             type: "standard",
    //             created_by: userId,
    //             updated_by: userId,
    //         },
    //     ];
    //     Profile.destroy({ truncate: { cascade: true } }).then(() => {
    //         Profile.bulkCreate(profiles, {
    //             returning: true,
    //             ignoreDuplicates: false,
    //         }).then(() => {
    //             callback(null, userId);
    //         });
    //     });
    // }

    // function userUpdateSeeder(userId, callback) {
    //     User.findOne({ where: { id: userId } }).then((admin) => {
    //         Profile.findOne({ where: { name: "System Admin" } }).then(
    //             (systemAdminProfile) => {
    //                 admin.update({ profile_id: systemAdminProfile.id });

    //                 callback(null, userId);
    //             }
    //         );
    //     });
    // }

    function serviceSeeder(userId, callback) {
        const services = [
            {
                name: "User Management",
                description: "Service Created by System Administrator",
                created_by: userId,
                updated_by: userId,
            },
            {
                name: "Profile Management",
                description: "Service Created by System Administrator",
                created_by: userId,
                updated_by: userId,
            },
            {
                name: "Customer Management",
                description: "Service Created by System Administrator",
                created_by: userId,
                updated_by: userId,
            },
        ];

        Service.destroy({ truncate: { cascade: true } }).then(() => {
            Service.bulkCreate(services, {
                returning: true,
                ignoreDuplicates: false,
            }).then(() => {
                callback(null, userId);
            });
        });
    }

    async.waterfall([userSeeder, serviceSeeder], (err) => {
        if (err) console.error(err);
        else console.log("DB seed completed");
        process.exit();
    });
}

init();
