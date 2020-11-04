let bol: Boolean = true
let num: number = 0x102
let string: string = 'str'
let numList: number[] = [1, 2, 3]
let strList: string[] = ['1', '2', '3']
// 泛型方式
let numArrayList: Array<number> = [1, 2, 3]
// 元组
let tuple: [string, number]
tuple = ['1', 1]
tuple[0] = '2'
// 枚举
enum Color {
  Red = 1, Green = 3, Blue = 2
}
let c1: Color = Color.Red

let colorName: string = Color[2]

// any
let a: any = 2
a = '1'

// void
// function log(): void {
//   console.log('我爱学习，学习使我快乐')
// }
// log()

// let un: void = undefined
// let un: undefined = void (666)
// console.log(un)

// 联合类型
let num1: number | null = 3
num1 = null

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
let o: object = { m: 1 }

// 类型断言
let strValue: any = "hello word"
// let strLength: number = (<string>strValue).length
let strLength: number = (strValue as string).length
console.log(strLength)

// let objectArr: {name: string}[]=[{name: 'dd'}]
// console.log(objectArr)
type User = {
  name: string,
  age: number
}
let objectArr: User[] = [
  {
    name: '张三',
    age: 2
  }
]

// 报错
// class Teacher {
//   name: string  
//   age: number
// }
class Teacher {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}
let tObjectArr: Teacher[] = [
  {
    name: 'zz',
    age: 2
  }
]