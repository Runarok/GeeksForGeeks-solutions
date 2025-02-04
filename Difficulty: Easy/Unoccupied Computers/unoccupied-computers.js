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
        let s = readLine();
        let obj = new Solution();
        let res = obj.solve(n,s);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number} n
 * @param {string} s
 * @returns {number}
*/

class Solution
{
    //Function to find the answer.
    solve(n, s)
    {
        // Create an array to track the visited characters, initialized to 0
        let visitedArr = new Array(26);
        for (let i = 0; i < visitedArr.length; i++) {
            visitedArr[i] = 0; // 0: Not visited, 1: Allocated, 2: Freed
        }

        let notAllocated = 0;

        // Loop through each character of the string
        for (let i = 0; i < s.length; i++) {
            let index = s.charCodeAt(i) - 65;  // Convert character to index (A = 0, B = 1, ..., Z = 25)

            // If character is not yet allocated
            if (visitedArr[index] === 0) {
                // If there are still unallocated spots, allocate one
                if (n > 0) {
                    n--;
                    visitedArr[index] = 2;  // Mark as allocated
                } else {
                    visitedArr[index] = 1;  // Mark as not allocated
                    notAllocated++;  // Increment the count of not allocated characters
                }
            } 
            // If the character was previously allocated, free it up and increase n
            else if (visitedArr[index] === 2) {
                n++;
            }
        }
        return notAllocated;  // Return the number of characters that couldn't be allocated
    }
}
