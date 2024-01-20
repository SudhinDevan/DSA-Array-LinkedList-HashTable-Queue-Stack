function prime(arr) {
    let k = 0;
    let flag = 0;
    let abc = [];
    for (let i = 0; i < arr.length; i++) {
        flag = 0
        for (let j = 2; j < arr[i]; j++) {
            if (arr[i] % j === 0) {
                flag = 1;
                break;
            }
        }
        if (flag === 0) {
            abc.push(arr[i])
            // console.log(abc)
        }
    }
    return abc
}


console.log(prime([1, 2, 3, 4, 5, 6, 7, 8, 9, 13]))