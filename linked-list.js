class ListNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = null;
    }
}


  class LinkedList {
      constructor() {
          this.head = null;
          this._length = 0;
      }
    }

    let head = this.head;
    
    
    // create the first node
    head = new ListNode(12);
    
    // add a second node
    head.next = new ListNode(99);
    
    // add a third node
    head.next.next = new ListNode(37);
    
    insertNodeAtEnd = (data) => {
      let currentNode = head;
      if (currentNode) {
        while (currentNode.next) {
          currentNode = currentNode.next;
        }
    
        currentNode.next = new ListNode(data);
      } else {
        head = new ListNode(data);
       
      }
    
      this._length++;
     return '';
     
    }
    
    
    
    
    
    let current = head;
    
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
    console.log(insertNodeAtEnd(10));

