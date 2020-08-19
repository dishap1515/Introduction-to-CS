class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.length) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.length += 1;
    return newNode;
  }

  shift() {
    if (!this.length) {
      return null;
    } else {
      const nodeToRemove = this.head;
      this.head = this.head.next;
      this.length -= 1;

      if (!this.length) {
        this.tail = null;
      }

      return nodeToRemove;
    }
  }

  pop() {
    if (!this.tail) {
      return null;
    } else {
      let currentNode = this.head;
      let preTail = this.head;
      while (currentNode.next) {
        preTail = currentNode;
        currentNode = currentNode.next;
      }
      this.tail = preTail;
      this.tail.next = null;
      this.length -= 1;
      if (!this.length) {
        this.head = null;
        this.tail = null;
      }
      return currentNode;
    }
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    } else {
      let count = 0;
      let currentNode = this.head;

      while (count < index) {
        currentNode = currentNode.next;
        count += 1;
      }

      return currentNode;
    }
  }

  remove(index) {
    
    if (index < 0 || index >= this.length) {
      return null;
    } else if (index === 0) {
      
      return this.shift();
    } else if (index === this.length - 1) {

      return this.pop();
    } else {
      
      const preNodeToRemove = this.get(index - 1);
      const nodeToRemove = preNodeToRemove.next;
      preNodeToRemove.next = nodeToRemove.next; 
      this.length -= 1;

      return nodeToRemove;
    }
  }
}

const newSLL = new LinkedList();
newSLL.push("3");
newSLL.push("7");
newSLL.push("29");

console.log(newSLL);

console.log(newSLL.remove(0));


console.log(newSLL);