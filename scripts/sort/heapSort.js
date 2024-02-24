export default function heapSort(list) {
    // Build heap (rearrange array)
    for (let i = Math.round(list.length / 2); i >= 1; i--) {
        heapify(list, list.length, i);
    }

    // One by one extract an element from heap
    for (let i = list.length; i > 1; i--) {
        // Move current root to end
        list.swap(list.head, list.findByIndex(i));

        // call max heapify on the reduced heap
        heapify(list, i, 1);
    }
}

function heapify(list, N, rootIndex) {
    let root = list.findByIndex(rootIndex); // Initialize largest as root
    let leftChildIndex = 2 * rootIndex; // you don't add 1 because list first index is 1 // 1 * 2 + 1 = 3; 2 * 2 + 1 = 5 it means that you would end with two nodes in heap without parents 2 and 3
    let rightChildIndex = 2 * rootIndex + 1;// you don't add 1 because list first index is 1 // 1 * 2 + 2 = 4; 2 * 2 + 2 = 6
    let leftChild = list.findByIndex(leftChildIndex);
    let rightChild = list.findByIndex(rightChildIndex);
    let largest = root;

    // console.log("rootIndex", rootIndex);
    // console.log("leftChildIndex", leftChildIndex);
    // console.log("rightChildIndex", rightChildIndex);

    // If left child is larger than root
    if (leftChildIndex < N && leftChild.data > largest.data) {
        largest = leftChild;
        rootIndex = leftChildIndex;
    }
    // If right child is larger than largest so far
    if (rightChildIndex < N && rightChild.data > largest.data) {
        largest = rightChild;
        rootIndex = rightChildIndex;
    }

    // If largest is not root
    if (largest != root) {
        // console.log("swap");
        // console.log("root", root.log());
        // console.log("largest", largest.log());
        list.swap(root, largest);

        // console.log(list.log());
        // Recursively heapify the affected sub-tree
        heapify(list, N, rootIndex);
    }
}