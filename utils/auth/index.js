const passport = require('passport-local');

const {} = require('./strategies/local.strategy');
const LocalStrategy = new Strategy((username, password, done)=> {

});

passport.use(LocalStrategy);