import doubleLinkedList from "../../scripts/doubleLinkedList.js";
import BubbleSort from "../../scripts/bubbleSort.js";
import Node from "../../scripts/Node.js";

describe("BubbleSort", () => {
    const testList = new doubleLinkedList();

    test("it returns doubleLinkedList sorted in ascending order by data", () => {
        testList.push(new Node(3));
        testList.push(new Node(2));
        testList.push(new Node(1));

        const expectedResult = new doubleLinkedList;

        expectedResult.push(new Node(1));
        expectedResult.push(new Node(2));
        expectedResult.push(new Node(3));

        BubbleSort(testList);
        expect(expectedResult).toEqual(expectedResult);
    });
});