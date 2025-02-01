//{ Driver Code Starts
//Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;



process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

class Node {
  constructor(x){
    this.data = x;
    this.next = null;
  }
}

function printList(head){
  let s = "";
  while(head){
    s+=head.data;
    s+=" ";
    head = head.next;
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let N = parseInt(readLine());
    let arr = readLine().trim().split(" ").map((x) => parseInt(x));
    let pos  = parseInt(readLine());
    let list = new Node(arr[0]);
    let tail = list;
    for(let j = 1;j<N;j++){
      tail.next = new Node(arr[j]);
      tail = tail.next;
    }
    
    let obj = new Solution();
    let res = obj.deleteAtPosition(list,pos);
    printList(res);
  
console.log("~");
} 

}
// } Driver Code Ends


//User function Template for javascript


/*LINKED LIST NODE
class Node {
  constructor(x){
    this.data = x;
    this.next = null;
  }
}
*/


/**
 * @param {Node} head
 * @param {number} pos
 * @return {Node}
*/

class Solution {
  // Function to delete a node at a given position
  deleteAtPosition(head, pos) {
    // Edge case: if position is 1, we need to remove the head node
    if (pos === 1) {
      return head.next; // The new head is the next node
    }

    // Initialize the current pointer to the head
    let current = head;

    // Traverse to the (pos - 1)th node
    for (let i = 1; i < pos - 1 && current !== null; i++) {
      current = current.next;
    }

    // If the node to delete is found and it's not the last node
    if (current !== null && current.next !== null) {
      current.next = current.next.next;  // Skip the node to delete
    }

    // Return the head of the modified list
    return head;
  }
}
