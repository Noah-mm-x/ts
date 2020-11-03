"use strict";
var bol = true;
var num = 0x102;
var string = 'str';
var numList = [1, 2, 3];
var strList = ['1', '2', '3'];
// 泛型方式
var numArrayList = [1, 2, 3];
// 元组
var tuple;
tuple = ['1', 1];
tuple[0] = '2';
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c1 = Color.Red;
var colorName = Color[2];
// any
var a = 2;
a = '1';
// void
// function log(): void {
//   console.log('我爱学习，学习使我快乐')
// }
// log()
// let un: void = undefined
// let un: undefined = void (666)
// console.log(un)
// 联合类型
var num1 = 3;
num1 = null;
// never
// 任何类型都不能赋值给never
// function error(msg: string): never {
//   throw new Error(msg);
// }
// function fail() {
//   return error('network error!')
// }
// fail()
// object
var o = { m: 1 };
// 类型断言
var strValue = "hello word";
// let strLength: number = (<string>strValue).length
var strLength = strValue.length;
console.log(strLength);
