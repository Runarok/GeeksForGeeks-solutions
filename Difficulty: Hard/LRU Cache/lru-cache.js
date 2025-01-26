//{ Driver Code Starts
// Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let capacity = parseInt(readLine());
        let cache = new LRUCache(capacity);
        let queries = parseInt(readLine());
        // let input_ar1 = readLine().split(' ');
        let s = '';
        while (queries--) {
            let input_ar1 = readLine().split(' ');
            let q = input_ar1[0];
            if (q === "PUT") {
                let key = parseInt(input_ar1[1]);
                let value = parseInt(input_ar1[2]);
                cache.put(key, value);
            } else {
                let key = parseInt(input_ar1[1]);
                s += cache.get(key) + " ";
            }
        }
        console.log(s);
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map(); // Maps key to its corresponding node in the doubly linked list.
        
        // Doubly Linked List setup:
        this.head = new ListNode(); // Sentinel node, the start of the list.
        this.tail = new ListNode(); // Sentinel node, the end of the list.
        
        // Connect head and tail to form an empty doubly linked list.
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    // Helper function to move the node to the front (most recently used)
    moveToFront(node) {
        this.removeNode(node);
        this.addNodeToFront(node);
    }

    // Helper function to remove a node from the doubly linked list
    removeNode(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    // Helper function to add a node right after the head
    addNodeToFront(node) {
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next.prev = node;
        this.head.next = node;
    }

    // Function to return value corresponding to the key
    get(key) {
        if (!this.cache.has(key)) return -1; // Key not found.
        
        const node = this.cache.get(key);
        this.moveToFront(node); // Move the accessed node to the front (most recently used).
        
        return node.value;
    }

    // Function for storing key-value pair
    put(key, value) {
        if (this.cache.has(key)) {
            const node = this.cache.get(key);
            node.value = value; // Update the value.
            this.moveToFront(node); // Move the node to the front.
        } else {
            if (this.cache.size >= this.capacity) {
                // Cache is full, remove the least recently used item (tail's previous node)
                const tailNode = this.tail.prev;
                this.removeNode(tailNode);
                this.cache.delete(tailNode.key);
            }

            const newNode = new ListNode(key, value);
            this.cache.set(key, newNode);
            this.addNodeToFront(newNode); // Add the new node to the front.
        }
    }
}

// Doubly Linked List Node
class ListNode {
    constructor(key = null, value = null) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}
