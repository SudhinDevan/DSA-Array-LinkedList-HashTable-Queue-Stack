class Queue {
    constructor() {
        this.items = {}
        this.rear = 0
        this.front = 0
    }
    enqueue(val) {
        this.items[this.rear] = val
        this.rear++
    }
    dequeue() {
        if (this.isEmpty()) {
            return null
        }
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }
    peek() {
        return this.items[this.front]
    }
    isEmpty() {
        return this.rear - this.front === 0
    }
    size() {
        return this.rear - this.front
    }
    print() {
        console.log(this.items)
    }
}
const q = new Queue()
q.enqueue(1)
q.enqueue(4)
q.enqueue(3)
q.enqueue(2)
q.enqueue(1)
q.print()
console.log("You have removed", q.dequeue())
console.log("You have removed", q.dequeue())
console.log("Peek", q.peek())
console.log("size ", q.size())
q.print()