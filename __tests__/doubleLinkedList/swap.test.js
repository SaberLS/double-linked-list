import doubleLinkedList from "../../scripts/doubleLinkedList";
import Node from "../../scripts/node";

describe("doubleLinkedList: swap", () => {
    test("should throw Error when given node is not a part of the List", () => {
        const testList = new doubleLinkedList();
        const a = new Node(1);
        const b = new Node(2);

        expect(() => { testList.swap(a, b) }).toThrow(Error);
        expect(() => { testList.swap(1, 2) }).toThrow(Error);
    });

    test("should swap places of given nodes", () => {
        const testList = new doubleLinkedList();
        const a = new Node(1);
        const b = new Node(2);

        testList.push(a);
        testList.push(b);
        testList.swap(a, b);

        const expectedResult = new doubleLinkedList();
        expectedResult.push(new Node(2));
        expectedResult.push(new Node(1));

        expect(testList).toEqual(expectedResult);
    });

    test("should swap places of given nodes which are next to each other", () => {
        const testList = new doubleLinkedList();
        const a = new Node(3);
        const b = new Node(4);

        testList.push(new Node(1));
        testList.push(new Node(2));
        testList.push(a);
        testList.push(b);
        testList.push(new Node(5));
        testList.push(new Node(6));

        testList.swap(a, b);

        const expectedResult = new doubleLinkedList();

        expectedResult.push(new Node(1));
        expectedResult.push(new Node(2));
        expectedResult.push(new Node(4));
        expectedResult.push(new Node(3));
        expectedResult.push(new Node(5));
        expectedResult.push(new Node(6));

        expect(testList).toEqual(expectedResult);
    });

    test("should swap places of given nodes which are separeted by other nodes", () => {
        const testList = new doubleLinkedList();

        const b = new Node(2);
        const e = new Node(5);

        testList.push(new Node(1));
        testList.push(b);
        testList.push(new Node(3));
        testList.push(new Node(4));
        testList.push(e);
        testList.push(new Node(6));

        testList.swap(b, e);

        const expectedResult = new doubleLinkedList();

        expectedResult.push(new Node(1));
        expectedResult.push(new Node(5));
        expectedResult.push(new Node(3));
        expectedResult.push(new Node(4));
        expectedResult.push(new Node(2));
        expectedResult.push(new Node(6));

        expect(testList).toEqual(expectedResult);
    });

    test("should change head of list", () => {
        const testList = new doubleLinkedList();

        const b = new Node(2);
        const e = new Node(5);

        testList.push(b);
        testList.push(new Node(2));
        testList.push(new Node(3));
        testList.push(new Node(4));
        testList.push(e);
        testList.push(new Node(6));

        testList.swap(b, e);

        expect(testList.head).toEqual(e);
    })

    test("should change tail of list", () => {
        const testList = new doubleLinkedList();

        const b = new Node(2);
        const e = new Node(6);

        testList.push(new Node(1));
        testList.push(b);
        testList.push(new Node(3));
        testList.push(new Node(4));
        testList.push(new Node(5));
        testList.push(e);

        testList.swap(b, e);

        expect(testList.tail).toEqual(b);
    })
})