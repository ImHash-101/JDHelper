const { DataTypes } = require("sequelize")
module.exports ={
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrementIdentity:true
    },
    pt_pin:{
        type:DataTypes.STRING,
    },
    pt_key:{
        type:DataTypes.STRING
    },
    auth_level:{
        type:DataTypes.INTEGER,
        defaultValue: 0
    }

}