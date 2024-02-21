import Node from "./node.js";
import checkDataType from "./checkDataType.js";

export default class doubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    isEmpty() {
        return (this.length === 0 ? true : false);
    }

    isPartOfTheList(toCheck) { //searches through the list if given node is part of the list return true else false
        let response = false;
        this.forEach((node) => {
            if (toCheck === node) {
                response = true;
            }
        })
        return response;
    }

    swap(x, y) {
        function swapNeighbours(x, y) {
            let first;
            let second;

            if (x.next === y) {
                first = x;
                second = y;
            } else {
                first = y;
                second = x;
            }

            if (second.next !== null) {
                second.next.previous = first;
            };
            if (first.previous !== null) {
                first.previous.next = second;
            };

            first.next = second.next;
            second.next = first;

            second.previous = first.previous;
            first.previous = second;
        }

        function swapNotNeighbours(x, y) {
            (x.next !== null ? x.next.previous = y : null);
            (x.previous !== null ? x.previous.next = y : null);

            (y.next !== null ? y.next.previous = x : null);
            (y.previous !== null ? y.previous.next = x : null);

            const holderXnext = x.next;
            const holderXprevious = x.previous;

            x.next = y.next;
            x.previous = y.previous;

            y.next = holderXnext;
            y.previous = holderXprevious;
        }

        if (typeof x === "number") {
            x = this.findByIndex(x);
        } else if (this.isPartOfTheList(x) === false) {
            throw new Error(`${x} is not part of the List`);
        }

        if (typeof y === "number") {
            y = this.findByIndex(y);
        } else if (this.isPartOfTheList(y) === false) {
            throw new Error(`${y} is not part of the List`);
        }

        const areNeighbours = (y.next === x || y.previous === x ? true : false);
        (areNeighbours ? swapNeighbours(x, y) : swapNotNeighbours(x, y));

        (this.head === x ? this.head = y : (this.head === y ? this.head = x : null));
        (this.tail === x ? this.tail = y : (this.tail === y ? this.tail = x : null));
    }


    indexOf(searched) {//search through the list to find all Nodes with a given data 
        if (this.isEmpty()) {
            return [];
        }

        let left = this.head;
        let right = this.tail;
        const finded = [];
        let i = 1;

        const lengthIsEven = ((this.length % 2) === 0 ? true : false);
        const condition = (lengthIsEven ? (left, right) => { return left.previous !== right } : (left, right) => { return left !== right })

        while (condition(left, right)) {
            if (left.data === searched) {
                finded.push(i);
            }

            if (right.data === searched) {
                finded.push(this.length - i + 1);
            }

            left = left.next;
            right = right.previous;
            i++;
        }

        if (!lengthIsEven && this.length > 2 && left.data === searched) {
            finded.push(i);
        }

        return finded;
    }

    findByIndex(searched) {//search through the list to find Node with a given index 
        if (this.isEmpty()) {
            return null;
        }

        if (typeof searched !== "number" || searched < 1 || searched > this.length) {
            return null;
        }

        const distanceFromTail = this.length - searched;
        const distanceFromHead = searched - 1;

        const isCloserFromTail = (distanceFromTail < distanceFromHead ? true : false);

        let advance;
        let current;
        let i;

        if (isCloserFromTail) {
            advance = (current) => { i--; return current.previous };
            current = this.tail;
            i = this.length;
        } else {
            advance = (current) => { i++; return current.next };
            current = this.head;
            i = 1;
        }

        while (current !== null && i !== searched) {
            current = advance(current);
        }

        return current;
    }

    unshift(newHead) {//adds new Node to the beginning of the list
        checkDataType(newHead, Node);

        if (this.isEmpty()) {
            this.head = newHead;
            this.tail = newHead;
        } else {
            newHead.next = this.head;
            this.head.previous = newHead;
            this.head = newHead;
        }

        this.length++;
        console.log(`unshift to list: ${this.head.data}`);
    }

    shift() {//removes first Node from the list 
        if (this.isEmpty()) {
            return null;
        }

        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.previous = null;
            oldHead.next = null;
        }

        this.length--;
        return oldHead;
    }

    push(newTail) {//add new Node to the end of the list
        checkDataType(newTail, Node);

        if (this.isEmpty()) {
            this.head = newTail;
            this.tail = newTail;
        } else {
            newTail.previous = this.tail;
            this.tail.next = newTail;
            this.tail = newTail;
        }

        this.length++;
        console.log(`push to list: ${this.tail.data}`);
    }

    pop() {//removes tail Node from the list
        if (this.isEmpty()) {
            return null;
        }

        let oldTail = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.previous;
            this.tail.next = null;
            oldTail.previous = null;
        }

        this.length--;
        return oldTail;
    }

    forEach(func) {//takes function and executes it once for each list element
        if (typeof func !== "function") {
            throw new TypeError(`${func} is not a function`);
        };
        let current = this.head;
        let i = 1;

        while (current !== null) {
            func(current, i);
            i++;
            current = current.next;
        };
    }

    remove(toRemove) {
        if (typeof toRemove === "number") {
            const nodeToRemove = this.findByIndex(toRemove);

            if (nodeToRemove === null) {
                return toRemove;
            } else {
                toRemove = nodeToRemove;
            }
        } else {
            checkDataType(toRemove, Node);
        }

        if (this.isPartOfTheList(toRemove)) {
            toRemove === this.head ? this.head = toRemove.next : null;
            toRemove === this.tail ? this.tail = toRemove.previous : null;

            toRemove.next !== null ? toRemove.next.previous = toRemove.previous : null;
            toRemove.previous !== null ? toRemove.previous.next = toRemove.next : null;

            toRemove.next = null;
            toRemove.previous = null;

            this.length--;
            return toRemove;
        } else {
            return toRemove;
        }
    }



    log() {//returns a string with all Nodes in a list
        let current = this.head;
        let i = 1;
        let result = '';

        while (current !== null) {
            result += `${i}${current.log()}\t\n`;
            current = current.next;
            i++;
        }

        return result;
    }
}
