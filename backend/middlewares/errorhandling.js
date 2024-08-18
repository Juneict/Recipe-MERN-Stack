const {validationResult } = require('express-validator');

const errorhandling = (req, res, next)=> {
    const result = validationResult(req);
    if(!result.isEmpty()){
        res.send({ errors: result.mapped() });
    } else {
        next();
    }
}
module.exports = errorhandling;