class ListNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
        
    }
}


class LinkedList {
  constructor() {
    this.head;
    this._length = 0;
  }
}
let head = this.head;

let node = new ListNode(12);
node.next = head;
head = node;
node.next = new ListNode(99);
node.next.next = new ListNode(37);


LinkedList.prototype.append = function(val) {
  val = null;
  let currentNode = node;
  if (currentNode) {
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = new ListNode(val);
  } else {
    node = new ListNode(val);
  }
  this._length++;
  return null;
}

remove = (index) => {
  if (head == null) {
    return;
  } 
  if (index === 0) {
    head = head.next;
    return;
  }
  for (var i = 0; head!=null && i < index - 1; i++) {
    head = head.next;
  }
  if (head == null || head.next == null) {
    return;
  }
  let next = head.next.next;
  head.next = next;
}

let current = node;
let list = new LinkedList();

while (current !== null) {
  console.log(current.data);
  current = current.next;
}

list.append(100);
console.log(current);

remove(1);
console.log(node);
console.log(list);






