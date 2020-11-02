"use strict";
function demo(name) {
    console.log('你好, ' + name);
}
demo('啊啊');
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.showName = function () {
        console.log(this.name);
        // return '1'
    };
    return Animal;
}());
var dog = new Animal('哈利');
dog.showName();
