const { Op } =require("sequelize")

exports.getBeanInfo = async (req,res)=>{
    
    const isAll = req.query.isAll

    if(isAll!=undefined){
        console.log(isAll)
    }else{
        console.log("not All")
    }

    
    const beanInfo = await get(req,req.userBase.id)

    res.status(200).json(beanInfo.dataValues)
}

const get = (req,id)=>{
    return  req.sequelize.models.beanInfo.findOne({
        attributes:['todayIncome','todayOutcome','lastIncome','lastOutcome'],
        where:{
            id:{
                [Op.eq]:id
            }
        }
    })
}