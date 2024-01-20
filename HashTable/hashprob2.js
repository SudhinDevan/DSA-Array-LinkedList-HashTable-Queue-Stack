// hash table without collision handling where hashing method is division

class HashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }
    hash(key) {
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }
    set(key, value) {
        let index = this.hash(key)
        this.table[index] = value
    }
    get(key) {
        let index = this.hash(key)
        return this.table[index]
    }
    remove(key) {
        let index = this.hash(key)
        this.table[index] = undefined
    }
    display() {
        let str = ``
        for (var i = 0; i < this.size; i++) {
            if (this.table[i]) {
                str += `${this.table[i]} `
            }
        }
        console.log(str)
    }
}
const t = new HashTable(50)
t.set("firstname", "salman")
t.set("namefirst", "cccc")
t.set("lastname", "faris")
t.set("age", 25)
t.display()
console.log("Age is : ", t.get("age"))
t.remove("lastname")
t.display()