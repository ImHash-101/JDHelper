const isLogin = require("../util/isLogin")

exports.getIsOverdue = async (req,res)=>{
    const userBase = req.userBase
    
    const islogin = await isLogin(`pt_pin=${userBase.pt_pin};pt_key=${userBase.pt_key};`)

    res.status(200).json({
        isOverdue:islogin==1?false:true
    })
}