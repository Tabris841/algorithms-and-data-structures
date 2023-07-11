export class BinaryNode {
  left: BinaryNode | null = null;
  right: BinaryNode | null = null;

  constructor(public value: number) {}
}

export class BinarySearchTree {
  root: BinaryNode | null = null;

  insert(value: number) {
    const newNode = new BinaryNode(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;

    while (true) {
      if (value === currentNode.value) return undefined;
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  find(value: number) {
    if (this.root === null) return false;

    let currentNode: BinaryNode | null = this.root;
    let found = false;

    while (currentNode && !found) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        found = true;
      }
    }

    if (!found) return undefined;

    return currentNode;
  }
}
