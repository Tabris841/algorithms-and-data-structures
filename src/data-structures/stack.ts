class Node {
  next: Node | null = null;

  constructor(public value: unknown) {}
}

export class Stack {
  first: Node | null = null;
  last: Node | null = null;
  size: number = 0;

  push(value: unknown): number {
    const newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }

    return ++this.size;
  }

  pop(): unknown {
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
