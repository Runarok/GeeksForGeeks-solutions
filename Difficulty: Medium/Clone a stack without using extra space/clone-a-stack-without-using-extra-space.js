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


function main() {
  let t = parseInt(readLine());
  let i = 0;
 
  for (; i < t; i++) {
    let n = parseInt(readLine());
    let st = readLine().trim().split(" ").map((x)=>parseInt(x));
    let cloned = [];
    let obj = new Solution();
    obj.clonestack(st,cloned);
    let flag = 0;
    if(st.length!==cloned.length)
      flag=1;

    if(!flag){
      while(st.length > 0){
        let a = st.pop();
        let b = cloned.pop();
        if(a!==b){
          flag=1;
          break;
        }
      }
    }
    console.log(1-flag);
  }

}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} st
 * @param {number[]} cloned
*/

class Solution {
  clonestack(st, cloned) {
    // Base case: If the original stack is empty, return
    if (st.length === 0) {
      return;
    }

    // Pop the top element from the original stack
    let top = st.pop();

    // Recursively clone the remaining stack
    this.clonestack(st, cloned);

    // Push the current element to the cloned stack (for cloning)
    cloned.push(top);

    // Restore the original stack by pushing the element back
    st.push(top);
  }
}


