class ListNode {
  prev: ListNode | null = null;
  next: ListNode | null = null;

  constructor(public val: unknown) {}
}

export class DoublyLinkedList {
  head: ListNode | null = null;
  tail: ListNode | null = null;
  length = 0;

  push(val: unknown) {
    const newNode = new ListNode(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.tail) this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  pop() {
    if (this.isEmpty()) {
      return;
    }

    const poppedTail = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      if (poppedTail) this.tail = poppedTail.prev;
      if (this.tail) this.tail.next = null;
      if (poppedTail) poppedTail.prev = null;
    }

    this.length--;
    return poppedTail;
  }

  shift() {
    if (this.isEmpty()) {
      return;
    }

    const oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      if (oldHead) this.head = oldHead.next;
      if (this.head) this.head.prev = null;
      if (oldHead) oldHead.next = null;
    }

    this.length--;

    return oldHead;
  }

  unshift(val: unknown) {
    const node = new ListNode(val);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      if (this.head) this.head.prev = node;
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

    if (index <= this.length / 2) {
      let counter = 0;
      let current = this.head;

      while (counter < index) {
        if (current) current = current.next;
        counter++;
      }

      return current;
    } else {
      let counter = this.length - 1;
      let current = this.tail;

      while (counter > index) {
        if (current) current = current.prev;
        counter--;
      }

      return current;
    }
  }

  set(index: number, val: unknown) {
    const foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = val;
      return true;
    }

    return false;
  }

  insert(index: number, val: unknown) {
    if (index < 0 || index >= this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    const newNode = new ListNode(val);
    const beforeNode = this.get(index - 1);
    if (beforeNode) {
      const afterNode = beforeNode.next;

      beforeNode.next = newNode;
      newNode.prev = beforeNode;
      newNode.next = afterNode;
      if (afterNode) afterNode.prev = newNode;
    }

    this.length++;

    return true;
  }

  remove(index: number) {
    if (index < 0 || index >= this.length) return;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const removedNode = this.get(index);

    if (removedNode) {
      if (removedNode.prev) removedNode.prev.next = removedNode.next;
      if (removedNode.next) removedNode.next.prev = removedNode.prev;
      removedNode.next = null;
      removedNode.prev = null;
    }

    this.length--;

    return removedNode;
  }

  reverse() {
    if (this.length <= 1) {
      return this;
    }

    let current = this.head;
    this.head = this.tail;
    this.tail = current;

    while (current) {
      const next = current.next;
      current.next = current.prev;
      current.prev = next;
      current = next;
    }

    return this;
  }

  isEmpty() {
    return this.length === 0;
  }
}

const linkedList = new DoublyLinkedList();

linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
linkedList.pop();

console.log(linkedList);
