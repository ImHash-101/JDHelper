exports.addUser = async (dataDict,UserBase)=>{
    var result = await UserBase.findOne(dataDict.pt_pin)
    if(result)return result
    result = await UserBase.build(dataDict)
    await result.save()
    return result
}

exports.updateUser = async (dataDict,UserBase)=>{
    var result = await UserBase.findOne(dataDict.pt_pin)
    if(result==null){
        result = await UserBase.build(dataDict)
        await result.save()
    }else{
        await result.update(dataDict)
    }
}

