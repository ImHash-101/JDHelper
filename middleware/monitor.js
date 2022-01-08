const util = require('util')
function getToken(req) {
    const { authorization = '' } = req.headers;
    if (authorization && authorization.split(' ')[0] === 'Bearer') {
      return authorization
        .replace('Bearer ', '')
        .replace('mobile-', '')
        .replace('desktop-', '');
    }
    return '';
  }


module.exports = ()=>{
    return (req,res,next)=>{
        // console.log(util.format(req.authorization))
        // console.log(util.format(req.params))
        // console.log(util.format(req.query))
        console.log(getToken(req))
        next()
    }
}