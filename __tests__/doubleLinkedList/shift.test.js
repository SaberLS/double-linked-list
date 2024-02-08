import doubleLinkedList from "../../scripts/doubleLinkedList.js";
import Node from "../../scripts/Node.js";

describe("doubleLinkedList: shift", () => {
    const testList = new doubleLinkedList();
    const a = new Node(1);
    const b = new Node(2);

    testList.unshift(a);
    testList.unshift(b);

    test("it should remove head of the list from list", () => {
        testList.shift();
        expect(testList.head).toEqual(a);
        expect(a.previous).toBe(null);
    });

    test("it should decrease length by 1", () => {
        expect(testList.length).toBe(1);
    });

    test("it should return the removed Node with null values at .next and .previous properties", () => {
        const removed = testList.shift();

        expect(removed).toEqual(a);
        expect(removed.next).toBe(null);
        expect(removed.previous).toBe(null);
    });

    test("it should set list .head .tail properties to null when given list with length 1", () => {
        expect(testList.head).toBe(null);
        expect(testList.tail).toBe(null);
    });

    test("it should return null if you try to shift from the empty list", () => {
        const emptyPop = testList.shift();

        expect(emptyPop).toBe(null);
        expect(testList.length).toBe(0);
    });

});