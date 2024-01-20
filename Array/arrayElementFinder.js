function finder(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return (i + 1)
        }
    }
    return -1
}

console.log(finder([1, 2, 4, 5, 3, 9], 5))