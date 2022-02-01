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
        attributes:['id','nickName','beanNum','redBalance','couponNum'],
        where:{
            qqNum
        }
    })



    if(userInfo){
        const id = userInfo.getDataValue('id')
        const beanInfo = await req.sequelize.models.beanInfo.findOne({
            attributes:['todayIncome','todayOutcome','lastIncome','lastOutcome'],
            where:{
                id
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