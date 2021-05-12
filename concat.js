// Concatenate the two arrays

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8, 9];
const arr3 = arr1.concat(arr2);

console.log(arr3);

// with destructuring assignment

const arr1_1 = [1, 2, 3, 4];
const arr2_2 = [5, 6, 7, 8, 9];
const [...arr3_3] = [...arr1_1, ...arr2_2];

console.log(arr3_3);
