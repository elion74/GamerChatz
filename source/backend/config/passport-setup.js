const passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;


// Google Strategy
passport.use(new GoogleStrategy({
  clientID: "662771479171-jgl49fmfgfr3f30619pvmivrit644me6.apps.googleusercontent.com",
  clientSecret: "zln1FpKEuq9xCSAndJ49Gndy",
  callbackURL: "http://localhost:5000/auth/google/callback",
  passReqToCallback: true,
},
function(request, accessToken, refreshToken, profile, done) {
  return done(null, profile);
}));


passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

module.exports = passport;