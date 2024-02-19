import doubleLinkedList from "../../../scripts/doubleLinkedList.js";
import bubbleSort from "../../../scripts/sort/bubbleSort.js";
import Node from "../../../scripts/node.js";

describe("bubbleSort", () => {
    test("it doesn't change single element list", () => {
        const testList = new doubleLinkedList();
        testList.push(new Node(1));

        const expectedResult = new doubleLinkedList;
        expectedResult.push(new Node(1));

        bubbleSort(testList);
        expect(testList).toEqual(expectedResult);
    });

    test("it sorts two element list", () => {
        const testList = new doubleLinkedList();
        testList.push(new Node(2));
        testList.push(new Node(1));

        const expectedResult = new doubleLinkedList;
        expectedResult.push(new Node(1));
        expectedResult.push(new Node(2));

        bubbleSort(testList);
        expect(testList).toEqual(expectedResult);
    });


    test("it sorts list in ascending order by data", () => {
        const testList = new doubleLinkedList();
        testList.push(new Node(5));
        testList.push(new Node(4));
        testList.push(new Node(3));
        testList.push(new Node(2));
        testList.push(new Node(1));

        const expectedResult = new doubleLinkedList;
        expectedResult.push(new Node(1));
        expectedResult.push(new Node(2));
        expectedResult.push(new Node(3));
        expectedResult.push(new Node(4));
        expectedResult.push(new Node(5));

        bubbleSort(testList);
        expect(testList).toEqual(expectedResult);
    });

    test("it doesn't change list which is already sorted", () => {
        const testList = new doubleLinkedList();
        testList.push(new Node(1));
        testList.push(new Node(2));
        testList.push(new Node(3));
        testList.push(new Node(4));
        testList.push(new Node(5));

        const expectedResult = new doubleLinkedList;
        expectedResult.push(new Node(1));
        expectedResult.push(new Node(2));
        expectedResult.push(new Node(3));
        expectedResult.push(new Node(4));
        expectedResult.push(new Node(5));

        bubbleSort(testList);
        expect(testList).toEqual(expectedResult);
    });
});