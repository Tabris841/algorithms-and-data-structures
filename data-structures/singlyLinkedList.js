class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;

    return this;
  }

  pop() {
    if (this.isEmpty()) {
      return;
    }

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.isEmpty()) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (this.isEmpty()) {
      return;
    }

    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    if (this.isEmpty()) {
      this.tail = null;
    }

    return currentHead;
  }

  unshift(val) {
    const node = new Node(val);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let counter = 0;
    let current = this.head;

    while (counter < index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  set(index, val) {
    const foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = val;
      return true;
    }

    return false;
  }

  insert(index, val) {
    if (index < 0 || index >= this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    const prev = this.get(index - 1);
    const newNode = new Node(val);

    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const prev = this.get(index - 1);
    const removed = this.get(index);

    prev.next = removed.next;
    this.length--;

    return removed;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }

  isEmpty() {
    return this.length === 0;
  }
}

const list = new SinglyLinkedList();

list.unshift(80);
list.push(81);
list.push(82);
list.push(83);
console.log(list);

// console.log(list.shift());
// console.log(list.get(1));
// console.log(list.get(2));
// console.log(list.insert(2, 90));
// console.log(list.get(1));
// console.log(list.get(2));
// console.log(list.pop());

list.reverse();

console.log(list);
