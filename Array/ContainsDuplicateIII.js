function containsDuplicateIII(arr, indexDiff, valueDiff) {
    let index = indexDiff
    let value = valueDiff
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (Math.abs(i - j) <= indexDiff && Math.abs(arr[i] - arr[j]) <= valueDiff) {
                return true
            }
        }
    }
    return false
}

console.log(containsDuplicateIII([1, 5, 9, 1, 5, 9], 2, 3))