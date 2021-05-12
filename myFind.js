function myFind(array, Fn) {
  let res = null;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    res = Fn(element, index, array);
    if (res !== null) break;
  }

  return res;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let print = myFind(arr, (el) => (el === 4 ? el : null));
console.log(print);
