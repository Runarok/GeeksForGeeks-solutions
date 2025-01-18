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
    s += arr[i] + " ";
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let input_ar1 = readLine().split(" ").map((x) => parseInt(x));
    let n = input_ar1[0];
    let k = input_ar1[1];
    let arr1 =[];
    let input_ar2 = readLine().split(" ").map((x) => parseInt(x));
    for (let i = 0; i < 2*n; i+=2) {
      let arr2 = new Array(2);
      arr2[0] = input_ar2[i];
      arr2[1] = input_ar2[i+1];
      arr1.push(arr2);
    }
  
    let obj = new Solution();
    let res = obj.kClosest(arr1,k);
    let s = "";
    for(let point of res)
    {
      s = s + point[0]+" "+point[1]+" ";
    }

    console.log(s);
  }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[][]} points
 * @param {number} k
 * @returns {number[][]}
 */

class Solution {
    kClosest(points, k) {
        // First, we compute the squared distance for each point and sort based on the criteria.
        points.sort((a, b) => {
            // Calculate the squared distances for both points
            let distA = a[0] * a[0] + a[1] * a[1];
            let distB = b[0] * b[0] + b[1] * b[1];
            
            // First compare by squared distance
            if (distA !== distB) {
                return distA - distB;
            }
            
            // If distances are the same, compare by x-coordinate
            if (a[0] !== b[0]) {
                return a[0] - b[0];
            }
            
            // If x-coordinates are the same, compare by y-coordinate
            return a[1] - b[1];
        });
        
        // Return the first k points after sorting
        return points.slice(0, k);
    }
}
