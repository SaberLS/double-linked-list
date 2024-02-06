import Node from "./Node.js";

export default class doubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    isEmpty() {
        return (this.length === 0 ? true : false);
    }

    findByData() {

    }

    findByIndex(searched) { // search through the list to find Node with a given index 
        if (typeof searched !== "number" || searched < 1 || searched > this.length) {
            return null;
        }

        const distanceFromTail = this.length - searched;
        const distanceFromHead = searched - 1;

        const isCloserFromTail = (distanceFromTail < distanceFromHead ? true : false);

        let advance = (current) => { i++; return current.next };
        let current = this.head;
        let i = 1;

        if (isCloserFromTail) {
            advance = (current) => { i--; return current.previous };
            current = this.tail;
            i = this.length;
        }

        while (current !== null && i !== searched) {
            current = advance(current);
        }

        return current;
    }

    push(newHead) { //add new Node to the beginning of the list
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
        console.log(`push to list: ${this.head.data}`);
    }

    pop() { //removes head Node from the list 
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

    unshift(newTail) { //add new Node to the end of the list
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
        console.log(`unshift to list: ${this.tail.data}`);
    }

    shift() {// removes tail Node from the list
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

    log() { // returns a string with all Nodes in a list
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

function checkDataType(data, desiredType) {
    if (data instanceof desiredType) {
        return true;
    } else {
        throw new Error(`${data} doesn't match desired data type: ${desiredType}`);
    }
}