class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
  }

  isEmpty() {
    return this.size === 0;
  }

  append(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  printList() {
    if (this.isEmpty()) {
      return console.log("The list is empty");
    }
    let current = this.head;
    let str = "";
    while (current) {
      str += current.value + " ";
      current = current.next;
    }
    console.log(str);
  }
}

function sortedList(listOne, listTwo) {
  let mergedList = new LinkedList();
  let currentOne = listOne.head;
  let currentTwo = listTwo.head;

  while (currentOne && currentTwo) {
    if (currentOne.value <= currentTwo.value) {
      mergedList.append(currentOne.value);
      currentOne = currentOne.next;
    } else {
      mergedList.append(currentTwo.value);
      currentTwo = currentTwo.next;
    }
  }

  while (currentOne) {
    mergedList.append(currentOne.value);
    currentOne = currentOne.next;
  }

  while (currentTwo) {
    mergedList.append(currentTwo.value);
    currentTwo = currentTwo.next;
  }

  return mergedList;
}

let listOne = new LinkedList();
let listTwo = new LinkedList();
listOne.append(1);
listOne.append(4);
listOne.append(5);

listTwo.append(2);
listTwo.append(3);
listTwo.append(6);
listOne.printList();
listTwo.printList();

let mergedList = sortedList(listOne, listTwo);

mergedList.printList();
