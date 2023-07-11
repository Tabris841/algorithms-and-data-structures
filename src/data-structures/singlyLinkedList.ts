class Node {
  next: Node | null = null;

  constructor(public value: unknown) {}
}

export class SinglyLinkedList {
  head: Node | null = null;
  tail: Node | null = null;
  length = 0;

  push(value: unknown) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      if (this.tail) this.tail.next = node;
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

    while (current?.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    if (this.tail) this.tail.next = null;
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
    if (currentHead) this.head = currentHead.next;
    this.length--;

    if (this.isEmpty()) {
      this.tail = null;
    }

    return currentHead;
  }

  unshift(value: unknown) {
    const node = new Node(value);

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

  get(index: number) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let counter = 0;
    let current = this.head;

    while (counter < index) {
      if (current) current = current.next;
      counter++;
    }

    return current;
  }

  set(index: number, value: unknown) {
    const foundNode = this.get(index);

    if (foundNode) {
      foundNode.value = value;
      return true;
    }

    return false;
  }

  insert(index: number, value: unknown) {
    if (index < 0 || index >= this.length) return false;
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);

    const prev = this.get(index - 1);
    const newNode = new Node(value);

    newNode.next = prev?.next || null;
    if (prev) prev.next = newNode;
    this.length++;

    return true;
  }

  remove(index: number) {
    if (index < 0 || index >= this.length) return;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const prev = this.get(index - 1);
    const removed = this.get(index);

    if (prev && removed) prev.next = removed.next;
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
      if (node) next = node.next;
      if (node) node.next = prev;
      prev = node;
      if (next) node = next;
    }

    return this;
  }

  isEmpty() {
    return this.length === 0;
  }
}

// const list = new SinglyLinkedList();

// list.unshift(80);
// list.push(81);
// list.push(82);
// list.push(83);
// console.log(list);

// console.log(list.shift());
// console.log(list.get(1));
// console.log(list.get(2));
// console.log(list.insert(2, 90));
// console.log(list.get(1));
// console.log(list.get(2));
// console.log(list.pop());

// list.reverse();

// console.log(list);
