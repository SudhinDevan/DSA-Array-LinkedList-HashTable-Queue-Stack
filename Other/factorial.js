
// function fact(n) {
//     if (n === 0) {
//         return 1
//     }
//     return n * fact(n - 1)
// }
// console.log(fact(5))



// // FACTORIAL
// function factorial(n) {
//     let sum = 1;
//     for (let i = 2; i <= n; i++) {
//         sum = sum * i;
//     }
//     return sum;
// }
// console.log(factorial(10))



function factorial(value) {
    if (value === 0) {
        return 1
    }
    return value * factorial(value - 1)

}

console.log(factorial(5))