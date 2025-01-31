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

let a = null;
let b = null;

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let n = parseInt(readLine());
    let arr = readLine().trim().split(" ").map((x) => parseInt(x));
    let list = new Node(arr[0]);
    let tail = list;
    for(let j = 1;j<n;j++){
      tail.next = new Node(arr[j]);
      tail = tail.next;
    }
    
    let obj = new Solution();
    let res = obj.isSorted(list);
    console.log(Number(res));
  
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
 * @return {boolean}
*/

class Solution {
  isSorted(head) {
    if (!head || !head.next) return true; // If the list is empty or has one element, it's sorted

    let current = head;
    let isNonIncreasing = true;
    let isNonDecreasing = true;

    // Traverse the list to check if it is non-decreasing or non-increasing
    while (current.next !== null) {
      if (current.data > current.next.data) {
        isNonDecreasing = false;
      }
      if (current.data < current.next.data) {
        isNonIncreasing = false;
      }
      current = current.next;
    }

    // Return true if either non-decreasing or non-increasing, else false
    return isNonDecreasing || isNonIncreasing;
  }
}
