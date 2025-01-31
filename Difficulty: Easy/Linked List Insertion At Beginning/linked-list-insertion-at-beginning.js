//{ Driver Code Starts
// Initial Template for javascript

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function printList(node) {
    let current = node;
    let result = [];
    while (current !== null) {
        result.push(current.data);
        current = current.next;
    }
    console.log(result.join(' '));
}

// Position this line where user code will be pasted.

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x));
        let x = parseInt(readLine());
        let head = new Node(arr[0]);
        let tail = head;
        for (let j = 1; j < arr.length; j++) {
            tail.next = new Node(arr[j]);
            tail = tail.next;
        }
        let obj = new Solution();
        let ans = obj.insertAtBeginning(head, x);
        printList(ans);
        console.log("~");
    }
}
// } Driver Code Ends


class Solution {
    // Function to insert a node at the beginning of the linked list.
    insertAtBeginning(head, x) {
        // Create a new node with the given value `x`
        let newNode = new Node(x);
        
        // Make the next pointer of the new node point to the current head
        newNode.next = head;
        
        // Update the head to be the new node
        head = newNode;
        
        // Return the updated head of the list
        return head;
    }
}
