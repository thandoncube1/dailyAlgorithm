class MyQueue {
    constructor() {
        this.pushStack = [];
        this.popStack = [];
    }

    push(value) {
        this.pushStack.push(value);
    }

    pop() {
        if (!this.popStack.length) {
            while (this.pushStack.length) {
                this.popStack.push(this.pushStack.pop())
            }
        }

        return this.popStack.pop();
    }

    peek() {
        if (!this.popStack.length) {
            while (this.pushStack.length) {
                this.popStack.push(this.pushStack.pop());
            }
        }

        return this.popStack[this.popStack.length - 1];
    }

    empty() {
        return !this.pushStack.length && !this.popStack.length  && !this.pushStack  

    } 
}

const myQueue = new MyQueue();
myQueue.push('Thando');
myQueue.push('William');
myQueue.push('James');
myQueue.push('Pavel');
console.log(myQueue.peek());