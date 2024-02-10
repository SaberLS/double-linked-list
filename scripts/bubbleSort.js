export default function BubbleSort(list) {
    let current = list.head;

    while (current.next != null) {
        if (current.data > current.next.data) {
            moveToHead(current.next, list);
            current = list.head;
        } else {
            current = current.next;
        }
    }
};

function moveToHead(node, list) {
    console.log(node.log());
    if (node.previous !== null) {
        console.log(node.previous.log());
        node.previous.next = node.next;
    } else {
        return;
    }

    if (node.next !== null) {
        node.next.previous = node.previous;
    } else {
        list.tail = node.previous;
    }

    node.previous = null;
    node.next = list.head;
    list.head.previous = node;

    list.head = node;
};