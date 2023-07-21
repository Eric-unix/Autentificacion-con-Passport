//const passport = require('passport-local');

//const {} = require('./strategies/local.strategy');
//const LocalStrategy = new Strategy((username, password, done)=> {

//});

//passport.use(LocalStrategy);

const passport = require('passport');

const LocalStrategy = require('./strategies/local.strategy');
const jwtStrategy = require('./strategies/jwt.strategy');

passport.use(LocalStrategy);
passport.use(jwtStrategy);