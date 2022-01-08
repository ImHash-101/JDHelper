const Cookie = require("../util/Cookie")
const cookie = new Cookie("123","456")
console.log(cookie.toString())

class Point {
    //构造函数
    constructor(x, y) {
        this.x = x;//类中变量
        this.y = y;
    }
    //类中函数
    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
    //静态函数
    static sayHello(name){
        //修改静态变量
        this.para = name;
        return 'Hello, ' + name;
    }
}
const point = new Point(1,2)
console.log(point.toString())