exports.getUserInfo = async (req,res,next)=>{
    const id = req.userBase.id

    const userInfo = await req.sequelize.models.userInfo.findOne({
        attributes:['nickName','beanNum','redBalance','couponNum'],
        where:{
            id
        }
    })

    if(userInfo){
        
        res.status(200).json(userInfo.toJSON())
    }else{
        const err = new Error("用户不存在")
        err.code = 401
        next(err)
    }

}

exports.getBeanInfo = async (req,res,next)=>{
    const id = req.userBase.id

    const beanInfo = await req.sequelize.models.beanInfo.findOne({
        attributes:['todayIncome','todayOutcome','lastIncome','lastOutcome'],
        where:{
            id
        }
    })

    if(beanInfo){
        res.status(200).json(beanInfo.toJSON())
    }else{
        const err = new Error("用户不存在")
        err.code = 401
        next(err)        
    }
}