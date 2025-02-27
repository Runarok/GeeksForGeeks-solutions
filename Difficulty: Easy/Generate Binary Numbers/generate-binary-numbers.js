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
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let obj = new Solution();
        let res = obj.generate(n);
        let s = '';
        for(let i=0; i<res.length; i++){
            s += res[i] + " ";
        }
        console.log(s);
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number} N - Number up to which binary numbers should be generated
 * @returns {String[]} - Array of binary numbers as strings
 */

class Solution {
    // Function to generate binary numbers from 1 to N using a queue.
    generate(N) {
        let result = [];  // Array to store binary numbers
        
        let queue = [];   // Queue to generate binary numbers
        let queueStartIndex = 0;  // Simulate queue front using array index
        
        // Start by pushing the first binary number "1"
        queue.push("1");
        
        // Process exactly N binary numbers
        while (N--) {
            // Get the front element from the queue and move the start index
            let binaryNumber = queue[queueStartIndex];
            queueStartIndex++;
            
            // Add the binary number to the result list
            result.push(binaryNumber);
            
            // Generate the next two binary numbers by appending "0" and "1"
            queue.push(binaryNumber + "0");
            queue.push(binaryNumber + "1");
        }
        
        // Return the final list of binary numbers
        return result;
    }
}
