// function isPalindrome(s) {
//   let left = 0;
//   let right = s.length - 1;

//   while (left <= right) {
//     if (s[left] !== s[right]) return false;

//     left++;
//     right--;
//   }

//   return true;
// }

// console.log(isPalindrome('text')); // false
// console.log(isPalindrome('assa')); // true

String.prototype.isPalindrome = function () {
  let left = 0;
  let right = this.length - 1;

  while (left <= right) {
    if (this[left] !== this[right]) return false;

    left += 1;
    right -= 1;
  }

  return true;
};

console.log('text'.isPalindrome()); // false
console.log('assa'.isPalindrome()); // true
console.log('racecar'.isPalindrome()); // true
