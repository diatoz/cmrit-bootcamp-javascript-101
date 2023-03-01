// Map
const numbers = [1, 2, 3, 4];
const newArr = numbers.map((num) => num + 10);

console.log(newArr);

// Filter
const numbers2 = [1, 2, 3, 4, 3, 4, 5, 4, 4, 5, 4];
const newArr2 = numbers2.filter((num) => num !== 4);

console.log(newArr2);
