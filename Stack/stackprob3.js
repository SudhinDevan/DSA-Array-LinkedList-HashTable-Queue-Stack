// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine
// the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer
// for this query is -1. Return an array ans of length nums1.length such that ans[i] is the next greater
// element as described above. var nextGreaterElement = function.


var nextGreaterElement = function (array1, array2) {
    let stack = [], count = 0
    for (var i = 0; i < array1.length; i++) {
        var x = array2.indexOf(array1[i])
        for (var j = x + 1; j < array2.length; j++) {
            if (array2[x] < array2[j]) {
                stack.push(array2[j])
                count = 1
                break
            }
        }
        if (count == 0) {
            stack.push(-1)
        }
        count = 0
    }
    return stack
};
const array1 = [4, 1, 2, 5, 6, 7], array2 = [1, 3, 4, 2, 7, 4, 8, 6, 5, 8]
console.log(nextGreaterElement(array1, array2))