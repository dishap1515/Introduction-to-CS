class ListNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
        
    }
}


class LinkedList {
  constructor() {
    this.head = null;
  }
  
  insertNode(data) {
    let newNode = new ListNode(data);
    newNode.next = this.head; 
    this.head = newNode;
    
    return this.head;
  }
  
  
  append(data) {
    data = null;
    let currentNode = this.head;
    if (currentNode) {
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = new ListNode(data);
    } else {
      this.head = new ListNode(data);
    }
    return null;
  }
  
  remove(index) {
    if (this.head == null) {
      return;
    } 
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    let temp = this.head;
    for (var i = 0; temp!=null && i < index - 1; i++) {
      temp = temp.next;
    }
    if (temp == null || temp.next == null) {
      return;
    }
    let next = temp.next.next;
    temp.next = next;
  }
  
  printList() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

let list = new LinkedList();
list.insertNode(8);
list.insertNode(13);
list.insertNode(99);
console.log(list.printList());

list.append(25);

list.remove(2);
console.log(list.printList());






