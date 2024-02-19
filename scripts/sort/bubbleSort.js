export default function bubbleSort(list) {
    let current = list.head;
    let swapped = false;

    while (current.next !== null) { //if next equals null it means alghoritm traversed through the whole list without swapping nodes so its list is sorted
        if (current.data > current.next.data) {//compare adjacent elements
            list.swap(current, current.next);//the higher one is placed at right side
            swapped = true;
        } else {
            current = current.next;//if nodes are in the right order move forward by one
        }
    }

    swapped ? bubbleSort(list) : null;
};
