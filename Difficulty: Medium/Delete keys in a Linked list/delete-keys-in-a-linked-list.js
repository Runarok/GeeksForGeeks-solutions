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
        this.next = null;
    }
}

function printlist(head){
    let current = head; 
    let s='';
    let cnt=0;
    while (current !== null)
    {
        cnt+=1;
        s+=current.data+" ";
        current = current.next;
    }
    console.log(cnt);
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let head1 = new Node(input_ar1[0]);
        let tail1 = head1;
        for(let i=1;i<n;i++){
            tail1.next = new Node(input_ar1[i]);
            tail1 = tail1.next;
        }
        let x = parseInt(readLine());
        let obj = new Solution();
        let res = obj.deleteAllOccurances(head1,x);
        printlist(res);
    
console.log("~");
}
}

// } Driver Code Ends

//User function Template for javascript

/**
 * @param {Node} head
 * @param {number} x
 * @returns {Node}
*/

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {

    // Function to delete all occurrences of 'x' in the linked list.
    deleteAllOccurances(head, x) {
        // Create a dummy node to handle edge cases like deleting the first node
        let newHead = new Node(0);
        newHead.next = head;
        head = newHead;  // Set head to the dummy node

        // Initialize 'run' as the current node and 'pre' as the previous node
        let run = head.next;
        let pre = head;

        // Traverse the linked list
        while(run) {
            // If the current node's data matches 'x', delete it
            if (run.data === x) {
                pre.next = run.next;  // Bypass the current node
            } else {
                pre = pre.next;  // Move 'pre' to the next node
            }
            run = run.next;  // Move to the next node in the list
        }

        // Return the new head of the list, skipping the dummy node
        return head.next;
    }
}
