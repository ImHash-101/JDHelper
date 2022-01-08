const { Sequelize } = require('sequelize')
const userModel = require("./user")
const { DB_CONFIG } = require("../config/default")

module.exports = ()=>{
    return async (req,res,next)=>{
        const sequelize = new Sequelize(
            DB_CONFIG.database,
            DB_CONFIG.user,
            DB_CONFIG.password,
            {
                dialect:DB_CONFIG.protocol,
                host:DB_CONFIG.host,
                port:3306
            })

        sequelize.define("user",userModel,{
            tableName:"user",
        })
        req.sequelize = sequelize

        sequelize.sync()
        // ;(await sequelize.models.user.findOne()).toJSON
        // const users = await sequelize.models.user.findAll()
        // console.log(users)
        next()
    }
}