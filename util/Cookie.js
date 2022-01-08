class Cookie{
    
    constructor(pt_pin,pt_key){
        this.pt_pin = pt_pin
        this.pt_key = pt_key
    }
    
    toString(){
        return "pt_pin="+this.pt_pin+";pt_key="+this.pt_key+";"
    }

}
module.exports = Cookie