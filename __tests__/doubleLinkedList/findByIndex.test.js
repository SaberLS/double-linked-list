import doubleLinkedList from "../../scripts/doubleLinkedList.js";
import Node from "../../scripts/Node.js";

describe("doubleLinkedList: findByIndex", () => {
    const testList = new doubleLinkedList();
    const a = new Node(1);
    const b = new Node(2);
    const c = new Node(3);
    const d = new Node(4);


    test("it returns null when called on empty list", () => {
        const emptyResult = testList.findByIndex();

        expect(emptyResult).toBe(null);
    });

    test("it returns null when given index is greater than list.length", () => {
        testList.push(a);
        const result = testList.findByIndex(5);

        expect(result).toBe(null);
    });

    test("it returns null when given index is smaller than 1", () => {
        testList.push(a);
        const result = testList.findByIndex(0);

        expect(result).toBe(null);
    });

    test("it returns list.head Node when given 1", () => {
        testList.push(b);
        const result = testList.findByIndex(1);

        expect(result).toEqual(testList.head);
    });

    test("it returns list.tail Node when given number equal to list.length", () => {
        const result = testList.findByIndex(testList.length);

        expect(result).toEqual(testList.tail);
    });

    test("it returns Node with given index", () => {
        testList.push(c);
        testList.push(d);
        const resultB = testList.findByIndex(3);
        const resultC = testList.findByIndex(2);

        expect(resultB).toEqual(b);
        expect(resultC).toEqual(c);
    });
});