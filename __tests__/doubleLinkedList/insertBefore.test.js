import doubleLinkedList from "../../scripts/doubleLinkedList.js";
import Node from "../../scripts/node.js";

describe('doubleLinkedList: insertBefore', () => {
    test('should increase list length', () => {
        const testList = new doubleLinkedList();
        const a = new Node(1);
        const b = new Node(2);

        testList.push(b);

        testList.insertBefore(a, b);
        expect(testList.length).toBe(2);
    });

    test('should change next node .previous property to new Node', () => {
        const testList = new doubleLinkedList();
        const a = new Node(1);
        const b = new Node(2);

        testList.push(b);

        testList.insertBefore(a, b);

        console.log(testList.log());
        expect(b.previous).toEqual(a);
    })

    test('should change previous node .next property to new Node', () => {
        const testList = new doubleLinkedList();
        const a = new Node(1);
        const b = new Node(2);
        const c = new Node(3);

        testList.push(a);
        testList.push(c);

        testList.insertBefore(b, c);
        expect(a.next).toEqual(b);
    })

    test('should change list.head property to new Node if next is head', () => {
        const testList = new doubleLinkedList();
        const a = new Node(1);
        const b = new Node(2);

        testList.push(b);

        testList.insertBefore(a, b);
        expect(testList.head).toEqual(a);
    })

    test('should not change list.head property to new Node if next isnt head', () => {
        const testList = new doubleLinkedList();
        const a = new Node(1);
        const b = new Node(2);
        const c = new Node(3);

        testList.push(a)
        testList.push(c);

        testList.insertBefore(b, c);
        expect(testList.head).toEqual(a);
    })
})
