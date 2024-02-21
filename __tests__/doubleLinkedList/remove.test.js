import doubleLinkedList from "../../scripts/doubleLinkedList.js";
import Node from "../../scripts/node.js";

describe('doubleLinkedList: remove', () => {
    const testList = new doubleLinkedList();
    const a = new Node(1);
    const b = new Node(2);
    const c = new Node(3);

    test('should return node when given node which is not part of the list', () => {
        const result = testList.remove(a);

        expect(result).toEqual(a);
    });

    test('should return number when node with given index which is not part of the list', () => {
        const result = testList.remove(1);

        expect(result).toEqual(1);
    });

    test('should return removed node', () => {
        testList.push(a)
        const result = testList.remove(a);

        expect(result).toEqual(a);
    });

    test('should return removed node when given a number', () => {
        testList.push(a)
        const result = testList.remove(1);

        console.log(result);
        expect(result).toEqual(a);
    });

    test('should change head of the list if given node is head', () => {
        testList.push(a)
        testList.push(b);

        testList.remove(1);
        expect(testList.head).toEqual(b);
    });

    test('should change tail of the list if given node is tail', () => {
        testList.push(a);
        testList.push(c);

        testList.remove(3);
        expect(testList.tail).toEqual(a);
    });

    test('should change .next, .previous of deleted node to null', () => {
        testList.push(c);

        testList.remove(2);
        expect(a.previous).toEqual(null);
        expect(a.next).toEqual(null);
    });

    test('should change properties .next, .previous of deleted node neighbours', () => {
        testList.push(a);

        testList.remove(2);
        expect(a.previous).toEqual(b);
        expect(b.next).toEqual(a);
    });

})