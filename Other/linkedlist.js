class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty() {
        return this.size == 0
    }

    getSize() {
        return this.size
    }

    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return
        }
        if (index === 0) {
            this.prepend(value)
        } else {
            let node = new Node(value)
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    linkedlistreversal() {
        let curr = this.head
        let prev = null
        while (prev) {
            let next = curr.next
            curr.next = prev
            prev.next = curr
            curr = next
        }
        return prev = head
    }

    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            return null
        }
        let removedNode
        if (index === 0) {
            removedNode = this.head
            this.head = this.head.next
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next
        }
        this.size--
        return removedNode.value
    }

    removeValue(value) {
        if (this.isEmpty()) {
            return null
        }
        if (this.head.value === value) {
            this.head = this.head.next
            this.size--
            return value
        } else {
            let prev = this.head
            while (prev.next && prev.next.value !== value) {
                prev = prev.next
            }
            if (prev.next) {
                const removedNode = prev.next
                prev.next = removedNode.next
                this.size--
                return value
            }
            return null
        }
    }

    search(value) {
        if (this.isEmpty()) {
            return -1
        }
        let i = 0
        let curr = this.head
        while (curr) {
            if (curr.value === value) {
                return i
            }
            curr = curr.next
            i++
        }
        return -1
    }

    reverse() {
        let prev = null
        let curr = this.head
        while (curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    middle() {
        let curr = this.head
        let count = 0
        let value = ''
        while (curr) {
            count++
            curr = curr.next
        }
        let mid = Math.floor(count / 2)
        curr = this.head
        for (let i = 0; i < mid; i++) {
            curr = curr.next
        }
        return value += `${curr.value}`
    }

    middlefourelem() {
        let curr = this.head
        let count = 0
        let prev = this.head
        while (curr) {
            count++
            curr = curr.next
        }
        let middle = Math.floor((count - 4) / 2)
        curr = this.head
        for (let i = 1; i < middle; i++) {
            curr = curr.next
        }
        for (let j = 1; j < middle + 4; j++) {
            prev = prev.next
        }
        this.tail.next = curr.next
        curr.next = prev.next
        prev.next = null
        this.print()
    }


    arraytolinkedlist(arr) {
        for (let i = 0; i < arr.length; i++) {
            let node = new Node(arr[i])
            if (this.isEmpty()) {
                this.head = node
                this.tail = node
            } else {
                this.tail.next = node
                this.tail = node
            }
            this.size++
        }
        this.print()
    }

    xdata(value, score) {
        let node = new Node(score)
        let curr = this.head
        let point = this.head
        if (this.isEmpty()) {
            return -1
        } else {
            while (curr) {
                if (curr.value === value) {
                    point = curr
                }
                curr = curr.next
            }
        }
        node.next = point.next
        point.next = node

        this.print()
    }

    duplicateRemove() {
        let curr = this.head
        while (curr.next !== null) {
            if (curr.value === curr.next.value) {
                curr.next = curr.next.next
            } else {
                curr = curr.next
            }
        }
        this.print()
    }


    print() {
        if (this.isEmpty()) {
            console.log("The list is empty")
        } else {
            let curr = this.head
            let listValues = ''
            while (curr) {
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues)
        }
    }
}


const list = new LinkedList()
console.log("Is the list empty: ", list.isEmpty())
console.log("The size of the list: ", list.getSize())
list.print()
list.append(1)
list.append(2)
list.append(3)
list.append(3)
list.append(4)
list.append(5)
list.append(6)
list.append(6)
list.append(7)
list.append(7)
list.append(8)
list.append(9)
list.append(10)
list.print()
// list.arraytolinkedlist([1, 2, 3, 4, 5, 6, 7])
// list.xdata()
list.xdata(5, 3)
list.duplicateRemove()
