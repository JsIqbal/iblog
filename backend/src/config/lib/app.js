module.exports.start = () => {
    const app = require("./express")();

    app.listen(3001, (err, res) => {
        console.log("Server listening on port 3001...");
    });
};
