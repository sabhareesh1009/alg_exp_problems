/* Check given string is palindrom  if it is palindrom then return true otherwise return false*/
// O(N) time complexity | O(1) space complexity
function isPalindrome(string) {
  let reverseStr = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reverseStr += string[i];
  }
  if (string === reverseStr) return true;
  return false;
}

let args = arguments;

// Do not edit the line below.
exports.isPalindrome = isPalindrome;
