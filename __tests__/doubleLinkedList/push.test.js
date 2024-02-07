import doubleLinkedList from "../../scripts/doubleLinkedList.js";
import Node from "../../scripts/Node.js";

describe("doubleLinkedList: push", () => {
    const testList = new doubleLinkedList();
    const a = new Node(1);
    const b = new Node(2);

    test("it should push a Node into empty List and set it as head and tail", () => {
        testList.push(a);

        expect(testList.head).toEqual(a);
        expect(testList.tail).toEqual(a);
    });

    test("it should increase length of the list by 1", () => {
        expect(testList.length).toBe(1);
    });

    test("it should push a Node into not empty list and set its as head", () => {
        testList.push(b);

        expect(testList.head).toEqual(b);
        expect(b.next).toEqual(a);

        expect(a.previous).toEqual(b);
        expect(testList.tail).toEqual(a);
    });


    test("it should throw TypeError when given data diffrent than Node", () => {
        expect(() => { testList.push('NN') }).toThrow(TypeError);
    });
});
