//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split("\n").map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

class Node {
    constructor(val) {
        this.data = val;
        this.prev = null;
        this.next = null;
    }
}

/*
 * Function to insert a node at the beginning of the Doubly Linked List
 */
function push(head, new_data) {
    // allocate node
    var new_node = new Node();

    // put in the data
    new_node.data = new_data;

    /*
     * since we are adding at the beginning, prev is always NULL
     */
    new_node.prev = null;

    // link the old list of the new node
    new_node.next = head;

    // change prev of head node to new node
    if (head != null) head.prev = new_node;

    // move the head to point to the new node
    head = new_node;

    return head;
}

/*
 * Function to print nodes in a given doubly linked list
 */
function printList(temp) {
    if (temp == null) process.stdout.write("-1");

    while (temp != null) {
        process.stdout.write(temp.data + " ");
        temp = temp.next;
    }
}

function main() {
    let t = parseInt(readLine());

    while (t--) {

        var head = null;
        let n = parseInt(readLine());

        let inp = readLine().split(' ').map(Number);
        // let head = new Node(inp[n - 1]);
        for (let i = n - 1; i >= 0; i--) {
            head = push(head, inp[i]);
        }

        let key = parseInt(readLine());

        let obj = new Solution();
        head = obj.deleteAllOccurOfX(head, key);

        printList(head);
        process.stdout.write('\n');
    
console.log("~");
}
}

// } Driver Code Ends


// User function Template for javascript

/*
  class Node {
    constructor(val) {
        this.data = val;
        this.prev = null;
        this.next = null;
    }
}

integer key
head node head_ref
return head node

*/

class Solution {

    // Function to delete all occurrences of key from the doubly linked list
    deleteAllOccurOfX(head_ref, key) {
        // If the list is empty, return null
        if (!head_ref) return null;
        
        let head = head_ref; // Store the head of the list
        let current = head; // Traverse the list starting from the head
        
        while (current) {
            // If the current node's data matches the key, delete it
            if (current.data === key) {
                // If the current node is the head, update the head
                if (current === head) {
                    head = current.next;
                }
                
                // Adjust the previous and next pointers to unlink the node
                const previous = current.prev;
                const next = current.next;
                
                // Link the next node to the previous one, if next exists
                if (next) next.prev = previous;
                
                // Link the previous node to the next one, if previous exists
                if (previous) previous.next = next;
            }
            
            current = current.next; // Move to the next node
        }
        
        // Return the modified head of the list
        return head;
    }
}
