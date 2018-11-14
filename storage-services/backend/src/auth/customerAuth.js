let secret = "dbnnf45d";
const { getCustomerById } = require("../queries/customer");

module.exports = function(passport) {
  let JwtStrategy = require("passport-jwt").Strategy;
  let ExtractJwt = require("passport-jwt").ExtractJwt;

  let opts = {
    jwtFromRequest: ExtractJwt.fromHeader("authorizationc"),
    secretOrKey: secret
  };


  const loginIn = new JwtStrategy(opts, async function(jwt_payload, done) {
    try {
      customer = await getCustomerById(jwt_payload.sub);
      if (customer.id === jwt_payload.sub) {
        console.log("found user");
        return done(null, customer);
      } else {
        console.log("cannot find user");
        return done(null, false);
      }
    } catch (e) {}
  });

  passport.use(loginIn);
};
