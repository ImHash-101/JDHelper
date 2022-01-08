// const options = {
//     url: 'https://plogin.m.jd.com/cgi-bin/ml/islogin',
//     headers: {
//         "Cookie":null,
//         "referer": "https://h5.m.jd.com/",
//         "User-Agent": "jdapp;iPhone;10.1.2;15.0;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
//     }
// }
// const request = require("request")
const cookieStr="wxa_level=1; retina=0; cid=3; wqmnx1=MDEyNjM2NToubS9pYXBfZXRseGkubk4wNjRsaS5IbGVDLzQxYTdkMC4yWWEtNDFSUyMhKQ==; jxsid=16413109784694239179; webp=1; __jdv=122270672|direct|-|none|-|1641310979082; __jdc=122270672; __jda=122270672.16413109790821780502077.1641310979.1641310979.1641310979.1; mba_muid=16413109790821780502077; visitkey=46345205019148812; autoOpenApp_downCloseDate_jd_homePage=1641310981375_1; shshshfp=cb08b50b81aec2e67079899d18919895; shshshfpa=a10a1806-ad43-cbc7-5162-907e25867a32-1641310987; shshshfpb=o9bcDq7GaktRr7Od9XMDBWQ; __jdb=122270672.4.16413109790821780502077|1.1641310979; mba_sid=16413109790843548882609856996.4; shshshsID=b01a73f2fed285d50974797c656f027e_3_1641311017437; 3AB9D23F7A4B3C9B=4E5GHX5UDVQLP4OG7XO34T55QIN3QSESTZYOTKKPG52P4IABPFK6HIS7GJRB3CHVXAJ4OWF5UQEC3OMSF6EIZEZ5H4; jcap_dvzw_fp=FL1zpqoTjgiNCM8utn3WJO_932tpNHz9UjL6UFKFQcpuKj46T3oN7Q-gMVFn4QHciJjSaQ==; TrackerID=4H1xmrPpaab9yVmiP3p0_r1Z4MMKNKiPT_YgCr2pOgiLSLsv87EJZalRMxhJVOx3RZI3CUiGcvYpwVgN0gt8AKD54MQYnK4D74sMZtcA8PpXJ6ztOJBp62pVz-S_HFBTua3IvzDBn6sI3kSTeCGOyA; pt_key=AAJh1GtGADDUaVZ_6s4b9fl38r91eef6WwkYJFbGcsS3BWgfy4D0rYV1PQGzYSIKRne_S3WH6qw; pt_pin=jd_6031b8c0872cb; pt_token=a54yff7z; pwdt_id=jd_6031b8c0872cb; sfstoken=tk01mb63e1c1aa8sMXgxeDAxb0wrq/Ff8RorOCvoIu+kPV9R6EpNENhJCD6bx0Zif0EDxFMGu7ZNmcE/hP8qLgSTbIep; whwswswws=; __jd_ref_cls=MLoginRegister_SMSLoginSuccess"
// console.log(options)

// const request = require("request");

// request(options.url,options,(err,res,body)=>{
//     var data = JSON.parse(body)
//     console.log(data.islogin)
// })

// function 摇色子(){
//     return new Promise((resolve, reject)=>{
//         let sino = parseInt(Math.random() * 6 +1)
//         setTimeout(()=>{
//             resolve(sino)
//         },3000)
//     })
// }
// async function test(){
//     let n =await 摇色子()
//     console.log(n)
// }
// test()

// const isLogin = require("../util/isLogin")
// isLogin(cookieStr).then((data)=>{
//     console.log(data)
// })

const Cookie= {
    pt_key=AAJh1GtGADDUaVZ_6s4b9fl38r91eef6WwkYJFbGcsS3BWgfy4D0rYV1PQGzYSIKRne_S3WH6qw,
    pt_pin=jd_6031b8c0872cb
}

const token = "cdd022cc-76cf-4995-94cd-6054e12b6671"
const body = await api({
    method: 'GET',
    url: 'http://1.116.164.17:5700/open/env',
    params: { t: Date.now() },
    json: [{
      name: 'JD_COOKIE',
      value: cookie,
      remarks,
    }],
    headers: {
      Accept: 'application/json',
      authorization: `Bearer ${token}`,
      'Content-Type': 'application/json;charset=UTF-8',
    },
  }).json();

  console.log(body)