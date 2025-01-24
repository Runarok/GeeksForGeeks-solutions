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
  constructor(x) {
    this.data = x;
    this.prev = null;
    this.next = null;
  }
}

function printList(head) {
  let s = "";
  while (head) {
    s += head.data;
    s += " ";
    head = head.next;
  }
  console.log(s);
}

function verify(head) {
  let fl = 0;
  let bl = 0;
  let temp = head;

  while (temp.next !== null) {
    temp = temp.next;
    fl++;
  }

  while (temp.prev !== null) {
    temp = temp.prev;
    bl++;
  }

  return fl == bl;
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let n = parseInt(readLine());
    let arr = readLine()
      .trim()
      .split(" ")
      .map((x) => parseInt(x));
    let head = new Node(arr[0]);
    let tail = head;
    for (let j = 1; j < n; j++) {
      let temp = new Node(arr[j]);
      tail.next = temp;
      temp.prev = tail;
      tail = tail.next;
    }
    let obj = new Solution();
    let list = obj.displayList(head);
    let s = "";
    for (let node of list) {
      s += node;
      s += " ";
    }
    console.log(s);
    s = "";
    for (let i = list.length - 1; i >= 0; i--) {
      s += list[i];
      s += " ";
    }
    console.log(s);
  
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/*LINKED LIST NODE
class Node {
  constructor(x){
    this.data = x;
    this.prev = null;
    this.next = null;
  }
}
*/

/**
 * @param {Node} head
 * @return {number[]}
 */

class Solution {
  displayList(head) {
    let v = [];
    let temp = head;
    
    // Traverse the linked list from head to tail
    while (temp) {
      v.push(temp.data);  // Push data of the current node to the array
      temp = temp.next;   // Move to the next node
    }
    
    return v;  // Return the array with node data
  }
}

