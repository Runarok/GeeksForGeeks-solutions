//{ Driver Code Starts
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

class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

function printList(head){
    let current = head; 
    let s='';
    while (current !== null)
    {
        s+=current.data+" ";
        current = current.next;
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let m = parseInt(readLine());
        let input_ar2 = readLine().split(' ').map(x=>parseInt(x));
        let head1 = new Node(input_ar1[0]);
        let tail1 = head1;
        for(let i=1;i<n;i++){
            tail1.next = new Node(input_ar1[i]);
            tail1 = tail1.next;
        }
        let head2 = new Node(input_ar2[0]);
        let tail2 = head2;
        for(let i=1;i<m;i++){
            tail2.next = new Node(input_ar2[i]);
            tail2 = tail2.next;
        }
        let obj = new Solution();
        let res = obj.joinTheLists(head1, head2);
        printList(res);
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript
/**
 * @param {Node} head1
 * @param {Node} head2
 * @returns {Node}
*/

class Solution {
    /**
     * Constructor to create a new node with given data.
     * @param {Node} data
     * @returns {Void}
    */
    constructor(data) {
        this.data = data;  // Initialize the data of the node
        this.next = null;   // Initialize next pointer as null
    }

    /**
     * Function to join two linked lists, appending the second list at the end of the first list.
     * @param {Node} head1 - The first linked list's head node.
     * @param {Node} head2 - The second linked list's head node.
     * @returns {Node} - The head of the combined linked list.
     */
    joinTheLists(head1, head2) {
        let tmp = head1;  // Start with the first list's head
        
        // Traverse to the end of the first linked list
        while (tmp.next !== null) {
            tmp = tmp.next;  // Move to the next node
        }
        
        // Once at the last node, connect it to the second list's head
        tmp.next = head2;
        
        return head1;  // Return the head of the first list, now linked to the second list
    }
}
