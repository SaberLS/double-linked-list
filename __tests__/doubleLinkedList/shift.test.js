import doubleLinkedList from "../../scripts/doubleLinkedList.js";
import Node from "../../scripts/Node.js";

describe("doubleLinkedList: shift", () => {
    const testList = new doubleLinkedList();
    const a = new Node(1);
    const b = new Node(2);

    test("it should return a removed Node with null values at .next and .previous properties", () => {
        testList.unshift(a);
        testList.unshift(b);

        const removed = testList.shift();

        expect(removed).toEqual(b);
        expect(removed.next).toBe(null);
        expect(removed.previous).toBe(null);
    })

    test("it should remove tail of the list", () => {
        testList.unshift(b);
        testList.shift();

        expect(a.next).toBe(null);
        expect(testList.tail).toEqual(a);
    });

    test("it should decrease value of the list.length by 1", () => {
        testList.unshift(b);
        const lengthBeforeShift = testList.length;

        testList.shift()
        const lengthAfterShift = testList.length;
        expect(lengthAfterShift).toBe(lengthBeforeShift - 1);
    })

    test("it should remove element from length 1 list", () => {
        testList.shift();

        expect(testList.head).toBe(null);
        expect(testList.tail).toBe(null);
    });

    test("it should return null if you try to unshift from the empty list", () => {
        const emptyShift = testList.shift();
        expect(emptyShift).toBe(null);
        expect(testList.length).toBe(0);
    });
});