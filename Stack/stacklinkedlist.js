class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }


    removeFromFront() {
        if (this.isEmpty()) {
            return null;
        }
        const value = this.head.value;
        this.head = this.head.next;
        this.size--;
        return value;
    }


    print() {
        if (this.isEmpty()) {
            console.log("List is empty");
        } else {
            let curr = this.head;
            let list = "";
            while (curr) {
                list += `${curr.value}->`;
                curr = curr.next;
            }
            console.log(list);
        }
    }
}


class LinkedListStack {
    constructor() {
        this.list = new LinkedList();
    }

    push(value) {
        this.list.prepend(value);
    }

    pop() {
        return this.list.removeFromFront();
    }

    peek() {
        return this.list.head.value;
    }

    isEmpty() {
        return this.list.isEmpty();
    }

    getSize() {
        return this.list.getSize();
    }

    print() {
        return this.list.print();
    }
}

const stack = new LinkedListStack();
console.log(stack.isEmpty());
stack.push(20);
stack.push(10);
stack.push(30);
console.log(stack.getSize());
stack.print();
console.log(stack.pop());
stack.print();
console.log(stack.peek());