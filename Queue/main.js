class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() { // O(n)
        return this.items.shift();
    }

    isEmpty() {
        return this.size() === 0;
    }

    peek() {
        if(this.isEmpty()){
            return null;
        }
        return this.items[0];
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items.toString());
    }
}

const queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.print();

queue.enqueue(30);

console.log(queue.size());
queue.print();

console.log(queue.dequeue());
console.log(queue.peek());
queue.print();