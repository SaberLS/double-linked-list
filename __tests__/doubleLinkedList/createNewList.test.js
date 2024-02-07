import doubleLinkedList from "../../scripts/doubleLinkedList.js";

describe("create new doubleLinkedList", () => {
    test("it should create a new empty list", () => {
        const testList = new doubleLinkedList();

        expect(testList instanceof doubleLinkedList).toBe(true);
        expect(testList.head).toBe(null);
        expect(testList.tail).toBe(null);
        expect(testList.length).toBe(0);
    });
})