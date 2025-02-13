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

function printArray(res, n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];;
        s+=" "; 
    }
    console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let n = parseInt(readLine());
    let input = readLine().split(' ').map(x => parseInt(x));
    let arr = [];
    for(let i=0;i<n;i++){
        arr.push(input[i]);
    }
    let obj = new Solution();
    let res = obj.factorial(arr, n);
    printArray(res,res.length);
  
console.log("~");
}
}


// } Driver Code Ends


//User function Template for javascript


/**
 * @param {number[]} a
 * @param {number} n
 * @returns {number}
 */

class Solution {
    factorial(a, n){
        // Define the modulus value to avoid overflow
        const MOD = 1000000007;

        // Find the maximum number in the input array to limit the range of factorials
        let max = Math.max(...a);

        // Create an array to store the factorials of numbers from 0 to max
        let factorials = new Array(max + 1).fill(1);

        // Compute the factorials modulo MOD for numbers from 2 to max
        for (let i = 2; i <= max; i++) {
            factorials[i] = (factorials[i - 1] * i) % MOD;
        }

        // Create an array to store the factorial values corresponding to the input array
        let factArr = new Array(n);
        for (let i = 0; i < n; i++) {
            factArr[i] = factorials[a[i]];
        }

        // Return the array of factorials
        return factArr;
    }
}
