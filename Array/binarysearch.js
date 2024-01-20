// function binarySearch(arr, target) {
//     let leftIndex = 0;
//     let rightIndex = arr.length - 1;

//     while (leftIndex <= rightIndex) {
//         let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
//         if (target == arr[middleIndex]) {
//             return middleIndex
//         }
//         if (target > arr[middleIndex]) {
//             leftIndex = middleIndex + 1;
//         } else {
//             rightIndex = middleIndex - 1;
//         }
//     }
//     return -1
// }



// console.log(binarySearch([1, 2, 3, 4, 5, 7], 3))

// let names = ['ABCD', 'BCDE', 'CDEF', 'DEFG', 'EFGH'];
// let target = 'CDEF';
// let found = false;
// for (let i = 0; i < names.length; i++) {
//     if (names[i] === target) {
//         found = true;
//         break;
//     }
// }
// if (found) {
//     console.log("Element found in the array.");
// } else {
//     console.log("Element not found in the array.");
// }




// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
//         let guess = arr[mid];

//         if (guess === target) {
//             return mid; // Target found, return the index
//         } else if (guess < target) {
//             left = mid + 1; // Target is in the right half, adjust the left pointer
//         } else {
//             right = mid - 1; // Target is in the left half, adjust the right pointer
//         }
//     }

//     return -1; // Target not found, return -1
// }





// // Example usage
// const sortedArray = [2, 4, 6, 8, 10, 12, 14, 16, 18];
// const target = 10;
// const result = binarySearch(sortedArray, target);

// if (result !== -1) {
//     console.log(`Target ${target} found at index ${result}`);
// } else {
//     console.log(`Target ${target} not found in the array`);
// }
