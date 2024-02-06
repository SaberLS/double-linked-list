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

console.log(listTest.findByIndex(0));
console.log(listTest.findByIndex(4));
console.log(listTest.findByIndex(5));