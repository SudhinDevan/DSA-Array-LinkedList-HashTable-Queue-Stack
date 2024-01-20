function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i
        }
    }
    return -1
}

console.log(linearSearch([10, 23, 453, 64, 3, 6, 2, 64, 2, 5, 234], 453))