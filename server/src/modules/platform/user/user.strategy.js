const path = require("path");
const passport = require("passport");
const { Strategy } = require("passport-jwt");

const User = require("../user/user.modal");

module.exports = () => {
    function cookieExtractor(req) {
        let token;
        if (req && req.signedCookies) {
            token = req.signedCookies["access_token"];
        }
        return token;
    }

    passport.use(
        "user-jwt",
        new Strategy(
            {
                secretOrKey: "my-secret",
                jwtFromRequest: cookieExtractor,
            },
            function (payload, done) {
                User.findOne({
                    where: {
                        id: payload.id,
                    },
                }).then((user) => {
                    if (user) {
                        return done(null, user);
                    }

                    return done(null, false);
                });
            }
        )
    );
};
