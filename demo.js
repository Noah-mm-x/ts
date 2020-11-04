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
function getPoint(data) {
    console.log("mfx");
    console.log(data.x, data.y);
}
var p1 = {
    x: 2,
    y: 10
};
getPoint(p1);
