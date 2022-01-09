const { genToken,verfiyToken } = require("../util/jwt")
const Cookie = require("../util/Cookie")
const isLogin = require("../util/isLogin")
const { Op } = require("sequelize");
exports.genToken = async (req,res,next)=>{
    //从request获取信息
    const req_data = {
        pt_pin :req.body.pt_pin,
        pt_key :req.body.pt_key
    }    
    let cookie = new Cookie(req_data.pt_pin,req_data.pt_key) 

    console.log(cookie.toString())
    const data = await isLogin(cookie.toString())
        .catch((err)=>{next(err)})
        
    //Cookie有效 islogin == 1 ，无效 == 0
    let islogin = await JSON.parse(data).islogin
    
    if(islogin==1){

       var user =await  req.sequelize.models.user.findOne({
            where:{
                pt_pin:{
                    [Op.eq]:cookie.pt_pin
                }
            }
        })

        if(!user){
            user = await req.sequelize.models.user.build(req_data)
            await user.save()
        }

        const token = await genToken(user.toJSON())
        res.status(200).json({
            token
        })
    }
    else{
        const err = new Error("Cookie 无效")
        err.code = 401
        next(err)
    }


}

exports.verfiyToken = (req,res)=>{
    const result = verfiyToken(req.body.token)
    console.log(result)
    if(result==null)res.status(401).end()
    else res.status(200).end()

}