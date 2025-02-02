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
    let N = parseInt(readLine());
    let arr = [];
    for(let j = 0;j < N-1;j++){
      let edge = readLine().trim().split(" ").map((x)=>parseInt(x));
      arr.push(edge);
    }
    let obj = new Solution();
    let res = obj.maxBinTreeGCD(arr,N);
    console.log(res);
  
console.log("~");
}

}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[][]} arr
 * @param {number} N
 * @return {number}
*/

class Solution {
    /**
     * Function to compute the Greatest Common Divisor (GCD) of two numbers.
     * @param {number} a - The first number.
     * @param {number} b - The second number.
     * @returns {number} - The GCD of a and b.
     */
    gcd(a, b) {
        if (b === 0) return a;
        return this.gcd(b, a % b);  // Recursively find the GCD
    }

    /**
     * Function to find the maximum GCD of consecutive elements in the array after sorting by first element.
     * @param {number[][]} arr - The input array of pairs [x, y].
     * @param {number} N - The size of the array.
     * @returns {number} - The maximum GCD of consecutive elements in the sorted array.
     */
    maxBinTreeGCD(arr, N) {
        // If N is 0, 1, or 2, return 0 since it's not possible to find a meaningful GCD.
        if (N === 0 || N === 1 || N === 2) return 0;

        let maxGCD = 0;  // Variable to store the maximum GCD

        // Sort the array by the first element in each pair
        arr.sort((a, b) => a[0] - b[0]);

        // Iterate through the array to find the GCD of consecutive elements with the same first value
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i][0] === arr[i + 1][0]) {  // Check if first elements are the same
                // Calculate the GCD of the second elements and update maxGCD if it's larger
                maxGCD = Math.max(maxGCD, this.gcd(arr[i][1], arr[i + 1][1]));
            }
        }

        return maxGCD;  // Return the maximum GCD found
    }
}
