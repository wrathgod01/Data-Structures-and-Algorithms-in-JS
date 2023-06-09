class Queue {
    constructor() {
        this.items = {};
        this.rear = 0;
        this.front = 0;
    }

    enqueue(element) {
        if(this.isEmpty()){
            this.front = this.rear = 0;
        }
        this.items[this.rear++] = element;
    }

    dequeue() { // O(1)
        const item = this.items[this.front];
        delete this.items[this.front++];
        return item;
    }

    isEmpty() {
        return this.rear === this.front;
    }

    size() {
        return this.rear - this.front;
    }

    peek() {
        if(this.isEmpty()){
            return null;
        }
        return this.items[this.front];
    }

    print() {
        console.log(this.items);
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

console.log(queue.dequeue());
console.log(queue.dequeue());
queue.enqueue(45);
queue.print();
