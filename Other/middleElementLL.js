class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.size = 0
        this.head = null
    }



    middle() {
        let curr = this.head
        let count = 0
        while (curr) {
            count++
            curr = curr.next
        }

        let mid = Math.floor(count / 2)
        curr = this.head
        for (i = 0; i < mid; i++) {
            curr = curr.next
        }
        return curr
    }
}