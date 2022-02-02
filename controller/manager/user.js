const { userInfo } = require("os")
const Cookie = require("../../util/Cookie")
const isLogin = require("../../util/isLogin")
const { Op } = require("sequelize")
exports.addUser = async (req,res,next)=>{
    //从request获取信息
    const req_data = {
        pt_pin :req.body.pt_pin,
        pt_key :req.body.pt_key
    }    
    let cookie = new Cookie(req_data.pt_pin,req_data.pt_key) 

    const islogin = await isLogin(cookie.toString()).catch((err)=>{
        next(err)
        return
    })
    
    if(islogin==1){
        let userBase =await req.sequelize.models.userBase.findOne({
            where:{
                pt_pin:req_data.pt_pin
            }
        })

        if(userBase!=null){
            const userInfo = await req.sequelize.models.userInfo.findOne({
                where:{
                    pt_pin:req_data.pt_pin
                }
            })

            const db_qqNum = userInfo.getDataValue('qqNum')

            if(db_qqNum==null){
                userInfo.set('qqNum',req.body.qqNum)
                await userInfo.save()
                res.status(200).end()
                return
            }else{
                const err = new Error()
                if(db_qqNum == req.body.qqNum) err.message = "您已经绑定过，不需要再次绑定"
                else err.message = "该Cookie已被其他QQ账号绑定"
                err.code = 401
                next(err)
                return
            }

        }
        userBase = await req.sequelize.models.userBase.build(req_data)

        await userBase.save()


        const userInfo = await req.sequelize.models.userInfo.findOne({
            where:{
                pt_pin:req_data.pt_pin
            }
        })
    

        await userInfo.update({
            qqNum:req.body.qqNum
        })
        res.status(200).end()
    }
    else{
        const err = new Error("Cookie 无效")
        err.code = 401
        next(err)
    }

}

exports.updateUser = async (req,res,next)=>{
    //从request获取信息
    const req_data = {
        pt_pin :req.body.pt_pin,
        pt_key :req.body.pt_key
    }    
    let cookie = new Cookie(req_data.pt_pin,req_data.pt_key) 

    const islogin = await isLogin(cookie.toString()).catch((err)=>{
        next(err)
        return
    })
    
    if(islogin==1){

       let userBase =await  req.sequelize.models.userBase.findOne({
            where:{
                pt_pin:{
                    [Op.eq]:cookie.pt_pin
                }
            }
        })

        if(userBase){
            await userBase.update({
                ...req_data
            })

            res.status(200).end()

        }else{
            const err = new Error("用户不存在")
            err.code = 401
            next(err)
        }

    }
    else{
        const err = new Error("Cookie 无效")
        err.code = 401
        next(err)
    }

}