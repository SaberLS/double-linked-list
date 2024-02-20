export default function cocktailShakerSort(list) {//seems to have nothing to recommend it, except a catchy name and the fact that it leads to some interesting theoretical problems.
    if (list.length <= 1) {
        return list;
    }

    //indexes of nodes in list start at 1
    let beginIndex = 1;//left bound all nodes with indexes lower than this are in the right order
    let endIndex = list.length;//right bound all nodes with indexes greater than this are in the right order
    let newBeginIndex = beginIndex;//used to store new begin index until it can be changed
    let newEndIndex = endIndex;//used to store new end index until it can be changed

    let current = list.head;//its used to store current node during iteration through the list
    let currentIndex = 1;//index of current node
    let sorted = false;//used to mark if list is sorted or not

    while (sorted === false) {
        sorted = true;//sets sorted to true if during the while loop you find nodes in wrong order change it to false 

        currentIndex = beginIndex;//change value to beginIndex cos you want to start the loop at the point where it swapped nodes
        current = list.findByIndex(currentIndex);//finds node in list with currentIndex
        while (currentIndex < endIndex) {//looks through list starts at node with beginIndex/left bound
            if (current.data > current.next.data) {//checks if nodes are in wrong order
                list.swap(current, current.next);//swaps nodes order in list 
                newEndIndex = currentIndex; //last index which have been swapped all indexes after it are in the right order
                sorted = false; //change sorted value to false cos found nodes in wrong order
            } else {//you don't need change current value when you had already swapped current with current.next cos by doing that you allready moved by one node forward
                current = current.next;//move to the next node in the list
            }
            currentIndex++;//iterate currentIndex cos you move forward by one node on every loop execution
        }

        endIndex = newEndIndex;//end index cannot be changed during the loop cos loop condition (currentIndex < endIndex) includes endIndex so it would change the outcome and lead to wrong results

        //does the same what previous loop but backwards
        currentIndex = endIndex;
        current = list.findByIndex(currentIndex);
        while (current > beginIndex) {
            if (current.data < current.previous.data) {
                list.swap(current, current.previous);
                newBeginIndex = currentIndex;
                sorted = false;
            } else {
                current = current.previous;
            }
            currentIndex--;
        }

        beginIndex = newBeginIndex;
    }
}