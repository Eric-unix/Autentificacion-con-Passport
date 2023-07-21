const {Strategy, ExtractJwt} = require('passport-jwt');

const {config} = require('../../../config/config')

const options ={
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretorKey: config.JWTSecret
}

const jwtStrategy = new strategy(options, (payload, done) => {
    return done(null, payload);
});

module.exports = jwtStrategy;