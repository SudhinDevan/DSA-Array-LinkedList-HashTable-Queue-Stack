class Stack {
    constructor() {
        this.items = []
    }

    push(element) {
        this.items.push(element)
    }

    pop() {
        return this.items.pop()
    }

    isEmpty() {
        return this.items.length === 0
    }

    size() {
        return this.items.length
    }

    print() {
        console.log(this.items.toString())
    }

    peek() {
        return this.items[this.items.length - 1]
    }
}

let stack = new Stack()
console.log(stack.isEmpty())
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
stack.print()
console.log(stack.size())
console.log(stack.pop())
console.log(stack.peek())