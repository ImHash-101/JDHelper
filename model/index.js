const { Sequelize } = require('sequelize')
const userModel = require("./user")
const detail = require("./detail")
const { DB_CONFIG } = require("../config/default")
const SqlString = require('mysql/lib/protocol/SqlString')

module.exports = ()=>{
    return async (req,res,next)=>{
        const sequelize = new Sequelize(
            DB_CONFIG.database,
            DB_CONFIG.user,
            DB_CONFIG.password,
            {
                dialect:DB_CONFIG.protocol,
                host:DB_CONFIG.host,
                port:DB_CONFIG.port
            })

        sequelize.define("user",userModel)
        sequelize.define("detail",detail)

        req.sequelize = sequelize
        sequelize.sync()
        // ;(await sequelize.models.user.findOne()).toJSON
        // const users = await sequelize.models.user.findAll()
        // console.log(users)
        next()
    }
}