const { check, validationResult } = require("express-validator")
exports.signUpRules=()=>[
    check("fullName","this field is require").notEmpty(),
    check("email","this should be a valid email").isEmail(),
    check("email","this email is empty").notEmpty(),
    check('password', 'this field should contain at least 6 characters').isLength( {min: 6})
]
exports.validator=(req,res,next)=>{
    const errors=validationResult(req);
    return errors.isEmpty()?
    next()
    :res.status(400).json({errors:errors.array()});
}
