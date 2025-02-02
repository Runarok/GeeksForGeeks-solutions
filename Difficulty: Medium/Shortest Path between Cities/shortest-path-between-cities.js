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
        let x = parseInt(input_line[0]);
        let y = parseInt(input_line[1]);
        
        let obj = new Solution();
    
        let res = obj.shortestPath(x, y);
    
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number} x
 * @param {number} y
 * @returns {number}
*/

class Solution {
    // Function to find the shortest path from x to y
    shortestPath(x, y) {
        let steps = 0; // Initialize the number of steps
        // Swap x and y to ensure x is the smaller value
        if (x > y) {
            [x, y] = [y, x];
        }

        // Continue until both values are equal
        while (x !== y) {
            if (x < y) {
                y = Math.floor(y / 2); // Divide y by 2 if x is smaller
            } else {
                x = Math.floor(x / 2); // Divide x by 2 if y is smaller
            }
            steps++; // Increment the step count
        }

        return steps; // Return the total number of steps
    }
}
