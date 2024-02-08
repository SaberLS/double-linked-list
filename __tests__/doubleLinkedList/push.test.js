import doubleLinkedList from "../../scripts/doubleLinkedList.js";
import Node from "../../scripts/Node.js";

describe("doubleLinkedList: push", () => {
    const testList = new doubleLinkedList();
    const a = new Node(1);
    const b = new Node(2);

    test("it should add new Node to empty list and set it as head and tail of the list", () => {
        testList.push(a);

        expect(testList.head).toEqual(a);
        expect(testList.tail).toEqual(a);
    });

    test("it should increment value of list.length", () => {
        const length = testList.length;
        testList.push(b);

        expect(testList.length).toEqual(length + 1);
    });

    test("it should add new Node to not empty list and set it as tail", () => {
        expect(testList.tail).toEqual(b);
    });

    test("it should change value of .next on previous Node", () => {
        expect(b.previous).toEqual(a);
        expect(a.next).toEqual(b);
    });

    test("it should throw TypeError if given data diffrent than Node", () => {
        expect(() => { testList.push('NN') }).toThrow(TypeError);
    });
});