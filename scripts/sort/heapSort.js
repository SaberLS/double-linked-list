export default function heapSort(list) {
    // Build heap (rearrange array)
    let currentIndex = Math.round(list.length / 2);
    let currentPrevious;
    for (let current = list.findByIndex(currentIndex); currentIndex >= 1; current = currentPrevious) {
        currentPrevious = current.previous; // you need to save current.previous before calling heapify                                                
        heapify(list, list.length, currentIndex, current);// cos in heapify() you may swap current with one of its childrens and then current.previous will change to child.previous
        currentIndex--;// current goes backwards so its index changes by -1
    }

    // One by one extract an element from heap
    let bound = list.length;
    let oldHead;// oldHead will take place of your current and it will be not included in heapify
    for (let current = list.tail; bound > 1; current = oldHead.previous) {// since you are iterating backwards your previous equals oldHead.previous
        // Current root list.head is the biggest list element
        // Move current root to end of the list to not include it in next heapify call
        oldHead = list.head;
        list.swap(oldHead, current);
        // call heapify on the reduced heap
        bound--;// with every iteration you have one more element in right spot so you nedd to move bound to left
        heapify(list, bound, 1, list.head);
    }
}

function heapify(list, bound, rootIndex, root) {
    const leftChildIndex = 2 * rootIndex; // you don't add 1 because list first index is 1 | 1 * 2 + 1 = 3; 2 * 2 + 1 = 5
    const rightChildIndex = 2 * rootIndex + 1;// you add 1 because list first index is 1 | 1 * 2 + 2 = 4; 2 * 2 + 2 = 6 it means that you would end with two nodes(1 and 2) in heap without parents
    const leftChild = list.findByIndex(leftChildIndex);
    const rightChild = list.findByIndex(rightChildIndex);
    let largestData = root.data;
    let largestIndex = rootIndex;

    const inRange = (index) => index <= bound ? true : false;

    // If left child is larger than root
    if (inRange(leftChildIndex) && leftChild.data > largestData) {
        largestData = leftChild.data;
        largestIndex = leftChildIndex;
    }

    // If right child is larger than largest so far
    if (inRange(rightChildIndex) && rightChild.data > largestData) {
        largestData = rightChild.data;
        largestIndex = rightChildIndex;
    }

    // If largest is not root
    if (largestIndex !== rootIndex) {
        const largestNode = largestIndex === leftChildIndex ? leftChild : rightChild;
        list.swap(root, largestNode);
        // heapify the affected sub-tree
        heapify(list, bound, largestIndex, root);// largestNode and root were swapped it means root Node index is now equal to largestIndex
    }
}