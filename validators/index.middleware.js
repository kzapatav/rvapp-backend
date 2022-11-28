const { validationResult } = require("express-validator");

module.exports = (req, res, next) => {
    //validar los parametros (Generica)
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400)
            .json({ errors: errors.array().map(error => ({ field: error.param, message: error.msg })) })
    }
    next();
}   