exports.getUserInfo = async (req,res,next)=>{
    const qqNum = req.body.qqNum

    const userInfo = await req.sequelize.models.userInfo.findOne({
        attributes:['nickName','beanNum','redBalance','couponNum'],
        where:{
            qqNum
        }
    })

    if(userInfo){
        
        res.status(200).json(userInfo.toJSON())
    }else{
        const err = new Error("未绑定Cookie")
        err.code = 601
        next(err)
    }

}

exports.getBeanInfo = async (req,res,next)=>{
    const qqNum = req.body.qqNum

    const userInfo = await req.sequelize.models.userInfo.findOne({
        attributes:['pt_pin','nickName','beanNum','redBalance','couponNum'],
        where:{
            qqNum
        }
    })



    if(userInfo){
        const pt_pin = userInfo.getDataValue('pt_pin')
        const beanInfo = await req.sequelize.models.beanInfo.findOne({
            attributes:['todayIncome','todayOutcome','lastIncome','lastOutcome'],
            where:{
                pt_pin
            }
        })

        

        res.status(200).json({
            ...userInfo.toJSON(),
            ...beanInfo.toJSON()
        })

    }else{
        const err = new Error("未绑定Cookie")
        err.code = 601
        next(err)
    }
}