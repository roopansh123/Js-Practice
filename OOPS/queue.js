class Queue {
  constructor() {
    this.arr = [];
  }

  enqueue(val) {
    this.arr.push(val);
  }

  dequeue() {
    this.arr.shift();
  }

  isEmpty() {
    return this.arr.length() == 0;
  }

  front() {
    return this.arr.length > 0 ? this.arr[0] : "Queue is Empty";
  }

  size() {
    return this.arr.length();
  }
}

let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(2);
q.enqueue(1);
const copy = [...q];
let arr = new Queue();

while (!q.isEmpty()) {
  arr.enqueue(q.front());
  q.dequeue();
}

function isPalindrome(copy) {
  console.log(copy == arr);
}

isPalindrome(copy);
