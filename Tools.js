const request = require("request")
const jwt = require("jsonwebtoken")
const { PRIVATE_KEY } = require("../config")


const sync_request = (url,options)=>{
    return new Promise((reslove,reject)=>{
        request(url,options,(err,req,body)=>{
            if(err)reject(err)
            else reslove(body)
        })
    })
}


class Cookie{
    
    constructor(pt_pin,pt_key){
        this.pt_pin = pt_pin
        this.pt_key = pt_key
    }
    
    toString(){
        return "pt_pin="+this.pt_pin+";pt_key="+this.pt_key+";"
    }

}

exports.Cookie = Cookie

exports.isLogin = async (CookieStr)=>{
    const url = 'https://plogin.m.jd.com/cgi-bin/ml/islogin'
    const options = {
        method: 'GET',
        headers: {
            "Cookie":CookieStr,
            "referer": "https://h5.m.jd.com/",
            "User-Agent": "jdapp;iPhone;10.1.2;15.0;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
        }
    }

    const data = await sync_request(url,options)

    //Cookie有效 islogin == 1 ，无效 == 0
    let islogin = await JSON.parse(data).islogin

    return islogin
    
}


exports.genToken = (data,privateKey=PRIVATE_KEY)=>{
    return jwt.sign(data,privateKey)
}
exports.verfiyToken = (data,privateKey=PRIVATE_KEY)=>{
    var result = null
    try{
        result = jwt.verify(data,privateKey)
    }catch(err){
        console.error(err.message)
    }
    return result
}
