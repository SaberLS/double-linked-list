function partition(list, low, high) {
    // Choosing the pivot,
    const pivotData = list.findByIndex(high).data;

    // Index of smaller element and indicates the right position of pivot found so far
    let i = low - 1;
    let current;
    let currentLow;
    let holder;

    for (let j = low; j <= high - 1; j++) {
        // If current element is smaller than the pivot
        current = list.findByIndex(j);
        if (current.data < pivotData) {
            // Increment index of smaller element
            i++;
            currentLow = list.findByIndex(i);
            // Swap elements
            holder = current.data;
            current.data = currentLow.data;
            currentLow.data = holder;
        }
    }

    list.swap(list.findByIndex(i + 1), list.findByIndex(high));// Swap pivot to its correct position
    return i + 1; // Return the partition index
}

export function quickSort(list, low, high) {
    if (low < high) {
        // pi is the partitioning index, arr[pi] is now at the right place
        let pi = partition(list, low, high);

        // Separately sort elements before partition and after partition
        quickSort(list, low, pi - 1);
        quickSort(list, pi + 1, high);
    }
}


