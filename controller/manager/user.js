const { addUser,updateUser } = require("../user")
const { isLogin,Cookie } = require("../../Tools")


exports.addUser = async (req,res,next)=>{
    const req_data = {
        pt_pin:req.body.pt_pin,
        pt_key:req.body.pt_key
    }

    const cookie = new Cookie(req_data.pt_pin,req_data.pt_key)

    if(isLogin(cookie.toString())==1){
        const result = await addUser(req_data,req.sequelize.models.userBase)

    }else{
        const err = new Error("Cookie 无效")
        err.code = 601
        next(err)
    }

}

exports.bindQQ = async (req,res,next)=>{
    const req_data = {
        pt_pin:req.body.pt_pin,
        pt_key:req.body.pt_key,
        qqNum :req.body.qqNum
    }

    const cookie = new Cookie(req_data.pt_pin,req_data.pt_key)

    if(isLogin(cookie.toString())==1){
        await updateUser(req_data,req.sequelize.models.userBase)
        res.status(200).end()
    }else{
        const err = new Error("Cookie 无效")
        err.code = 601
        next(err)
    }
}

exports.updateKey = async (req,res,next)=>{
    const req_data = {
        pt_pin:req.body.pt_pin,
        pt_key:req.body.pt_key,
        isOverdue:false
    }
    const cookie = new Cookie(req_data.pt_pin,req_data.pt_key)

    if(isLogin(cookie.toString())==1){
        await updateUser(req_data,req.sequelize.models.userBase)
        res.status(200).end()
    }else{
        const err = new Error("Cookie 无效")
        err.code = 601
        next(err)
    }
}
