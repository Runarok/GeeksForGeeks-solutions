//{ Driver Code Starts
class DLLNode {
    constructor(val) {
        this.data = val;
        this.next = null;
        this.prev = null;
    }
}

function push(tail, new_data) {
    let newNode = new DLLNode(new_data);
    newNode.next = null;
    newNode.prev = tail;

    if (tail) {
        tail.next = newNode;
    }

    return newNode;
}

function printList(head) {
    if (!head) {
        return;
    }

    let result = [];
    while (head) {
        result.push(head.data);
        head = head.next;
    }
    console.log(result.join(" "));
}

function printListBackward(head) {
    if (!head) {
        return;
    }

    // Traverse to the end of the list
    let tail = head;
    while (tail.next) {
        tail = tail.next;
    }

    // Traverse backward from the end
    let result = [];
    while (tail) {
        result.push(tail.data);
        tail = tail.prev;
    }
    console.log(result.join(" "));
}

// Reading input and executing the logic
const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output : process.stdout});

let input = [];
rl.on('line', function(line) { input.push(line); });

rl.on('close', function() {
    let t = parseInt(input[0].trim());
    let index = 1;

    while (t--) {
        let arr = input[index].trim().split(' ').map(Number);

        if (arr.length === 0) {
            console.log("Empty list provided.");
            index += 1;
            continue;
        }

        let head = new DLLNode(arr[0]);
        let tail = head;

        for (let i = 1; i < arr.length; i++) {
            tail = push(tail, arr[i]);
        }

        let obj = new Solution();
        head = obj.sortDoubly(head);

        // console.log("Forward print:");
        printList(head);

        // console.log("Backward print:");
        printListBackward(head);

        index += 1;
    }
});

// } Driver Code Ends


// User function Template for javascript

/*class DLLNode {
    constructor(val) {
        this.data = val;
        this.next = null;
        this.prev = null;
    }
}
*/

/**
 * @param {DLLNode} head
 * @return {DLLNode}
 */

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class Solution {
  // Function to sort the given doubly linked list using Merge Sort.
  sortDoubly(head) {
    if (!head || !head.next) {
      return head;
    }

    // Function to split the doubly linked list into two halves
    const split = (head) => {
      let slow = head;
      let fast = head;

      while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
      }

      const second = slow.next;
      slow.next = null;
      if (second) {
        second.prev = null;
      }

      return { first: head, second: second };
    };

    // Function to merge two sorted doubly linked lists
    const merge = (first, second) => {
      if (!first) {
        return second;
      }
      if (!second) {
        return first;
      }

      if (first.data < second.data) {
        first.next = merge(first.next, second);
        if (first.next) {
          first.next.prev = first;
        }
        first.prev = null;
        return first;
      } else {
        second.next = merge(first, second.next);
        if (second.next) {
          second.next.prev = second;
        }
        second.prev = null;
        return second;
      }
    };

    // Recursively split and merge the list
    const { first, second } = split(head);
    const left = this.sortDoubly(first);
    const right = this.sortDoubly(second);

    return merge(left, right);
  }
}
