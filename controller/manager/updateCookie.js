exports.updateCookie = async (req,res,next)=>{
    //从request获取信息
    const req_data = {
        pt_pin :req.body.pt_pin,
        pt_key :req.body.pt_key
    }    
    let cookie = new Cookie(req_data.pt_pin,req_data.pt_key) 

    const islogin = await isLogin(cookie.toString()).catch(()=>{
        const err = new Error("Cookie 过期")
        err.code = 401
        next(err)
    })
    
    if(islogin==1){

       var userBase =await  req.sequelize.models.userBase.findOne({
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