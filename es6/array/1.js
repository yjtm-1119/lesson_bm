const ages = [32, 15, 19, 12];
// const nums = [];
// for (let age of ages) {
//     if (age >= 18) {
//         nums.push(age);
//     }
// }
// 1.计数 for 机器化,
//表述性更好forEach  函数式编程  提升可读性
const adultArr = ages.filter(age => age >= 18);
//出席？
const adultPresent = ages.some(age =>age>=18)
console.log(adultPresent);
console.log(adultArr);
const allOldEnough = ages.every(age => age >= 18);
console.log(allOldEnough);


