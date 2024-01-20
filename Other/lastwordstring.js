
// function getLastWord(words) {
//     var n = words.split(" ");
//     return n[n.length - 1];
// }

// // Test case
// var str = "my name is sudhin";
// console.log(getLastWord(str));


function lastWord(str) {

    let res = str.split(" ")
    return res[res.length - 1]

}

console.log(lastWord('hi iam sudhin'))
