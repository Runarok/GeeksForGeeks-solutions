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

function main() {
    let t = parseInt(readLine());
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);
        
        let arr = readLine().split(' ');
        for(let i=0; i<n; i++){
            arr[i] = parseInt(arr[i]);  
        }
        
        let penalty = readLine().split(' ');
        for(let i=0; i<n; i++){
            penalty[i] = parseInt(penalty[i]);  
        }
        

        let obj = new Solution();
        let res = obj.totalTime(n, arr, penalty);
        console.log(res);
    
console.log("~");
}
}





// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number} n
 * @param {number[]} arr
 * @param {number[]} penalty
 * @returns {number}
 */

class Solution {
    // Function to find the total time required to solve all the problems
    totalTime(n, arr, penalty) {
        let k = 0; // Variable to keep track of the total time
        let mp = {}; // Map to store the frequency of problems solved

        // Loop through the array of problems solved
        for (let i = 0; i < arr.length; i++) {
            // If the problem has not been solved yet
            if (mp[arr[i]] === undefined) {
                // If this is not the first problem, increment the time
                if (i !== 0) {
                    k++;
                }
                // Mark the problem as solved
                mp[arr[i]] = 1;
            } else {
                // If the problem is solved again, add the penalty time
                k += penalty[arr[i] - 1];
            }
        }

        // Return the total time
        return k;
    }
}
