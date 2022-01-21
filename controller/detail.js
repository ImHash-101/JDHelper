const { Op } =require("sequelize")

exports.getDetail = async (req,res,next)=>{
    
    const isAll = req.query.isAll

    if(isAll!=undefined){
        console.log(isAll)
    }else{
        console.log("not All")
    }

    
    const detailInfo = await get(req,req.user.id)
    console.log(req.user.id)
    console.log(detailInfo.dataValues)

    res.status(200).json(detailInfo.dataValues)
}

const get = (req,id)=>{
    return  req.sequelize.models.detail.findOne({
        attributes:['bean_num','last_outcome','nickName'],
        where:{
            id:{
                [Op.eq]:id
            }
        }
    })
}