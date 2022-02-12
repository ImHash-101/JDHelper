exports.addUser = async (dataDict,UserBase)=>{
    var result = await UserBase.findOne({
        where:{pt_pin:dataDict.pt_pin}
    })
    if(result)return result
    result = await UserBase.build(dataDict)
    await result.save()
    return result
}

exports.updateUser = async (dataDict,UserBase)=>{
    var result = await UserBase.findOne({
        where:{pt_pin:dataDict.pt_pin}
    })
    if(result==null){
        result = await UserBase.build(dataDict)
        await result.save()
    }else{
        await result.update(dataDict)
    }
}

exports.bindQQ = async (dataDict,UserBase)=>{
    var result = await UserBase.findOne({
        where:{pt_pin:dataDict.pt_pin}
    })
    if(result==null){
        result = await UserBase.build(dataDict)
        await result.save()
        return 0
    }else if(result.getDataValue('qqNum')==null){
        await result.update(dataDict)
        return 0
    }else if(result.getDataValue('qqNum')==dataDict.qqNum){
        return 1
    }else{
        return -1
    }    
}

