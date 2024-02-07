import doubleLinkedList from "../../scripts/doubleLinkedList.js";
import Node from "../../scripts/Node.js";

describe("doubleLinkedList: findByData", () => {
    const testList = new doubleLinkedList();
    const a = new Node(1);

    test("it returns null when called on empty list", () => {
        const emptyResult = testList.findByData(9);

        expect(emptyResult).toEqual([]);
    });

    test("it returns empty Array when there is no Node with searched data", () => {
        testList.push(a);
        const result = testList.findByData(5);

        expect(result).toEqual([]);
    });

    test("it returns Array with all indexes of Nodes which .data equals searched data, even list.length", () => {
        testList.unshift(new Node(1));
        testList.unshift(new Node(1));
        testList.unshift(new Node(1));
        testList.unshift(new Node(1));
        testList.unshift(new Node(1));
        testList.unshift(new Node(1));
        testList.unshift(new Node(1));
        const result = testList.findByData(1);

        console.log(result);
        expect(result).toEqual([5, 4, 6, 3, 7, 2, 8, 1]);
    });

    test("it returns Array with all indexes of Nodes which .data equals searched data, odd list.length", () => {
        testList.unshift(new Node(1));
        const result = testList.findByData(1);

        console.log(result);
        expect(result).toEqual([5, 6, 4, 7, 3, 8, 2, 9, 1]);
    });
});