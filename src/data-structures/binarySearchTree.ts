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

  contains(value: number) {
    if (this.root === null) return false;

    let current: BinaryNode | null = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }

    return false;
  }

  breathFirstSearch() {
    let node: BinaryNode | null | undefined = this.root;
    const data = [];
    const queue = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      if (node) data.push(node.value);
      if (node?.left) queue.push(node.left);
      if (node?.right) queue.push(node.right);
    }

    return data;
  }

  depthFirstPreOrder() {
    let data: number[] = [];
    let current: BinaryNode | null | undefined = this.root;

    function traverse(node: BinaryNode | null | undefined) {
      if (node) {
        data.push(node.value);
        traverse(node.left);
        traverse(node.right);
      }
    }

    traverse(current);

    return data;
  }

  depthFirstPostOrder() {
    let data: number[] = [];
    let current: BinaryNode | null | undefined = this.root;

    function traverse(node: BinaryNode | null | undefined) {
      if (node) {
        traverse(node.left);
        traverse(node.right);
        data.push(node.value);
      }
    }

    traverse(current);

    return data;
  }

  depthFirstInOrder() {
    let data: number[] = [];
    let current: BinaryNode | null | undefined = this.root;

    function traverse(node: BinaryNode | null | undefined) {
      if (node) {
        traverse(node.left);
        data.push(node.value);
        traverse(node.right);
      }
    }

    traverse(current);

    return data;
  }
}
