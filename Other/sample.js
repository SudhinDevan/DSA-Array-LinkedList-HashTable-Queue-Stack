function isPalindrome(str) {
    // Base case #1: if the length of the string is 0 or 1, return true
    if (str.length <= 1) {
        return true;
    }

    // Base case #2: if the first and last characters of the string are different, return false
    if (str[0] !== str[str.length - 1]) {
        return false;
    }

    // Recursive case: remove the first and last characters from the string and call isPalindrome with the remaining string
    return isPalindrome(str.slice(1, str.length - 1));
}


console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("rotor")); // false
console.log(isPalindrome("")); // true
console.log(isPalindrome("a")); // true
console.log(isPalindrome("ab")); // false
console.log(isPalindrome("abcba")); // true
