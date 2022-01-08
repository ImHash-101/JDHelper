const { DataTypes } = require('sequelize')

module.exports = {
    id:{
        type: DataTypes.INTEGER(11),
        primaryKey: true,            // 主键
        autoIncrement: true,         // 自动递增
    },
    pt_pin:{
        type:DataTypes.STRING
    },
    pt_key:{
        type:DataTypes.STRING
    },
    auth_level:{
        type:DataTypes.INTEGER,
        defaultValue: 0
    }
}
