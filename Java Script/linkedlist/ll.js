class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LL {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addAtHead(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  addAtTail(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let curr = this.head;
      while (curr.next != null) {
        curr = curr.next;
      }
      curr.next = newNode;
    }
    this.size++;
  }

  addAtIndex(data, idx) {
    const newNode = Node(data);

    let prev = this.head;
    for (let i = 0; i < idx - 1; i++) {
      prev = prev.next;
    }

    newNode.next = prev.next;
    prev.next = newNode;
  }
  addAtIndex(index, data) {
    if (index < 0 || index > this.size) {
      console.log("Invalid Index");
      return;
    }

    if (index === 0) {
      this.addAtHead(data);
      return;
    }

    const newNode = new Node(data);
    let prev = this.head;

    for (let i = 0; i < index - 1; i++) {
      prev = prev.next;
    }

    newNode.next = prev.next;
    prev.next = newNode;

    this.size++;
  }

  deleteAtIndex(index) {
    if (index < 0 || index >= this.size) {
      console.log("Invalid Index");
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let prev = this.head;

    for (let i = 0; i < index - 1; i++) {
      prev = prev.next;
    }

    prev.next = prev.next.next;
    this.size--;
  }

  print() {
    let curr = this.head;
    let result = "";

    while (curr !== null) {
      result += curr.data + " -> ";
      curr = curr.next;
    }

    console.log(result + "null");
  }
}

const list = new LL();

list.addAtHead(20);
list.addAtHead(10);
list.addAtTail(30);
list.addAtTail(40);

list.print();
// 10 -> 20 -> 30 -> 40 -> null
    
list.addAtIndex(2, 25);
list.print();
// 10 -> 20 -> 25 -> 30 -> 40 -> null

list.deleteAtIndex(3);
list.print();
// 10 -> 20 -> 25 -> 40 -> null
