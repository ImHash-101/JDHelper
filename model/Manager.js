const { DataTypes } = require("sequelize")
module.exports ={
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrementIdentity:true
    },
    userName:{
        type:DataTypes.STRING,
        allowNull: false
    },
    passwd:{
        type:DataTypes.STRING,
        allowNull: false
    },
    auth_level:{
        type:DataTypes.INTEGER,
        defaultValue: 0
    }

}