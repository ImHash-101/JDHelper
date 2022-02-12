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