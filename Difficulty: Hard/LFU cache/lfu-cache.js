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
        let cache = new LFUCache(capacity);
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

class Node {
    constructor(key, val) {
        this.key = key;  // Unique identifier for the node
        this.val = val;  // The value associated with the key
        
        this.cnt = 1;  // Frequency count (initially 1)
        this.next = null;  // Pointer to next node in the list
        this.prev = null;  // Pointer to previous node in the list
    }
}


class LFUCache {
    constructor(cap) {
        // Initialize maps to hold cache and frequency linked list
        this.cacheMap = new Map();  // Holds the actual data
        this.freqMap = new Map();   // Holds the frequency list (double linked list)
        this.minFreq = 0;  // Tracks the minimum frequency for the LFU cache
        this.cap = cap;    // Maximum capacity of the cache
    }

    /**
     * Get the value of the key if the key exists in the cache, otherwise return -1.
     * @param {number} key
     * @returns {number} The value associated with the key or -1 if not found.
     */
    get(key) {
        if (!this.cacheMap.has(key)) {
            return -1;  // If key doesn't exist, return -1
        }
        const node = this.cacheMap.get(key);  // Fetch the node from cache
        const res = node.val;  // Get the value from the node
        this.updateFreq(node);  // Update the frequency of the node
        return res;
    }

    /**
     * Update the frequency of a given node and adjust the frequency map accordingly.
     * @param {Node} node
     */
    updateFreq(node) {
        const oldFreq = node.cnt;  // Store the old frequency of the node
        node.cnt++;  // Increment the frequency
        
        this.remove(node);  // Remove the node from the old frequency list
        if (this.freqMap.get(oldFreq).head.next === this.freqMap.get(oldFreq).tail) {
            // If the old frequency list is empty, remove it from the frequency map
            this.freqMap.delete(oldFreq);
            
            // If the old frequency was the minimum, update the minFreq
            if (this.minFreq === oldFreq) {
                this.minFreq++;
            }
        }
        this.add(node, node.cnt);  // Add the node to the new frequency list
    }

    /**
     * Adds a node to the frequency list.
     * @param {Node} node
     * @param {number} freq Frequency at which the node will be added.
     */
    add(node, freq) {
        if (!this.freqMap.has(freq)) {
            // Create a new frequency list if not already present
            const head = new Node(-1, -1);  // Dummy head node
            const tail = new Node(-1, -1);  // Dummy tail node
            head.next = tail;
            tail.prev = head;
            this.freqMap.set(freq, {head, tail});
        }

        const head = this.freqMap.get(freq).head;  // Get the head of the frequency list
        const temp = head.next;  // Store the next node
        node.next = temp;  // Insert the node after head
        node.prev = head;
        head.next = node;  // Update head to point to the new node
        temp.prev = node;  // Update the next node's prev pointer
    }

    /**
     * Removes a node from the frequency list.
     * @param {Node} node
     */
    remove(node) {
        const delprev = node.prev;  // Previous node of the node to be removed
        const delnext = node.next;  // Next node of the node to be removed
        delprev.next = delnext;  // Connect previous node to next node
        delnext.prev = delprev;  // Connect next node to previous node
    }

    /**
     * Puts a new key-value pair into the cache.
     * If the key already exists, update the value and frequency.
     * If the cache is at capacity, evict the least frequent node.
     * @param {number} key
     * @param {number} value
     */
    put(key, value) {
        if (this.cap === 0) return;  // If capacity is 0, don't do anything
        
        if (this.cacheMap.has(key)) {
            const node = this.cacheMap.get(key);  // Get the existing node
            node.val = value;  // Update the value of the node
            this.updateFreq(node);  // Update the frequency of the node
        } else {
            if (this.cacheMap.size === this.cap) {
                // Evict the least frequent node if cache is at capacity
                const node = this.freqMap.get(this.minFreq).tail.prev;
                this.cacheMap.delete(node.key);  // Delete from cache map
                this.remove(node);  // Remove node from frequency list
                
                // Clean up the frequency map if the list becomes empty
                if (this.freqMap.get(this.minFreq).head.next === this.freqMap.get(this.minFreq).tail) {
                    this.freqMap.delete(this.minFreq);
                }
            }

            // Create a new node and add it to the cache
            const node = new Node(key, value);
            this.cacheMap.set(key, node);
            
            // Set the minimum frequency to 1 for new node
            this.minFreq = 1;
            this.add(node, 1);  // Add the node to the frequency list with frequency 1
        }
    }
}
