import Node from "../node";
import doubleLinkedList from "../doubleLinkedList";

export default function mergeSort(list) {
    if (list.length <= 1) {
        return list;
    }

    let left = new doubleLinkedList();
    let right = new doubleLinkedList();

    list.forEach((current, index) => {
        if (index <= list.length / 2) {
            left.push(new Node(current.data));
        } else {
            right.push(new Node(current.data));
        }
    });

    console.log("list: ", list.log());
    console.log("left: ", left.log());
    console.log("right: ", right.log());

    left = mergeSort(left);
    right = mergeSort(right);

    return merge(left, right);
};

function merge(left, right) {
    let result = new doubleLinkedList();

    while (left.isEmpty() !== true && right.isEmpty() !== true) {
        if (left.head.data <= right.head.data) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.isEmpty() !== true) {
        result.push(left.shift());
    }

    while (right.isEmpty() !== true) {
        result.push(right.shift());
    }

    return result;
}