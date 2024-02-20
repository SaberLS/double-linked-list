import doubleLinkedList from "../doubleLinkedList.js";
import Node from "../node.js";
import insertionSort from "./insertionSort.js";


const listTest = new doubleLinkedList();

listTest.push(new Node(1));
listTest.push(new Node(2));
listTest.push(new Node(9));
listTest.push(new Node(4));
listTest.push(new Node(5));
listTest.push(new Node(6));
listTest.push(new Node(7));


insertionSort(listTest);
console.log(listTest.log());

