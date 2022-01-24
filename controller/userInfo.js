const { Op } =require("sequelize")

exports.getUserInfo = async (req,res)=>{
    
    const isAll = req.query.isAll

    if(isAll!=undefined){
        console.log(isAll)
    }else{
        console.log("not All")
    }

    
    const userInfo = await get(req,req.user.id)
    console.log(req.user.id)
    console.log(userInfo.dataValues)

    res.status(200).json(userInfo.dataValues)
}

const get = (req,id)=>{
    return  req.sequelize.models.userInfo.findOne({
        attributes:['nickName','beanNum','headImageUrl','redBalance','couponNum'],
        where:{
            id:{
                [Op.eq]:id
            }
        }
    })
}
