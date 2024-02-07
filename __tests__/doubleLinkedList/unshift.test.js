import doubleLinkedList from "../../scripts/doubleLinkedList.js";
import Node from "../../scripts/Node.js";

describe("doubleLinkedList: unshift", () => {
    test("it should add new Node to end of the list", () => {
        const testList = new doubleLinkedList();
        const a = new Node(1);
        const b = new Node(2);

        testList.unshift(a);

        expect(testList.head).toEqual(a);
        expect(testList.tail).toEqual(a);
        expect(testList.length).toBe(1);

        testList.unshift(b);

        expect(b.previous).toEqual(a);
        expect(a.next).toEqual(b);

        expect(testList.head).toEqual(a);
        expect(testList.tail).toEqual(b);
        expect(testList.length).toBe(2);

        expect(() => { testList.unshift('NN') }).toThrow(TypeError);
    });
});