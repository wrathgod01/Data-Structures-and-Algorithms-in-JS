class CircularQueue {
    constructor(capacity) {
        this.items = new Array(capacity);
        this.front = -1;
        this.rear = -1;
        this.currentLength = 0;
        this.capacity = capacity;
    }

    isEmpty() {
        return this.currentLength === 0;
    }

    isFull() {
        return this.currentLength === this.capacity;
    }

    enqueue(element) {
        if(this.isFull()) {
            console.log("Circular Queue is Full");
            return;
        }

        this.rear = (this.rear + 1) % this.capacity;
        if(this.isEmpty()) {
            this.front = this.rear;
        }
        this.items[this.rear] = element;
        this.currentLength++;
    }

    dequeue() {
        if(this.isEmpty()) {
            console.log("Circular Queue is Empty");
            return;
        }

        const item = this.items[this.front];
        this.front = (this.front + 1) % this.capacity;
        if(this.isEmpty()) {
            this.front = this.rear = -1;
        }
        this.currentLength--;

        return item;
    }

    peek() {
        if(this.isEmpty()) {
            return null;
        }
        return this.items[this.front];
    }

    print() {
        if(this.isEmpty()) {
            console.log("Circular Queue is Empty");
            return;
        }

        let q = '';
        for(let i = this.front; i !== this.rear; i = (i + 1)%this.capacity) {
            q += `${this.items[i]} `;
        }

        q += this.items[this.rear];

        console.log(q);
    }
}

const queue = new CircularQueue(5);
console.log(queue.isEmpty());
queue.print();
console.log(queue.peek());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();

queue.enqueue(40);
queue.enqueue(50);

console.log(queue.isFull());
queue.print();

console.log(queue.peek());
queue.print();

console.log(queue.dequeue());
queue.print();

queue.enqueue(35);
queue.enqueue(45);
queue.print();

console.log(queue.dequeue());
console.log(queue.dequeue());
queue.enqueue(95);
queue.enqueue(15);

queue.print();
