
function sentenceReverse(str) {
    let res, pos = ''
    res = str.split(" ")
    for (let i = res.length - 1; i >= 0; i--) {
        pos += res[i] + ' '
    }
    return pos
}

console.log(sentenceReverse('Sky is Blue'))