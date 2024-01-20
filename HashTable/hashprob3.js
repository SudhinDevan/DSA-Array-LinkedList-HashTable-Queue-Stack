// Separate chaining collision handling using sub array

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
        const index = this.hash(key)


        const bucket = this.table[index]
        if (!bucket) {
            this.table[index] = [[key, value]]
        }
        else {
            const sameKey = bucket.find(item => item[0] === key)
            if (sameKey) {
                sameKey[1] = value
            }
            else {
                bucket.push([key, value])
            }
        }
    }
    get(key) {
        const index = this.hash(key)


        const bucket = this.table[index]
        if (bucket) {
            const sameKey = bucket.find(item => item[0] === key)
            if (sameKey) {
                return sameKey[1]
            }
            else {
                return undefined
            }
        }
    }
    remove(key) {
        const index = this.hash(key)


        const bucket = this.table[index]
        if (bucket) {
            const sameKey = bucket.find(items => items[0] === key)
            if (sameKey) {
                bucket.splice(bucket.indexOf(sameKey), 1)
            }
        }
    }
    display() {
        for (var i = 0; i < this.table.length; i++) {
            if (this.table[i] && this.table[i][0]) {
                console.log(i, this.table[i])
            }
        }
    }
}
const t = new HashTable(50)
t.set("firstname", "Sudhin")
t.set("namefirst", "Thayyil")
t.set("lastname", "Devan")
t.set("age", 25)
t.display()
console.log("Age is : ", t.get("age"))
t.remove("lastname")
t.display()