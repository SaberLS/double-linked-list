import doubleLinkedList from "../../scripts/doubleLinkedList.js";
import Node from "../../scripts/Node.js";

describe("doubleLinkedList: pop", () => {
    const testList = new doubleLinkedList();
    const a = new Node(1);
    const b = new Node(2);

    testList.push(a);
    testList.push(b);

    test("it should remove head of the list from list", () => {
        testList.pop();
        expect(testList.head).toEqual(a);
        expect(a.previous).toBe(null);
    });

    test("it should decrease length by 1", () => {
        expect(testList.length).toBe(1);
    });

    test("it should return the removed Node with null values at .next and .previous properties", () => {
        const removed = testList.pop();

        expect(removed).toEqual(a);
        expect(removed.next).toBe(null);
        expect(removed.previous).toBe(null);
    });

    test("it should set list .head .tail properties to null when given list with length 1", () => {
        expect(testList.head).toBe(null);
        expect(testList.tail).toBe(null);
    });

    test("it should return null if you try to unshift from the empty list", () => {
        const emptyPop = testList.pop();

        expect(emptyPop).toBe(null);
        expect(testList.length).toBe(0);
    });

});