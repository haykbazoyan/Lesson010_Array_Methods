function myEvery(array, fn) {
  if (array.length === 0) return true;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    return fn(element, index, array) ? true : false;
  }
}

let arr = [];
let arr1 = [11, 12, 13, 14, 5, 6, 7, 8];
let print = myEvery(arr, (el) => el > 4);
console.log(print);

let print1 = myEvery(arr1, (el) => el > 4);
console.log(print1);
