const { verfiyToken } =require("../util/jwt")
module.exports = ()=>{
    return (req,res,next)=>{
        const result = verfiyToken(req.body.token)
        // console.log(result)
        if(result==null)res.status(401).end()
        else{
            req.user = result
            next()  
        } 
    }
}