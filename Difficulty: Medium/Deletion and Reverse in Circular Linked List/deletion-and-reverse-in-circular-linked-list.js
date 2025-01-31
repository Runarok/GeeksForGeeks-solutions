//{ Driver Code Starts
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function printList(head) {
    if (head === null) {
        console.log("empty");
        return;
    }
    let temp = head;
    let result = [];
    do {
        result.push(temp.data);
        temp = temp.next;
    } while (temp !== head);
    console.log(result.join(' '));
}

// Position this line where user code will be pasted.

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x));
        let key = parseInt(readLine());
        let head = new Node(arr[0]);
        let tail = head;

        // Creating the circular linked list
        for (let j = 1; j < arr.length; ++j) {
            tail.next = new Node(arr[j]);
            tail = tail.next;
        }
        tail.next = head; // Make the list circular

        // Instantiate the Solution class and process the linked list
        const ob = new Solution();
        head = ob.deleteNode(head, key); // Delete the node with the given key
        head = ob.reverse(head);         // Reverse the circular linked list

        // Print the modified linked list
        printList(head);
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript
class Solution {
    // Function to reverse a circular linked list
    reverse(head) {
        // Create a new node as root, which will be the placeholder for the reversal process
        const root = new Node(null);
        let prev = root; // Placeholder for the previous node
        let curr = head; // Start with the head of the list
        
        // Traverse and reverse the circular linked list
        while (curr !== root) {
            const next = curr.next; // Keep track of the next node
            curr.next = prev;       // Reverse the current node's next pointer
            prev = curr;            // Move prev to current node
            curr = next;            // Move to the next node in the list
        }

        // Return the reversed list starting from the next of root (ignoring the placeholder)
        return prev.next;
    }

    // Function to delete a node with a specific key from the circular linked list
    deleteNode(head, key) {
        const root = new Node(null); // Create a new root node as placeholder
        root.next = head;            // Point root's next to the head of the list
        let nodePrev = root;         // Initialize prev pointer at root
        let node = head;             // Start with the head node
        
        let nodeFound = true;        // Flag to track if the node was found

        // Traverse the list to find the node with the given key
        while (node.data !== key) {
            // If we've reached the head again and haven't found the node, stop searching
            if (node === head && nodePrev !== root) {
                nodeFound = false;   // Node not found, break the loop
                break;
            }
            nodePrev = node;         // Move nodePrev to the current node
            node = node.next;        // Move node to the next node
        }

        // If the node with the key was not found, return the original list
        if (!nodeFound) return head;

        // Remove the found node by adjusting the previous node's next pointer
        nodePrev.next = node.next;

        // If the node to be deleted is not the head, return the updated list
        if (node !== head) {
            return root.next;
        }

        // If the node to be deleted is the head, we need to update the tail's next pointer
        while (1) {
            // Find the new tail node (previous node before the head)
            if (node === head && nodePrev !== root) {
                break;
            }
            nodePrev = node;         // Move nodePrev to the current node
            node = node.next;        // Move node to the next node
        }

        const tail = nodePrev;      // The new tail node
        tail.next = node.next;      // Set the new tail's next to the next of the node being deleted
        
        return root.next;           // Return the head of the updated list
    }
}
