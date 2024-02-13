import doubleLinkedList from "../../scripts/doubleLinkedList.js";
import Node from "../../scripts/node.js";

describe("doubleLinkedList: indexOf", () => {
    const testList = new doubleLinkedList();
    const a = new Node(1);

    test("it returns null when called on empty list", () => {
        const emptyResult = testList.indexOf(9);

        expect(emptyResult).toEqual([]);
    });

    test("it returns empty Array when there is no Node with searched data", () => {
        testList.unshift(a);
        const result = testList.indexOf(5);

        expect(result).toEqual([]);
    });

    test("it returns Array with all indexes of Nodes which .data equals searched data, even list.length", () => {
        testList.push(new Node(1));
        testList.push(new Node(1));
        testList.push(new Node(1));
        testList.push(new Node(1));
        testList.push(new Node(1));
        testList.push(new Node(1));
        testList.push(new Node(1));
        const result = testList.indexOf(1);

        console.log(result);
        expect(result).toEqual([1, 8, 2, 7, 3, 6, 4, 5]);
    });

    test("it returns Array with all indexes of Nodes which .data equals searched data, odd list.length", () => {
        testList.unshift(new Node(1));
        const result = testList.indexOf(1);

        console.log(result);
        expect(result).toEqual([1, 9, 2, 8, 3, 7, 4, 6, 5]);
    });
});