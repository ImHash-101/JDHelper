const { DataTypes } = require('sequelize')

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
    nickName:{
        type:DataTypes.STRING,
        defaultValue:"你没有名字"
      },
    bean_num:{
        type: DataTypes.INTEGER,
        defaultValue:0
    },
    last_outcome:{
        type: DataTypes.INTEGER,
        defaultValue:0
    },
    last_income:{
        type: DataTypes.INTEGER,
        defaultValue:0
    },
    readPacket_current:{
        type:DataTypes.DOUBLE,
        defaultValue:0
    }


}