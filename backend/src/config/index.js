const _ = require("lodash");
const glob = require("glob");

const app = require("./lib/app");

module.exports.app = app;

// globPatterns = ["src/modules/admin/admin.routes.js"], excludes = undefined
const getGlobbedPaths = (globPatterns, excludes) => {
    let urlRegex = new RegExp("^(?:[a-z]+:)?//", "i");

    let output = [];

    if (_.isArray(globPatterns)) {
        globPatterns.forEach(function (globPattern) {
            output = _.union(output, getGlobbedPaths(globPattern, excludes));
        });
    } else if (_.isString(globPatterns)) {
        if (urlRegex.test(globPatterns)) {
            output.push(globPatterns);
        } else {
            let files = glob.sync(globPatterns);
            if (excludes) {
                files = files.map(function (file) {
                    if (_.isArray(excludes)) {
                        for (let i in excludes) {
                            if (excludes.hasOwnProperty(i)) {
                                file = file.replace(excludes[i], "");
                            }
                        }
                    } else {
                        file = file.replace(excludes, "");
                    }
                    return file;
                });
            }
            output = _.union(output, files);
        }
    }

    return output;
};

const getGlobalConfig = () => {
    const assets = require("./assets/default");

    const config = {
        routes: getGlobbedPaths(assets.routes),
    };

    return config;
};

exports.getGlobalConfig = getGlobalConfig;
