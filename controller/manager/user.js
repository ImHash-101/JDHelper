const { addUser,updateUser,bindQQ } = require("../user")
const { isLogin,Cookie } = require("../../Tools")


exports.addUser = async (req,res,next)=>{
    const req_data = {
        pt_pin:req.body.pt_pin,
        pt_key:req.body.pt_key
    }

    const cookie = new Cookie(req_data.pt_pin,req_data.pt_key)

    if(await isLogin(cookie.toString())==1){
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

    if(await isLogin(cookie.toString())==1){
        const result = await bindQQ(req_data,req.sequelize.models.userBase)
        if(result==0||result==2){
            res.status(200).json({code:result})
        }else if(result==1){
            const err = new Error("已经绑定过了")
            err.code = 602
            next(err)
        }else if(result==-1){
            const err = new Error("已被其他QQ绑定")
            err.code = 602
            next(err)
        }else{
            const err = new Error("未知错误")
            err.code = 500
            next(err)
        }

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

    if(await isLogin(cookie.toString())==1){
        await updateUser(req_data,req.sequelize.models.userBase)
        res.status(200).end()
    }else{
        const err = new Error("Cookie 无效")
        err.code = 601
        next(err)
    }
}
