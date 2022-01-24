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
    // 昵称
    nickName:{
        type:DataTypes.STRING,
        defaultValue:'你没有名字'
    },
    // 头像url地址
    headImageUrl:{
        type:DataTypes.STRING
    },
    // 京豆总数
    beanNum:{
        type: DataTypes.INTEGER,
        defaultValue:0
    },
    // 优惠券
    couponNum:{
        type:DataTypes.INTEGER,
        defaultValue:0
    },
    //红包
    redBalance:{
        type:DataTypes.DOUBLE,
        defaultValue:0
    }
}