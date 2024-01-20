let arr = [1, 5, 2, 2, 2, 4, 7, 8, 3, 1, 8];
console.log(arr)
let n = arr.length;
for (let i = 0; i < n; i++) {
    if (arr[i] % 2 == 0) {
        for (let j = i + 1; j < n; j++) {
            if (arr[i] == arr[j]) {
                for (let k = j; k < n; k++) {
                    arr[k] = arr[k + 1];
                }
                n--
            }
        }
    }
}

for (let i = 0; i < n; i++) {
    console.log(arr[i])
}