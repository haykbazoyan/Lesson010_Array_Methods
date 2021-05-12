function mySplice(array, start = 0, delElemSum = undefined, ...args) {
  let removedItems = [];

  if (delElemSum === undefined) {
    for (let index = 1; index < array.length; index++) {
      removedItems.push(array[index]);
    }
    array = array.shift(0);

    return removedItems;
  }

  for (let index = start; index < start + delElemSum; index++) {
    removedItems.push(array[index]);
    array[index] = null;
  }

  let arr1 = [];
  let arr2 = [];

  for (let i = 0; i < array.length; i++) {
    if (i < start) {
      arr1.push(array[i]);
    } else if (i >= start + delElemSum) {
      arr2.push(array[i]);
    }
  }

  let arrComb = arr1.concat(args, arr2);
  for (let i = 0; i < arrComb.length; i++) {
    array[i] = arrComb[i];
  }
  array = arr1.concat(arr2);

  return removedItems;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(mySplice(arr, 1, 0, 15, 16, 17, 18));
console.log(arr);
