const { DataTypes } = require("sequelize")
module.exports = {
    pt_pin: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.STRING,
        references: {
            model: 'userBases',
            key: 'pt_pin'
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