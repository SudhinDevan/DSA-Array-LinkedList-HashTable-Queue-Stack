function replaceAlphabet(str, n) {
    const chars = str.split('');

    for (let i = 0; i < chars.length; i++) {
        const charCode = chars[i].charCodeAt(0);

        if (charCode >= 65 && charCode <= 90 || charCode >= 97 && charCode <= 122) {

            const newCharCode = charCode + n;

            if (charCode >= 65 && charCode <= 90 && newCharCode > 90 || charCode >= 97 && charCode <= 122 && newCharCode > 122) {
                newCharCode -= 26;
            }

            chars[i] = String.fromCharCode(newCharCode);
        }
    }

    return chars.join('');
}
const str = 'hello world';
const n = 2;
const result = replaceAlphabet(str, n);

console.log(result);
