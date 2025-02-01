//{ Driver Code Starts
//Initial Template for javascript

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

let head = null;

function findNode(head, search_for)
{
    let current = head;
    while (current !== null)
    {
        if (current.data == search_for)
            break;
        current = current.next;
    }
    return current;
}

function printlist(head){
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
        head = null;
        head = new Node(input_ar1[0]);
        let tail = head;
        for(let i=1;i<n;i++){
            tail.next = new Node(input_ar1[i]);
            tail = tail.next;
        }
        let x = parseInt(readLine());
        let obj = new Solution();
        let res = obj.searchLinkedList(head, x);
        if(res === true ){
            console.log(1);
        }
        else{
            console.log(0);
        }
    
console.log("~");
}
}

// } Driver Code Ends

// User-defined function Template for JavaScript  

/**  
 * Searches for a given value in the linked list.  
 * @param {Node} headNode - The starting node of the linked list  
 * @param {number} target - The value to be searched  
 * @return {bool} - Returns true if the value is found, otherwise false  
 */  

/*  
class Node {  
    constructor(data) {  
        this.data = data;  
        this.next = null;  
    }  
}  
*/  

class Solution {  
    searchLinkedList(headNode, target) {  
        // Initialize position counter  
        let index = 1;  
        let current = headNode;  

        // Traverse the linked list  
        while (current != null) {  
            // Check if the current node contains the target value  
            if (current.data == target) {  
                return true;  
            }  

            // Move to the next node  
            current = current.next;  
            index++;  
        }  

        // Return false if the value is not found  
        return false;  
    }  
}  
