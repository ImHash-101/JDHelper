
exports.getAlloverdue = async (req,res,next)=>{
    const userInfos = await req.sequelize.models.userInfo.findAll({
        where:{
            isOverdue:true
        }
    })


    let qqNum = []

    for(let userInfo of userInfos){
        let qq = await userInfo.getDataValue("qqNum")
        qqNum.push(qq)
    }

    console.log(qqNum)

    res.status(200).json(qqNum)

}