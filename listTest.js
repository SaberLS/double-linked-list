import Node from "./scripts/Node.js";
import doubleLinkedList from "./scripts/doubleLinkedList.js";

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);

const listTest = new doubleLinkedList();

listTest.push(a);
listTest.push(b);
listTest.unshift(c);
listTest.unshift(d);

console.log(listTest.log());

const oldHead = listTest.pop();
console.log(oldHead);

console.log(listTest.log());