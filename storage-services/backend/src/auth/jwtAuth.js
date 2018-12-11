require("dotenv").config();

const { getBusinessOwnerId } = require("../queries/business-owner");
const { getCustomerById } = require("../queries/customer");

module.exports = function(passport) {
  let JwtStrategy = require("passport-jwt").Strategy;
  let ExtractJwt = require("passport-jwt").ExtractJwt;

  let opts = {
    jwtFromRequest: ExtractJwt.fromHeader("authorization"),
    secretOrKey: process.env.JWT_SECRET
  };

  const loginIn = new JwtStrategy(opts, async function(jwt_payload, done) {
    try {
      if ("customer" === jwt_payload.authority) {
        let customer = await getCustomerById(jwt_payload.sub);
        console.log("found customer");
        return done(null, customer);
      } else if ("business-owner" == jwt_payload.authority) {
        let businessOwner = await getBusinessOwnerId(jwt_payload.sub);
        console.log("found businessOwner");
        return done(null, businessOwner);
      } else {
        console.log("cannot find user");
        return done(null, false);
      }
    } catch (e) {}
  });

  passport.use(loginIn);
};
