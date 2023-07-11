class Node {
  next: Node | null = null;

  constructor(public value: unknown) {}
}

export class Queue {
  first: Node | null = null;
  last: Node | null = null;
  size: number = 0;

  enqueue(value: unknown) {
    const newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last!.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;

    const temp = this.first;

    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size--;

    return temp.value;
  }
}
