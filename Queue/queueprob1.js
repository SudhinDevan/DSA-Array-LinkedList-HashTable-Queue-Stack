// Implement the MyCircularQueue class: 
// ● MyCircularQueue(k) Initializes the object with the size of the queue to be k.
// ● int Front() Gets the front item from the queue. If the queue is empty, return -1. 
// ● int Rear() Gets the last item from the queue. If the queue is empty, return -1. 
// ● boolean enQueue(int value) Inserts an element into the circular queue. Return true if the operation is successful. 
// ● boolean deQueue() Deletes an element from the circular queue. Return true if the operation is successful. 
// ● boolean isEmpty() Checks whether the circular queue is empty or not. 
// ● boolean isFull() Checks whether the circular queue is full or not. class Circularqueue{


class Circularqueue {
    constructor(cap) {
        this.items = new Array(cap)
        this.cap = cap
        this.size = 0
        this.rear = -1
        this.front = -1
    }
    isFull() {
        return this.size === this.cap
    }
    isEmpty() {
        return this.size === 0
    }
    enqueue(val) {
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.cap
            this.items[this.rear] = val
            this.size += 1
            if (this.front === -1) {
                this.front = this.rear
            }
        }
    }
    dequeue() {
        if (this.isEmpty()) {
            return null
        }
        const item = this.items[this.front]
        this.items[this.front] = null
        this.front = (this.front + 1) % this.cap
        this.size -= 1
        if (this.isEmpty()) {
            this.front = -1
            this.rear = -1
        }
        return item
    }
    peek() {
        if (!this.isEmpty()) {
            return this.items[this.front]
        }
        return null
    }
    print() {
        if (this.isEmpty()) {
            console.log("Queue is Empty")
        }
        else {
            let str = " "
            let i
            for (i = this.front; i !== this.rear; i = (i + 1) % this.cap) {
                str += this.items[i] + " "
            }
            str += this.items[i]
            console.log(str)
        }
    }
}
const q = new Circularqueue(5)
console.log(q.isEmpty())
q.enqueue(1)
q.enqueue(4)
q.enqueue(3)
q.enqueue(2)
q.enqueue(1)
console.log(q.isEmpty())
console.log(q.peek())
q.print()
console.log("You have removed", q.dequeue())
console.log("You have removed", q.dequeue())
console.log("Peek", q.peek())
q.print()