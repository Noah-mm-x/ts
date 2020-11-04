// for (var i = 0; i < 10; i++) {
//   (function(i){
//     setTimeout(() => {
//       console.log(i)
//     }, 1000);
//   })(i)
// }
// function fnc(con: Boolean, x: number) {
//   if(con){
//     let x = 10
//     console.log(x)
//   }
//   console.log(x)
// }
// fnc(false,10)
// fnc(true,10)
// function getSum(arr: number[][]) {
//   let sum = 0
//   for (let i = 0; i < arr.length; i++) {
//     let line = arr[i]
//     for (let i = 0; i < line.length; i++) {
//       let val = line[i]
//       sum += val
//     }
//   }
//   console.log(sum)
// }
// const arr = [
//   [1,2,3],
//   [4,5,6]
// ]
// getSum(arr)

// const obj: Object = {
//   m: 1,
//   n: 2
// }
// obj = {
//   m: 2,
//   n: 1
// }

// let input: [number, number] = [1, 2]
// function add([m, n]: [number, number]) {
//   console.log(m + n)
// }
// add(input)

// let [m, , ...r] = [1, 2, 3, 4]
// console.log(m)
// console.log(r)

// function s(m:string,n?:number) {
//   console.log(m+n)
// }
// s('1')
// s('1',1)

// function log<T>(val: T): T {
//   console.log(val)
//   return val
// }
// log(1)
type Point = { x: number, y: number }
function getPoint(data: Point) {
  console.log("mfx")
  console.log(data.x, data.y)
}
let p1 = {
  x: 2,
  y: 10
}
getPoint(p1)  

