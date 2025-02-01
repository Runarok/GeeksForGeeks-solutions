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

/* Function to print an array */
function printArray(arr, size) {
  let i;
  let s = "";
  for (i = 0; i < size; i++) {
    if(arr[i] == -0)
      arr[i] = 0;
    s += arr[i] + " ";
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let ob = new Queue();
    let Q = parseInt(readLine());
    let s = "";
    let qs = readLine().split(" ").map((x)=>parseInt(x));
    let j = 0;
    while(j<qs.length){
      if(qs[j]===1){
        let x = qs[j+1];
        j++;
        ob.enqueue(x);
      }else{
       s=s+ob.dequeue()+" "; 
      }
      j++;
    }
    console.log(s);
  
console.log("~");
}
}
// } Driver Code Ends

// User function Template for javascript

class Queue {
  constructor(){
      // Initialize two stacks (s1 and s2)
      this.s1 = [];
      this.s2 = [];
  }

  /**
   * @param {number} x
   */
  // Function to enqueue an element into the queue.
  enqueue(x){
      // Move all elements from stack s1 to stack s2
      while(this.s1.length != 0){
          this.s2.push(this.s1.pop());
      }
      
      // Push the new element x into stack s1
      this.s1.push(x);
      
      // Move all elements back from stack s2 to stack s1, maintaining the correct order
      while(this.s2.length != 0){
          this.s1.push(this.s2.pop());
      }
  }

  /**
   * @return {number}
   */
  // Function to dequeue an element from the queue.
  dequeue(){
      // If stack s1 is empty, return -1 indicating the queue is empty
      if(this.s1.length == 0){
          return -1;
      }
      
      // Pop and return the last element from stack s1, which represents the front of the queue
      let x = this.s1[this.s1.length - 1]; // Last element (front of the queue)
      this.s1.pop(); // Remove the element from s1
      return x; // Return the dequeued element
  }
}
