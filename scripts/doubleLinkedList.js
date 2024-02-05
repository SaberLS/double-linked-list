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
        console.log(`added to list: ${this.head.data}`);
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
            oldHead.next = null;
            this.head = this.head.next;
        }
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
        console.log(`added to list: ${this.tail.data}`);
    }

    shift() {

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