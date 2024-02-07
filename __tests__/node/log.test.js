import Node from "../../scripts/Node";

describe("Node: log", () => {
    test("returns string with empty Node properties", () => {
        const testNode = new Node();
        const result = testNode.log();

        expect(result).toEqual(`{\n\tdata: ${null},\n\tnext: ${null},\n\tprevious: ${null}\n}`);
    });

    test("returns string with Node properties", () => {
        const testNodeA = new Node(1);
        const testNodeB = new Node(2);
        const testNodeC = new Node(3);

        testNodeA.previous = testNodeB;
        testNodeA.next = testNodeC;
        const result = testNodeA.log();

        expect(result).toEqual(`{\n\tdata: ${1},\n\tnext: ${testNodeC.data},\n\tprevious: ${testNodeB.data}\n}`);
    });
});