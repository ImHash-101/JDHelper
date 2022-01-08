const SERVER_URL = "http://1.116.164.17:5700"
const client_id = 'o-T40fzBK36W'
const client_secret = 'Nm_RKR6HMkkc9rRtVnUWIvnD'
const request = require("request")

const getToken = (client_id,client_secret)=>{
    request(SERVER_URL+"/open/auth/token",{
        method: 'GET',
        params: { 
            t: Date.now(),
            client_id,
            client_secret
        },
    },(err,body)=>{
        // console.log(err)
        console.log(body)
    })
}

getToken(client_id,client_secret)