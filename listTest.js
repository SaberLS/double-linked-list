import Node from "./scripts/Node.js";
import doubleLinkedList from "./scripts/doubleLinkedList.js";

const a = new Node(3);
const b = new Node(0);
const c = new Node(0);
const d = new Node(0);
const e = new Node(3);

const listTest = new doubleLinkedList();

listTest.push(b);
listTest.push(a);
listTest.unshift(c);
listTest.unshift(d);
listTest.unshift(e);


console.log(listTest.log());

console.log(listTest.findByData(1));
console.log(listTest.findByData(3));
console.log(listTest.findByData(4));