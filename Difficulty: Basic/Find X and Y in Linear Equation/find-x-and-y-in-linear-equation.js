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

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let [A, B, N] = readLine().trim().split(" ").map((x) => parseInt(x));;
        let obj = new Solution();
        let res = obj.findXandY(A, B, N);
        let s = "";
        for(let it of res){
            s+=it+" ";
        }
        console.log(s);
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number} A - First coefficient
 * @param {number} B - Second coefficient
 * @param {number} N - Target sum
 * @returns {number[]} - An array containing values of X and Y, or [-1, -1] if no solution exists
 */

class Solution {
    // Function to find values of X and Y such that A*X + B*Y = N
    findXandY(A, B, N) {
        // Iterate through all possible values of X
        for (let X = 0; X <= N; X++) {
            // Iterate through all possible values of Y
            for (let Y = 0; Y <= N; Y++) {
                const sum = A * X + B * Y; // Calculate the current sum
                
                if (sum === N) {
                    return [X, Y]; // Return the first valid solution found
                } else if (sum > N) {
                    break; // Stop inner loop if the sum exceeds N
                }
            }
        }
        return [-1, -1]; // Return [-1, -1] if no valid (X, Y) pair is found
    }
}
