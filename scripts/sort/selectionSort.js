export default function selectionSort(list) {
    if (list.length === 1) {
        return list;
    }
    let current = list.head;
    let bound = list.head;
    let smallest = list.head;

    while (bound !== null) {
        current = bound;
        smallest = bound;
        while (current !== null) {
            if (current.data < smallest.data) {
                smallest = current;
            }
            current = current.next;
        }

        if (smallest !== bound) {
            list.remove(smallest);
            list.insertBefore(smallest, bound);
        } else {
            bound = bound.next;
        }
    }
}