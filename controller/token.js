const { addUser } = require("./user")
const { genToken,isLogin } = require("../Tools")
exports.getUserToken = async(req,res,next)=>{
    const req_data = {
        pt_pin:req.body.pt_pin,
        pt_key:req.body.pt_key
    }

    const cookie = new Cookie(req_data.pt_pin,req_data.pt_key)

    if(await isLogin(cookie.toString())==1){
        const result = await addUser(req_data,req.sequelize.models.userBase)
        if(result){
            res.status(200).json({
                token:genToken(result.toJSON())
            })
        }else{
            const err = new Error("未知错误")
            err.code = 500
            next(err)
        }
    }else{
        const err = new Error("Cookie 无效")
        err.code = 401
        next(err)
    }
}

// getUserToken,verfiyToken
// getManagerToken
exports.getManagerToken = async(req,res,next)=>{
    const req_data = {
        userName:req.body.userName,
        passwd:req.body.passwd
    }

    const result =  await req.sequelize.models.manager.findOne({where:{req_data}})

    if(result){
        res.status(200).json({
            token:genToken(result.toJSON())
        })
    }else{
        const err = new Error("账号或密码错误")
        err.code = 401
        next(err)
    }


}


exports.verfiyToken = async(req,res)=>{
    res.status(200).end()
}