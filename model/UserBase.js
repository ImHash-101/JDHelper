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
    },
    //qq号
    qqNum:{
        type:DataTypes.INTEGER
    },
    //是否过期
    isOverdue:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    }
}