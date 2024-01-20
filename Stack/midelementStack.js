class Stack {
    constructor() {
        this.stack = []
    }
    push(val) {
        this.stack.push(val)
    }
    pop() {
        if (this.isEmpty()) {
            return false
        }
        else {
            let item = this.stack.pop()
            return item
        }
    }
    peek() {
        if (this.isEmpty()) {
            return -1
        }
        return this.stack[this.stack.length - 1]
    }
    isEmpty() {
        return this.stack.length === 0
    }
    size() {
        return this.stack.length
    }
    print() {
        console.log(this.stack)
    }
}
const s1 = new Stack
s1.push(2)
s1.push(6)
s1.push(1)
s1.push(5)
s1.push(3)
s1.push(8)
const s2 = new Stack()
let n = Math.floor(s1.size() / 2)
while (s1.size() >= n) {
    let temp = s1.pop()
    s2.push(temp)
}
console.log("Mid element", s2.pop())
while (!s2.isEmpty()) {
    let temp = s2.pop()
    s1.push(temp)
}
s1.print()