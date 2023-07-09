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
});
