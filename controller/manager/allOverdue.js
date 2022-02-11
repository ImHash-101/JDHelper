exports.getAlloverdue = async (req,res,next)=>{
    const userBases = await req.sequelize.models.userBase.findAll({
        where:{
            isOverdue:true
        }
    })

    let qqNum = []

    for(let userBase of userBases){
        let qq = await userBase.getDataValue("qqNum")
        qqNum.push(qq)
    }
    res.status(200).json(qqNum)
}