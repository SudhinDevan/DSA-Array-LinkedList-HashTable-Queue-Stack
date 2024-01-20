// .Given three arrays with some common element, print such that all their elements occur exactly once

class Hashtable {
    constructor(size) {
        this.items = new Array(size)
        this.size = size
    }
    hash(key) {
        return key % this.size
    }
    print() {
        let list = ``
        for (let i = 0; i < this.size; i++) {
            if (this.items[i]) {
                list += `${this.items[i]} `
            }
        }
        console.log(list)
    }
}
let h = new Hashtable(53)
const array1 = [1, 5, 10, 20, 40, 80]
const array2 = [6, 7, 20, 80, 100]
const array3 = [3, 4, 15, 20, 30, 70, 80, 120]
const array4 = array1.concat(array2, array3)
let n = array4.length
for (let i = 0; i < n; i++) {
    h.items[h.hash(array4[i])] = array4[i]
}
h.print()
