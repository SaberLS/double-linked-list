export default function insertionSort(list) {
    if (list.length <= 1) {
        return list;
    }

    let current = list.head.next;
    let i = 2;

    while (current !== null) {
        if (current.data < current.previous.data) {
            while (current.previous !== null && current.data < current.previous.data) {
                list.swap(current.previous, current);
            }

            current = list.findByIndex(i);
        }

        current = current.next;
        i++;
    }
}


