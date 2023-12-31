const boom = require('@hapi/boom');

const {config} = require('./../config/config')

function checkApikey( req, res, next){
    const checkApikey = req.headers['api'];
    if(apikey === config.apikey){
        next();
    }else{
        next(boom.unauthorized());
    }
}

function checkAdminRole(req, res, next){
    console.log(req.user);
    const user = req.user;
    if(user.role === 'admin'){
        next();
    }else{
        next(boom.unauthorized());
    }
}

function checkRoles(...roles){
    return (req, res, next) =>{
        const user = req.user;
        if(roles.includes(user.role)){
            next();
        }else{
            next(boom.unauthorized());
        }
    }
}
module.exports = {checkApikey, checkAdminRole, checkRoles}