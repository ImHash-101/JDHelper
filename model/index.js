const { Sequelize } = require('sequelize')

const BeanInfoModel = require("./BeanInfo")
const UserBaseModel = require("./UserBase")
const UserInfoModel = require("./UserInfo")

const { DB_CONFIG } = require("../config")

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

        const UserBase = await sequelize.define("userBase",UserBaseModel)

        const UserInfo = await sequelize.define("userInfo",UserInfoModel)
    
        const BeanInfo = await sequelize.define("beanInfo",BeanInfoModel)
    
        // await sequelize.sync()
    
        // await sequelize.query("CREATE TRIGGER autoAdd AFTER INSERT ON userBases FOR EACH ROW BEGIN INSERT INTO userInfos (`id`,`createdAt`,`updatedAt`) VALUES (NEW.id,NEW.createdAt,NEW.updatedAt); INSERT INTO beanInfos (`id`,`createdAt`,`updatedAt`) VALUES (NEW.id,NEW.createdAt,NEW.updatedAt); END")
        

        req.sequelize = sequelize

        next()
    }
}