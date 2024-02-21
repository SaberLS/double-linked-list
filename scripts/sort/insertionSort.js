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

// diffrent approach to insertion sort wihout use of indexes first seems to be faster but i will leave this here meybe i will need it someday LOL
/*export default function insertionSort(list) {
    if (list.length <= 1) {
        return list;
    }

    let current = list.head.next;

    let currentBackwards;
    let removed;

    while (current !== null) {
        if (current.data < current.previous.data) {
            currentBackwards = current.previous;
            current = current.previous;
            removed = list.remove(current.next);

            while (currentBackwards.previous !== null && removed.data < currentBackwards.previous.data) {
                currentBackwards = currentBackwards.previous;
            }
            list.insertBefore(removed, currentBackwards);
        }
        current = current.next;
    }
}*/