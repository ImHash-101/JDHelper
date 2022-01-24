const { Op } =require("sequelize")

exports.getUserBase = async (req,res)=>{
    
    const isAll = req.query.isAll

    if(isAll!=undefined){
        console.log(isAll)
    }else{
        console.log("not All")
    }

    
    const user = await get(req,req.user.id)
    console.log(req.user.id)
    console.log(user.dataValues)

    res.status(200).json(user.dataValues)
}

const get = (req,id)=>{
    return  req.sequelize.models.userBase.findOne({
        where:{
            id:{
                [Op.eq]:id
            }
        }
    })
}