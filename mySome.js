function mySome(array, fn) {
  if (array.length === 0) return false;
  let res = false;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    res = fn(element, index, array);
    if (res === true) return res;
  }
  return res;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let print = mySome(arr, (el) => el > 5);
console.log(print);
