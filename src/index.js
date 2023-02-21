
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  let arr1 = [];
let arr3 = [];
if (matrix.length > 0) {
  let arr = matrix.map( (x, y) => { y%2 === 0 ? arr1[y] = x : arr1[y] = x.reverse()   })
  let arr2 = arr1.join(',', '').split(',').map((x, y) => { arr3[y] = Number(x)}) 
} else {
  arr3
}

  return arr3;
}
