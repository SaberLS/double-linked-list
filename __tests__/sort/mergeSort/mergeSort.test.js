import doubleLinkedList from "../../../scripts/doubleLinkedList.js";
import mergeSort from "../../../scripts/sort/mergeSort.js";
import Node from "../../../scripts/node.js";

describe("mergeSort", () => {
    test("returns unchanged list when given single element list", () => {
        const testList = new doubleLinkedList();
        testList.push(new Node(1));

        const expectedResult = new doubleLinkedList;
        expectedResult.push(new Node(1));

        const testResult = mergeSort(testList);
        expect(testResult).toEqual(expectedResult);
    });

    test("it returns sorted two element list", () => {
        const testList = new doubleLinkedList();
        testList.push(new Node(2));
        testList.push(new Node(1));

        const expectedResult = new doubleLinkedList;
        expectedResult.push(new Node(1));
        expectedResult.push(new Node(2));

        const testResult = mergeSort(testList);
        expect(testResult).toEqual(expectedResult);
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

        const testResult = mergeSort(testList);
        expect(testResult).toEqual(expectedResult);
    });

});