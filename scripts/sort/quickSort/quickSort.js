function partition(list, low, high) {
    // Choosing the pivot,
    const pivot = list.findByIndex(high);
    const pivotData = pivot.data;

    // Index of smaller element and indicates the right position of pivot found so far
    let current = list.findByIndex(low);
    let currentLow = list.findByIndex(low);
    let currentLowIndex = low;
    let holder;

    while (current !== pivot) {
        // If current element is smaller than the pivot
        if (current.data < pivotData) {
            // Increment index of smaller element
            currentLowIndex++;
            // Swap elements
            holder = current.next;
            list.swap(currentLow, current);

            currentLow = current.next;
            current = holder;
        } else {
            current = current.next;
        }
    }

    list.swap(currentLow, pivot);// Swap pivot to its correct position
    return currentLowIndex; // Return the partition index
}

export default function quickSort(list, low = list.length > 0 ? 1 : 0, high = list.length) {
    if (low < high) {
        // pi is the partitioning index, is now at the right place
        let pi = partition(list, low, high);

        // Separately sort elements before partition and after partition
        quickSort(list, low, pi - 1);
        quickSort(list, pi + 1, high);
    }
}


