const validate = require("../middleware/validator")
const { body } = require("express-validator")

exports.genTokenValidations = validate([
    body('pt_pin').notEmpty().withMessage("pt_pin 不能为空"),
    body('pt_key').notEmpty().withMessage("pt_key 不能为空")
])
exports.verfiyValidations = validate([
    body('token').notEmpty().withMessage("token 不能为空")
])

exports.needCookie = validate([
    body('pt_pin').notEmpty().withMessage("pt_pin 不能为空"),
    body('pt_key').notEmpty().withMessage("pt_key 不能为空")
])


exports.needToken = validate([
    body('token').notEmpty().withMessage("token不能为空")
])


exports.needPasswd = validate([
    body("userName").notEmpty().withMessage("用户名不能为空"),
    body("passwd").notEmpty().withMessage("密码不能为空")
])


exports.needQQNum = validate([
    body("qqNum").notEmpty().withMessage("QQ号不能为空"),
])