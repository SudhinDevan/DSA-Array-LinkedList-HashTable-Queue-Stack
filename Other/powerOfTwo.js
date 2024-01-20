// function pow(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum = Math.pow(2, i);
//         if (sum == n) {
//             return ("Power");
//         }
//     }
//     return ("Not power");
// }
// console.log(pow(32));
// big-O= O(n)


function poweroftwo(n) {
    while (n > 1) {
        if (n % 2 !== 0) {
            return false;
        }
        n = n / 2;
    }
    return true;
}
console.log(poweroftwo(512))


// big-O= O(log n))
