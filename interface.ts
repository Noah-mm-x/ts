interface Person {
  // 基础属性
  name: string
  // 可有可无
  age?: number
  // 只读
  readonly gender?: string
  // 多余属性处理
  [propName: string]: any
  // 方法
  say(): string
}
const getPersonName = (person: Person): string => {
  console.log(person.name)
  return person.name
}
const setPersonName = (person: Person, name: string): void => {
  person.name = name
}

// const setPersonGender = (person: Person, gender: string):void=>{
//   person.gender = gender //报错
// }

const person = {
  name: 'zzz',
  say() {
    return 'hello'
  }
}
// getPersonName(person)
// setPersonName(person,'aaa')
// getPersonName(person)
// getPersonName({
//   no: 2,
//   name: 'lalal'
// })   
class User implements Person {
  name = 'haha'
  age = 23
  constructor() { }
  say() {
    return 'hi'
  }
}

export {}