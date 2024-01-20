// Recursive
// function recursiveFibinocci(n) {
//     if (n < 2) {
//         return n;
//     }
//     return recursiveFibinocci(n - 1) + recursiveFibinocci(n - 2)
// }

// console.log(recursiveFibinocci(4))

// FIBINOCCI

// function fibinocci(n) {
//     let a = [0, 1];
//     for (let i = 2; i <= n; i++) {
//         a[i] = a[i - 1] + a[i - 2];
//     }
//     return a;
// }
// console.log(fibinocci(10));


function fibinocci(value) {
    if (value < 2) {
        return value
    }

    return fibinocci(value - 1) + fibinocci(value - 2)

}

console.log(fibinocci(30))