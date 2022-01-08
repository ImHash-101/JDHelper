const e = require("express")
const { genToken,verfiyToken } = require("../util/jwt")
const Cookie = require("../util/Cookie")
const isLogin = require("../util/isLogin")
const { json } = require("express/lib/response")
exports.genToken = (req,res,next)=>{
    //从request获取信息
    const req_data = {
        pt_pin :req.body.pt_pin,
        pt_key :req.body.pt_key
    }    
    let cookie = new Cookie(req_data.pt_pin,req_data.pt_key) 

    console.log(cookie.toString())
    isLogin(cookie.toString())
        .then((data)=>{
            return new Promise((resolve,reject)=>{
                let islogin = JSON.parse(data).islogin
                //Cookie有效 islogin == 1 ，无效 == 0
                if(islogin==1)resolve(islogin) 
                else reject(islogin)
            })
        })
        .then((islogin)=>{
            //Cookie有效
            console.log("Cookie有效 "+islogin)
            // next()
            req.models.User.find({pt_pin:cookie.pt_pin},(err,result)=>{
                if(err)next(err)
                else{
                    //用户存在
                    if(result.length>0){
                        res.status(200).json({
                            token :genToken(result)
                        })
                    }else{
                    //用户不存在
                        req.models.User.create(req_data,(err,result)=>{
                            if(err)next(err)
                            else{
                                res.status(200).json({
                                    token :genToken(result)
                                })
                            }
                        })
                    }
                }

            })
        },(islogin)=>{
            console.log("Cookie无效 "+islogin)
            //Cookie无效
            next("Cookie无效")
        })
}

exports.verfiyToken = (req,res)=>{
    const result = verfiyToken(req.body.token)
    console.log(result)
    if(result==null)res.status(401).end()
    else res.status(200).end()

}