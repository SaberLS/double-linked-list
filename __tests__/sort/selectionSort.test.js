import doubleLinkedList from "../../scripts/doubleLinkedList.js";
import selectionSort from "../../scripts/sort/selectionSort.js";
import Node from "../../scripts/node.js";

describe("selectionSort", () => {
    test("it doesn't change single element list", () => {
        const testList = new doubleLinkedList();
        testList.push(new Node(1));

        const expectedResult = new doubleLinkedList;
        expectedResult.push(new Node(1));

        selectionSort(testList);
        expect(testList).toEqual(expectedResult);
    });

    test("it sorts two element list", () => {
        const testList = new doubleLinkedList();
        testList.push(new Node(2));
        testList.push(new Node(1));

        const expectedResult = new doubleLinkedList;
        expectedResult.push(new Node(1));
        expectedResult.push(new Node(2));

        selectionSort(testList);
        expect(testList).toEqual(expectedResult);
    });


    test("it sorts list in ascending order by data", () => {
        const testList = new doubleLinkedList();

        for (let i = 1; i < 101; i++) {
            testList.unshift(new Node(i));
        }

        const expectedResult = new doubleLinkedList;
        for (let i = 1; i < 101; i++) {
            expectedResult.push(new Node(i));
        }

        selectionSort(testList);
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

        selectionSort(testList);
        expect(testList).toEqual(expectedResult);
    });
});