import Node from "../../scripts/Node.js";

describe("Node: new Node", () => {
    test("creates empty Node", () => {
        const testNode = new Node();

        expect(testNode.data).toBe(null);
        expect(testNode.next).toBe(null);
        expect(testNode.previous).toBe(null);
    });

    test("creates Node with desired Data", () => {
        const testNode = new Node(1);

        expect(testNode.data).toBe(1);
        expect(testNode.next).toBe(null);
        expect(testNode.previous).toBe(null);
    });

    test("creates Node with desired Data", () => {
        const testNode = new Node(1);

        expect(testNode.data).toBe(1);
        expect(testNode.next).toBe(null);
        expect(testNode.previous).toBe(null);
    });
});