const {Strategy} = require('passport-local');
const UserService = require('./../../../services/user.service');
require('./../../../services/user.service');
const service = new UserService();

const LocalStrategy = new Strategy({
    usernameField: 'email',
    passwordField: 'password'

},
async(email, password, done)=> {
    try{
        const user = await service.findByEmail(email);
        if(!user){
            done(boom.unauthorized(), false);
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            done(boom.unauthorized(),false);
        }
        delete user.getDataValue.password;
        done(null, user);
    }catch (error){
        done(error, false);
    }
});

module.exports = LocalStrategy;