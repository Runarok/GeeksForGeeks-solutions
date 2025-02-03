//{ Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function buildTree(str){
   // Corner Case
   if(str.length === 0 || str[0] === "N")
       return null;

   // Create the root of the tree
   let root = new Node(parseInt(str[0]));

   // Push the root to the queue
   let queue = [];
   let start = 0;
   queue.push(root);

   // Starting from the second element
   let i = 1;
   while(queue.length !== start && i < str.length) {

       // Get and remove the front of the queue
       let currNode = queue[start];
       start++;

       // Get the current node's value from the string
       let currVal = str[i];

       // If the left child is not null
       if(currVal !== "N") {

           // Create the left child for the current node
           currNode.left = new Node(parseInt(currVal));

           // Push it to the queue
           queue.push(currNode.left);
       }

       // For the right child
       i++;
       if(i >= str.length)
           break;
       currVal = str[i];

       // If the right child is not null
       if(currVal !== "N") {

           // Create the right child for the current node
           currNode.right = new Node(parseInt(currVal));

           // Push it to the queue
           queue.push(currNode.right);
       }
       i++;
   }

   return root;
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let input_ar1 = readLine().split(' ');
        let root = buildTree(input_ar1);
        let obj = new Solution();
        let res = obj.levelOrder(root);
        let s = '';
        for(let i=0; i<res.length; i++){
            for(let j=0; j<res[i].length; j++){
                s += res[i][j] +" ";
            }
            s += "$ ";
        }
        console.log(s);
        
    
console.log("~");
}
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Node} node
 * @returns {number[][]}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Qnode {
    constructor(queueNodeVal) {
        this.queueNodeVal = queueNodeVal;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this._size = 0;
    }

    enqueue(data) {
        let temp = new Qnode(data);
        if (this.rear === null) {
            this.rear = this.front = temp;
            ++this._size;
            return;
        }
        this._size++;
        this.rear.next = temp;
        this.rear = temp;
    }

    dequeue() {
        if (this.front === null) {
            console.log('Queue is empty');
            this._size--;
            return;
        }
        let temp = this.front;
        this.front = this.front.next;
        // If front becomes NULL, then change rear also as NULL
        if (this.front == null) {
            this.rear = null;
        }
        this._size--;
        return temp.queueNodeVal; // Return the dequeued element
    }

    // Method to check if the queue is empty
    isEmpty() {
        return this.front == null;
    }

    get size() {
        return this._size;
    }

}

class Solution {
    // Function to return the level order traversal of a tree.
    levelOrder(root) {
        if (!root) return []; // If the tree is empty, return an empty array
        let queue = new Queue(); // Assuming you have a Queue implementation
        queue.enqueue(root);
        let res = []; // Array to store the result
        while (queue.size) {
            let level = []; // Array to store nodes at the current level
            let levelSize = queue.size; // Number of nodes at the current level
            
            // Traverse all nodes at the current level
            for (let i = 0; i < levelSize; i++) {
                let curr = queue.dequeue();
                level.push(curr.data); // Collect the current node's data
                
                if (curr.left) {
                    queue.enqueue(curr.left); // Enqueue left child if exists
                }
                if (curr.right) {
                    queue.enqueue(curr.right); // Enqueue right child if exists
                }
            }
            
            res.push(level); // Push the level's nodes to the result array
        }
        return res;
    }
}
