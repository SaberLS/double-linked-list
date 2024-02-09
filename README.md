# double-linked-list

My attempt at creating double linked list with methods similar to Array like push, pop etc. and testing them with jest.

## 🛠 In this project I used

<p align="left"> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://jestjs.io" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" alt="jest" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> </p>

## List methods

- unshift: adds new Node to the beginning of the list.
- shift: removes first Node from the list.
- push: adds new Node to the end of the list.
- pop: removes last Node from the list.
- log: returns a string with all Nodes in a list.
- findByIndex: search through the list to find Node with a given index, returns Node with a given index.
- indexOf: search through the list to find all Nodes with a given data, returns indexes of finded Nodes.

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
