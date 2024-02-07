import Node from "./Node.js";
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

    findByData(searched) {//search through the list to find all Nodes with a given data 
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
                finded.unshift(i);
            }

            if (right.data === searched) {
                finded.unshift(this.length - i + 1);
            }

            left = left.next;
            right = right.previous;
            i++;
        }

        if (!lengthIsEven && this.length > 2 && left.data === searched) {
            finded.unshift(i);
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

    push(newHead) {//adds new Node to the beginning of the list
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

    pop() {//removes first Node from the list 
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

    unshift(newTail) {//add new Node to the end of the list
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

    shift() {//removes tail Node from the list
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

