# double-linked-list

My attempt at creating double linked list with methods similar to Array like push, pop etc. ,implementing some basic sorting algorithms on created list and testing it with jest.

## 🛠 In this project I used

<p align="left"> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://jestjs.io" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" alt="jest" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> </p>

## List methods

- unshift(newHead): adds "newHead" node to the beginning of the list.
- shift(): removes first node from the list, returns removed node.
- push(newTail): adds "newTail" node to the end of the list.
- pop(): removes last node from the list, returns removed node.
- log(): returns a string with all nodes in a list.
- findByIndex(searched): search through the list to find node with a given index, returns node with a given index.
- indexOf(data): search through the list to find all Nodes with a given data, returns array with indexes of finded nodes.
- isEmpty(): checks if a list is empty, returns true if is empty else false.
- swap(x, y): swaps places of two given nodes.
- isPartOfTheList(toCheck): checks if given node is part of the list, returns true if is part of the list else false.
- forEach(func): takes function and executes it once for each list element. func(current, index) is called with two arguments current which is current node, index is index of current node in list.
- remove(toRemove): removes given node from the list, returns removed node.
- insertBefore(toInsert, next): takes two nodes toInsert node to insert to list, next node before which toInsert will be inserted.
- insertAfter(toInsert, next): takes two nodes toInsert node to insert to list, previous node after which toInsert will be inserted.

## Implemented sorting alghoritms

- [bubbleSort](https://en.wikipedia.org/wiki/Bubble_sort)
- [cocktailShakerSort](https://en.wikipedia.org/wiki/Cocktail_shaker_sort)
- [quickSort/quickSortMiddle](https://en.wikipedia.org/wiki/Quicksort) first one uses last element as pivot second middle one.
- [heapSort](https://en.wikipedia.org/wiki/Heapsort)
- [insertionSort](https://en.wikipedia.org/wiki/Insertion_sort)
- [mergeSort](https://en.wikipedia.org/wiki/Merge_sort)
- [selectionSort](https://en.wikipedia.org/wiki/Selection_sort)

## Run Locally

Clone the project

```bash
  git clone https://github.com/SaberLS/double-linked-list.git
```

Go to the project directory

```bash
  cd double-linked-list
```

Install dependencies

```bash
  yarn install
```

## Running Tests

To run tests, run the following command

```bash
  yarn test
```

it runs all the tests and creates test coverage report at ./jest_html_reporters.html with use of <a href="https://github.com/Hazyzh/jest-html-reporters" target="_blank" rel="noreferrer">jest-html-reporters</a>

## License

[MIT](https://choosealicense.com/licenses/mit/)
