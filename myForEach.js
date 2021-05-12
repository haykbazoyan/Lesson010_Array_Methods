function myForEach(array, action) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    action(element, index, array);
  }
}

let arr = [1, 2, 3, 4, 5];
myForEach(arr, (el) => console.log(el * 3));

console.log("Arr:1: ", arr);

myForEach(arr, (el, ind) => (arr[ind] = Math.pow(el, 2)));

console.log("Math.pow:: ", arr);

arr.forEach((el, ind) => (arr[ind] = el + 2));

console.log("Plus Two:: ", arr);
