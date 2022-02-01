const { DataTypes } = require("sequelize")
module.exports = {
    id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
        references: {
            model: 'userBases',
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
    //qq号
    qqNum:{
        type:DataTypes.INTEGER
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
    },
    //是否过期
    isOverdue:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    }
}