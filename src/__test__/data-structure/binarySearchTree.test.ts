import {
  BinaryNode,
  BinarySearchTree,
} from '../../data-structures/binarySearchTree';

describe('BinarySearchTree', () => {
  describe('insert', () => {
    it('should insert a value into the tree', () => {
      const tree = new BinarySearchTree();
      tree.insert(10);
      expect(tree.root?.value).toEqual(10);
    });

    it('should insert a value to the left of the root', () => {
      const tree = new BinarySearchTree();
      tree.insert(10);
      tree.insert(5);
      expect(tree.root?.left?.value).toEqual(5);
    });

    it('should insert a value to the right of the root', () => {
      const tree = new BinarySearchTree();
      tree.insert(10);
      tree.insert(15);
      expect(tree.root?.right?.value).toEqual(15);
    });

    it('should insert properly when there are multiple values', () => {
      const tree = new BinarySearchTree();
      tree.insert(10);
      tree.insert(5);
      tree.insert(15);
      tree.insert(20);
      tree.insert(3);
      tree.insert(7);
      expect(tree.root?.right?.value).toEqual(15);
      expect(tree.root?.right?.right?.value).toEqual(20);
      expect(tree.root?.left?.left?.value).toEqual(3);
      expect(tree.root?.left?.right?.value).toEqual(7);
    });

    it('should return if value already exists', () => {
      const tree = new BinarySearchTree();
      tree.insert(10);
      expect(tree.insert(10)).toEqual(undefined);
    });
  });

  describe('find', () => {
    it('should return value if it exists', () => {
      const tree = new BinarySearchTree();
      tree.insert(10);
      tree.insert(5);
      tree.insert(15);
      tree.insert(20);
      tree.insert(3);
      tree.insert(7);

      const expected = new BinaryNode(15);
      expected.right = new BinaryNode(20);

      expect(tree.find(15)).toEqual(expected);
    });

    it('should return undefined if value does not exist', () => {
      const tree = new BinarySearchTree();
      tree.insert(10);
      tree.insert(5);
      tree.insert(15);
      tree.insert(20);
      tree.insert(3);
      tree.insert(7);
      expect(tree.find(25)).toEqual(undefined);
    });
  });
});
