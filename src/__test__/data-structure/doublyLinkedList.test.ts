import { DoublyLinkedList } from '../../data-structures/doublyLinkedList';

describe('DoublyLinkedList', () => {
  describe('push', () => {
    it('should set head and tail to the new node when the list is empty', () => {
      const list = new DoublyLinkedList();

      list.push(1);

      expect(list.head?.val).toBe(1);
      expect(list.tail?.val).toBe(1);
      expect(list.length).toBe(1);
    });
    it('should push to the end of the list', () => {
      const list = new DoublyLinkedList();

      list.push(1);
      list.push(2);
      list.push(3);

      expect(list.length).toBe(3);
      expect(list.tail?.val).toBe(3);
      expect(list.tail?.prev?.val).toBe(2);
    });
  });

  describe('pop', () => {
    it('should return undefined when the list is empty', () => {
      const list = new DoublyLinkedList();

      expect(list.pop()).toBeUndefined();
    });
    it('should return the last element of the list', () => {
      const list = new DoublyLinkedList();

      list.push(1);
      list.push(2);
      list.push(3);

      expect(list.pop()?.val).toBe(3);
      expect(list.length).toBe(2);
    });
  });

  describe('shift', () => {
    it('should return undefined when the list is empty', () => {
      const list = new DoublyLinkedList();

      expect(list.shift()).toBeUndefined();
    });
    it('should return the first element of the list', () => {
      const list = new DoublyLinkedList();

      list.push(1);
      list.push(2);
      list.push(3);

      expect(list.shift()?.val).toBe(1);
      expect(list.length).toBe(2);
    });
  });

  describe('unshift', () => {
    it('should set head and tail to the new node when the list is empty', () => {
      const list = new DoublyLinkedList();

      list.unshift(1);

      expect(list.head?.val).toBe(1);
      expect(list.tail?.val).toBe(1);
      expect(list.length).toBe(1);
    });

    it('should unshift to the beginning of the list', () => {
      const list = new DoublyLinkedList();

      list.unshift(1);
      list.unshift(2);
      list.unshift(3);

      expect(list.length).toBe(3);
      expect(list.head?.val).toBe(3);
      expect(list.tail?.val).toBe(1);
    });
  });

  describe('get', () => {
    it('should return null when the list is empty', () => {
      const list = new DoublyLinkedList();

      expect(list.get(0)).toBeNull();
    });
    it('should return the element at the index', () => {
      const list = new DoublyLinkedList();

      list.push(1);
      list.push(2);
      list.push(3);

      expect(list.get(0)?.val).toBe(1);
      expect(list.get(1)?.val).toBe(2);
      expect(list.get(2)?.val).toBe(3);
    });
  });

  describe('set', () => {
    it('should return false when the list is empty', () => {
      const list = new DoublyLinkedList();

      expect(list.set(0, 1)).toBeFalsy();
    });
    it('should return true and set the element at the index', () => {
      const list = new DoublyLinkedList();

      list.push(1);
      list.push(2);

      expect(list.set(0, 3)).toBeTruthy();
    });
  });

  describe('insert', () => {
    it('should return false when the list is empty', () => {
      const list = new DoublyLinkedList();

      expect(list.insert(0, 1)).toBeFalsy();
    });
    it('should return true and insert the element at the index', () => {
      const list = new DoublyLinkedList();

      list.push(1);
      list.push(2);

      expect(list.insert(1, 3)).toBeTruthy();
    });
  });

  describe('remove', () => {
    it('should return false when the list is empty', () => {
      const list = new DoublyLinkedList();

      expect(list.remove(0)).toBeFalsy();
    });
    it('should return true and remove the element at the index', () => {
      const list = new DoublyLinkedList();

      list.push(1);
      list.push(2);

      expect(list.remove(1)).toBeTruthy();
    });
  });

  describe('reverse', () => {
    it('should reverse the list', () => {
      const list = new DoublyLinkedList();

      list.push(1);
      list.push(2);
      list.push(3);

      list.reverse();

      expect(list.head?.val).toBe(3);
      expect(list.tail?.val).toBe(1);
    });
  });
});
