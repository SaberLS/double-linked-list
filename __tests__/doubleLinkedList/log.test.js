import doubleLinkedList from "../../scripts/doubleLinkedList.js";
import Node from "../../scripts/Node.js";

describe("doubleLinkedList: log", () => {
    const testList = new doubleLinkedList();
    const a = new Node(1);
    const b = new Node(2);

    test("it returns empty string when list is empty", () => {
        const emptyResult = testList.log();

        expect(emptyResult).toBe('');
    });

    test("it returns string with all Nodes and indexes", () => {
        testList.unshift(a);
        testList.unshift(b);
        const result = testList.log();

        expect(result).toEqual(`1${a.log()}\t\n2${b.log()}\t\n`);
    });
});