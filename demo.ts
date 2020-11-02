function demo(name: string) {
  console.log('你好, ' + name);
}
demo('啊啊')

class Animal{
  name
  constructor(name: string){
    this.name = name
  }
  showName(){
    console.log(this.name)
    // return '1'
  }
}
let dog = new Animal('哈利')
dog.showName()