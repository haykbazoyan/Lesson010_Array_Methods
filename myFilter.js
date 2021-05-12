function myFilter(array, fn) {
  let resultArr = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    let check = fn(element, index, array);
    if (check) {
      resultArr.push(element);
    }
  }
  return resultArr;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let print = myFilter(arr, (el) => el > 5);
console.log(print);
