const { string, object, array, number } = require("yup");

const createProfileSchema = object().shape({
    name: string()
        .min(2, "Profile name must be at least two charecters long.")
        .max(30, "Profile name must be at most 30 charecters long.")
        .required("Profile name must be required"),
    description: string()
        .min(2, "Description must be at least two charecters long.")
        .max(100, "Description must be at most 30 charecters long.")
        .required("Description must be required"),

    permission_id: array()
        .min(1, "At least one permission must be selected")
        .of(number().integer("Permission ID must be an integer"))
        .required("Permission IDs are required"),
});

module.exports.createProfileSchema = createProfileSchema;
