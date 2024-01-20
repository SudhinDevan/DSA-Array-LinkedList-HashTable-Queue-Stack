function summer(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if ((arr[i] + arr[j]) === target) {
                return console.log([i, j])
            }
        }
    }
    return console.log('Not Found')
}

summer([2, 7, 11, 15], 22)
