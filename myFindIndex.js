function myFindIndex(array, fn) {
  let findIndex = 0;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    let res = fn(element, index, array);

    if (res) {
      return index;
    }
  }
  return -1;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let print = myFindIndex(arr, (el) => el > 4);

console.log(print);
