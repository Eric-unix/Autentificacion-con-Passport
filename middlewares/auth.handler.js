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

module.exports = {checkApikey}