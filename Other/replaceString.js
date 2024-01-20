// const str = 'abcd';
// const n = 2;
// const replaceNth = (str, n) => {
//    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//    let i, pos, res = '';
//    for(i = 0; i < str.length; i++){
//       pos = alphabet.indexOf(str[i]);
//       res += alphabet[(pos + n) % alphabet.length];
//    };
//    return res;
// };
// console.log(replaceNth(str, n));


function stringchange(xyz, value) {
    let str = xyz.toLowerCase()
    let n = value
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let pos, res = '';
    for (let i = 0; i < str.length; i++) {
        pos = alphabet.indexOf(str[i])
        res += alphabet[(pos + n) % alphabet.length]
    }
    return res;
}

console.log(stringchange('ABCz', 1))


// function replaceNth(str, n) {
//     const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//     let i, pos, res = '';
//     for (i = 0; i < str.length; i++) {
//         pos = alphabet.indexOf(str[i]);
//         res += alphabet[(pos + n) % alphabet.length];
//     };
//     return res;
// };
// console.log(replaceNth('abcd', 1));
