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
        let arr = readLine();
        let obj = new Solution();
        console.log(obj.countSort(arr));
        
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {string} arr
 * @returns {string}
*/

class Solution {
    // Function to arrange all letters of a string in lexicographical
    // order using Counting Sort.
    countSort(arr) {
        const frequencyMap = new Map(); // To store frequency of each character
        const asciiOffset = 'a'.charCodeAt(0); // ASCII value of 'a'
        
        // Count frequency of each character in the string
        for (let char of arr) {
            const index = char.charCodeAt(0) - asciiOffset;
            frequencyMap.set(index, (frequencyMap.get(index) || 0) + 1);
        }
        
        // Find the highest character index present
        const maxIndex = Math.max(...frequencyMap.keys());
        
        // Create an array to store starting index of each character in the sorted output
        const positionArray = new Array(maxIndex + 1).fill(0);
        
        let runningCount = 0;
        for (let i = 0; i < positionArray.length; ++i) {
            positionArray[i] = runningCount;  // Start index for character i
            
            if (frequencyMap.has(i)) {
                runningCount += frequencyMap.get(i);  // Update running count
            }
        }
        
        // Array to build the final sorted result
        let sortedResult = new Array(arr.length);
        
        // Place each character at its correct position
        for (let char of arr) {
            const charIndex = char.charCodeAt(0) - asciiOffset;
            
            const resultIndex = positionArray[charIndex];
            positionArray[charIndex]++;
            
            sortedResult[resultIndex] = char;
        }
        
        return sortedResult.join('');  // Convert array back to string
    }
}
