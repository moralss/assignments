const bcrypt = require("bcryptjs");
const LocalStrategy = require("passport-local").Strategy;
const {getCustomerInfo} = require('../queries/customer');


module.exports = function(passport) {
  passport.use('customer' , 
    new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
      }, async function(username, password, done) {
      let user;

      try {
        user = await getCustomerInfo(username);
        if (!user) {
          return done(null, false, { message: "No user by that email" });
        }
      } catch (e) {
        return done(e);
      }

      bcrypt.compare(password, user.hashed_password, function(err, isMatch) {
        if (isMatch) {
          console.log("match");
          return done(null, user, { message: "correct password" });
        } else {
          console.log("wrong Password");
          return done(null, false, { message: "Wrong password" });
        }
      });
    })
  );

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
};