import doubleLinkedList from "../../scripts/doubleLinkedList.js";
import Node from "../../scripts/node.js";

describe("doubleLinkedList: forEach", () => {
    const testList = new doubleLinkedList();

    testList.push(new Node(1));
    testList.push(new Node(2));
    testList.push(new Node(3));
    testList.push(new Node(4));

    test('should throw Error if given parameter is not a function', () => {
        const notFunction = "some value definitely not function";

        expect(() => { testList.forEach(notFunction) }).toThrow(TypeError);
    });

    test("executes given function once for each list node", () => {
        let i = 0;

        testList.forEach((item, index) => {
            i += 1;
            //console.log(`${index} ${item.log()}`)
        });

        expect(i).toBe(testList.length);
    });
});