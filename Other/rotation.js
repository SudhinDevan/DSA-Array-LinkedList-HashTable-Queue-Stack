class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}
class LinkedList {
    constructor(element) {
        this.head = null
        this.tail = null
        this.size = 0
    }
    append(element) {
        var newNode = new Node(element)
        if (this.head == null) {
            this.head = newNode
        }
        else {
            this.tail.next = newNode
        }
        this.tail = newNode
        this.size++
    }
    displayList() {
        let curr = this.head
        while (curr) {
            console.log(curr.element);
            curr = curr.next
        }
    }
    rotation(startIndex, num) {
        var curr = this.head
        let i = 0
        let prev, start, end
        while (i < startIndex) {
            prev = curr
            curr = curr.next
            i++
        }
        i = 0
        start = prev
        start.next = null
        let arr = []
        while (i < num) {
            arr[i] = curr.element
            curr = curr.next
            i++
        }
        end = curr
        start.next = end
        for (i = 0; i < arr.length; i++) {
            this.append(arr[i])
        }
    }
}

var ll = new LinkedList()
const array = [10, 20, 30, 40, 50, 60, 70, 80, 90]
let i = 0;
while (i < array.length) {
    ll.append(array[i])
    i++
}
ll.displayList()
ll.rotation(3, 3)
console.log();
ll.displayList()