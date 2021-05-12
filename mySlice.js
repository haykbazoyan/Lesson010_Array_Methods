function mySlice(array, start = 0, end = array.length) {
  let newArray = [];

  if (start < 0 && end < 0) {
    for (let ind = array.length + start; ind < array.length + end; ind++) {
      const element = array[ind];
      newArray.push(array[ind]);
    }
    return newArray;
  }

  for (let index = start; index < end; index++) {
    newArray.push(array[index]);
  }
  return newArray;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let removedElements = mySlice(arr, -4, -1);

console.log(removedElements);
