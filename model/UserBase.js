const { DataTypes } = require("sequelize")
module.exports ={
    id:{
        primaryKey:true,
        type:DataTypes.INTEGER,
        autoIncrementIdentity:true
    },
    pt_pin:{
        allowNull: false,
        type:DataTypes.STRING,
    },
    pt_key:{
        allowNull: false,
        type:DataTypes.STRING
    },
    auth_level:{
        type:DataTypes.INTEGER,
        defaultValue: 0
    }
}