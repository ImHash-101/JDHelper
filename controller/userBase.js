const { Op } =require("sequelize")

exports.getUserBase = async (req,res)=>{
    
    const isAll = req.query.isAll

    if(isAll!=undefined){
        console.log(isAll)
    }else{
        console.log("not All")
    }

    res.status(200).json({
        pt_pin:req.userBase.pt_pin,
        pt_key:req.userBase.pt_key
    })
}

