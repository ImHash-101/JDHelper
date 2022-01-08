const util = require('util')
module.exports = () => {
    return (err,req,res,next) => {
        const {code=500} =err
        res.status(code).json({
            error: err.message
        })
    }
}