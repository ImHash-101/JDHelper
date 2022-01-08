const { Result } = require("express-validator")
const res = require("express/lib/response")
const request = require("request")

const sync_request = (url,options)=>{
    return new Promise((reslove,reject)=>{
        request(url,options,(err,req,body)=>{
            if(err)reject(err)
            else reslove(body)
        })
    })
}

const isLogin = async (Cookie)=>{
    const url = 'https://plogin.m.jd.com/cgi-bin/ml/islogin'
    const options = {
        method: 'GET',
        headers: {
            "Cookie":Cookie,
            "referer": "https://h5.m.jd.com/",
            "User-Agent": "jdapp;iPhone;10.1.2;15.0;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
        }
    }
    return await sync_request(url,options)
    
}
module.exports = isLogin
// const a =   isLogin("123")
// console.log(a)