// Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should
// support all the functions of a normal stack (push, top, pop, and empty). Implement the 
// MyStack class: ● void push(int x) Pushes element x to the top of the stack. 
// ● int pop() Removes the element on the top of the stack and returns it.
//  ● int top() Returns the element on the top of the stack. 
// ● boolean empty() Returns true if the stack is empty, false otherwise.


var MyQueue = function () {
    this.stack1 = []
    this.stack2 = []
};
MyQueue.prototype.push = function (x) {
    this.stack1.push(x)
}
MyQueue.prototype.pop = function () {
    if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
            var item = this.stack1.pop()
            this.stack2.push(item)
        }
    }
    var item = this.stack2.pop()
    return item
};
MyQueue.prototype.print = function () {
    var str = ''
    if (this.stack2.length !== 0) {
        for (var i = 0; i < this.stack2.length; i++) {
            if (this.stack2[i]) {
                str = str + " " + this.stack2[i]
            }
        }
    }
    for (var i = 0; i < this.stack1.length; i++) {
        if (this.stack1[i]) {
            str = str + " " + this.stack1[i]
        }
    }
    console.log(str)
};
MyQueue.prototype.peek = function () {
    if (this.stack2.length === 0) {
        return this.stack1[0]
    }
    return this.stack2[this.stack2.length - 1]
};
MyQueue.prototype.empty = function () {
    return this.stack1.length === 0 && this.stack2.length === 0
};
const q = new MyQueue()
q.push(1)
q.push(4)
q.push(3)
q.push(2)
q.push(1)
q.print()
console.log("You have removed", q.pop())
console.log("You have removed", q.pop())
console.log("Peek", q.peek())
q.push(10)
q.print()