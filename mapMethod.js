let users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
];

// - Write a function which returns array of usernames.
function getUserNames(usersArray) {
  let result = usersArray.map((el) => el.username);
  return result;
}

console.log(getUserNames(users)); // ['Yuri Gagarin', 'Nil Armstrong']

// Write a function which returns array of lengths of user names
function getUsernameLengths(usersArray) {
  let usersNameLength = usersArray.map((el) => el.username.length); // ինչքանովա ճիշտ գրել երկու կետով ?????????
  return usersNameLength;
}

console.log(getUsernameLengths(users)); // [12, 13]

// Write a function which parses string integers. If it's not possible to parse, then add null
function arseInteger(arrayOfNum) {
  let resultArr = arrayOfNum.map((el) =>
    Number.isNaN(Number(el)) === Number.isNaN(NaN) ? null : Number(el)
  );
  return resultArr;
}

console.log(arseInteger(["1", "2", "34"])); // [1, 2, 34];
console.log(arseInteger(["1", "px", "2323"])); // [1, null, 2323];
