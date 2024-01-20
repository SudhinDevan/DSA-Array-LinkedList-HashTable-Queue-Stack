class QueueNode {
    constructor(val) {
        this.value = val
        this.next = null
    }
}
class Queue {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }
    isEmpty() {
        return this.size === 0
    }
    size() {
        return this.size
    }
    peek() {
        return this.head.value
    }
    enqueue(val) {
        const node = new QueueNode(val)
        if (this.isEmpty()) {
            this.head = node
        }
        else {
            this.tail.next = node
        }
        this.tail = node
        this.size++
    }
    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty")
        }
        else {
            let item = this.head
            this.head = this.head.next
            this.size--
            return item.value
        }
    }
    print() {
        let list = ``
        let curr = this.head
        while (curr) {
            list += `${curr.value} `
            curr = curr.next
        }
        console.log(list)
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
q.print()