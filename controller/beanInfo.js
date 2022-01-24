const { Op } =require("sequelize")

exports.getBeanInfo = async (req,res)=>{
    
    const isAll = req.query.isAll

    if(isAll!=undefined){
        console.log(isAll)
    }else{
        console.log("not All")
    }

    
    const beanInfo = await get(req,req.user.id)
    console.log(req.user.id)
    console.log(beanInfo.dataValues)

    res.status(200).json(beanInfo.dataValues)
}

const get = (req,id)=>{
    return  req.sequelize.models.beanInfo.findOne({
        attributes:['todayIncome','todayOutcome'],
        where:{
            id:{
                [Op.eq]:id
            }
        }
    })
}