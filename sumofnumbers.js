/*
Jonathan Nguyen
E26 Five Problems
Part 1
 */
const numslist = [1, 3, 2, 6, 8];

function sumFor(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}
function sumWhile(nums) {
  let sum = 0;
  let i = 0;
  while (i < nums.length) {
    sum += nums[i];
    i++;
  }
  return sum;
}
function sumRecursion(nums) {
  if (nums.length > 0) {
    return nums[0] + sumRecursion(nums.slice(1, nums.length));
  }
  return 0;
}
function TheSimpleWay(nums) {
  return _.reduce(nums, function (memo, num) { return memo + num; }, 0);
}
console.log('sumFor: ', sumFor(numslist));
console.log('sumWhile: ', sumWhile(numslist));
console.log('sumRecursion: ', sumRecursion(numslist));
console.log('TheSimpleWay: ', TheSimpleWay(numslist));
