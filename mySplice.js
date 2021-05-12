let arr = [1, 2, 3, 4, 5, 6, 7, 8];

function mySplice(array, start = 0, delElemSum = undefined, ...args) {
  let removedItems = [];
  let stayItems = [];
  if (delElemSum === undefined) {
    for (let index = 1; index < array.length; index++) {
      removedItems.push(array[index]);
    }
    arr = array.shift(0);
    return removedItems;
  }

  for (let index = start; index < start + delElemSum; index++) {
    removedItems.push(array[index]);
    array[index] = null;
  }

  arr = array.filter((el) => el !== null);
  let arr1 = [];
  let arr2 = [];

  for (let i = 0; i < arr.length; i++) {
    if (i < start) {
      arr1.push(arr[i]);
    } else {
      arr2.push(arr[i]);
    }
  }
  arr = arr1.concat(args, arr2);

  return removedItems;
}

console.log(mySplice(arr, 1, 3, 15, 16, 17, 18));
console.log(arr);
