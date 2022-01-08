const orm = require("orm")
const { DB_URL } = require("../config/default")
module.exports= ()=>{
    return orm.express(DB_URL, {
        define: (db,models,next)=>{
            models.User = db.define("user",{
                id:      {type: 'serial', key: true}, // the auto-incrementing primary key
                pt_pin:    {type: 'text'},
                pt_key: {type: 'text'},
                auth_level:{type:'integer',defaultValue:0}
            })
            
            db.sync() //同步模型
            next()
        }
    })
}