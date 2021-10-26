/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
 */

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
var twoSum = function (nums, target) {
  let numberMap = new Map();
  for (let index = 0; index < nums.length; index++) {
    value = nums[index];
    if (numberMap.has(target - value))
      return [index, numberMap.get(target - value)];
    else numberMap.set(value, index);
  }
  return [];
};
// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));

var convertToTitle = function (columnNumber) {
  if (columnNumber < 27) {
    return String.fromCharCode(64 + columnNumber);
  } else {
    // This works for a two digit solution... but we have to account for more columns
    let starter = Math.floor(columnNumber / 26);
    let stringifiedStarter = String.fromCharCode(64 + starter);
    let remainder = columnNumber % 26;
    let stringedRemainder = String.fromCharCode(64 + remainder);
    return stringifiedStarter.concat(stringedRemainder);
  }
};

// Community solution:
var convertToTitleTwo = function (columnNumber) {
  if (columnNumber == 0) return null;
  let result = "";
  while (columnNumber > 0) {
    let remainder = columnNumber % 26;
    let principle = parseInt(columnNumber / 26);
    if (remainder == 0) {
      remainder = 26;
      principle = principle - 1;
    }
    result = String.fromCharCode(64 + remainder) + result;
    columnNumber = principle;
  }
  return result;
};
// for each number run conversion. Then, join the conversion.

// console.log("Expected: Z", "-----", "Returned:", convertToTitleTwo(26));
// console.log("Expected: AA", "----", "Returned:", convertToTitleTwo(27));
// console.log("Expected: AB", "----", "Returned:", convertToTitleTwo(28));
// console.log("Expected: ZY", "----", "Returned:", convertToTitleTwo(701));
// console.log(
//   "Expected: FXSHRXW",
//   "----",
//   "Returned:",
//   convertToTitleTwo(2147483647)
// );

// "H".charCodeAt(0);

var convertToTitle = function (columnNumber) {
  if (columnNumber > 0 && columnNumber <= 26) {
    //   If column number is going to return a single letter...
    return String.fromCharCode(64 + columnNumber);
  }
  return (
    // This solution is recursive, meaning it'll keep running itself until it is satisfied.
    convertToTitle(parseInt(columnNumber / 26)) +
    // ParseInt round down to the integer, completely ignoring the decimal / remainder.
    // Example: 26.9 becomes 26, not 27. Neat.
    convertToTitle(columnNumber % 26)
    // Modulo operator finds our remainder, then runs it through the function to find the tail letter.
  );
};

console.log("Expected: Z", "-----", "Returned:", convertToTitle(26));
console.log("Expected: AA", "----", "Returned:", convertToTitle(27));
console.log("Expected: AB", "----", "Returned:", convertToTitle(28));
console.log("Expected: ZY", "----", "Returned:", convertToTitle(701));
console.log(
  "Expected: FXSHRXW",
  "----",
  "Returned:",
  convertToTitle(2147483647)
);
