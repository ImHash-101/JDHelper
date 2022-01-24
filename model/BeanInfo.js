const { DataTypes } = require("sequelize")
module.exports = {
    id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        references: {
            model: 'users',
            key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade' 
        },
    // 今日收入
    todayIncome:{
        type: DataTypes.INTEGER,
        defaultValue:0
    },
    // 今日支出
    todayOutcome:{
        type: DataTypes.INTEGER,
        defaultValue:0
    },
    // 昨日收入
    lastIncome:{
        type: DataTypes.INTEGER,
        defaultValue:0
    },
    // 昨日支出
    lastOutcome:{
        type: DataTypes.INTEGER,
        defaultValue:0
    }

}