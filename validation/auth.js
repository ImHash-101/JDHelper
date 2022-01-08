const validate = require("../middleware/validator")
const { body } = require("express-validator")

exports.genTokenValidations = validate([
    body('pt_pin').notEmpty().withMessage("pt_pin 不能为空"),
    body('pt_key').notEmpty().withMessage("pt_key 不能为空")
])
exports.verfiyValidations = validate([
    body('token').notEmpty().withMessage("token 不能为空")
])