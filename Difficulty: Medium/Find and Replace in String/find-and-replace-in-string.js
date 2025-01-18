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
    for(; i<t; i++) {
        let S = readLine().trim(); 
        let Q = parseInt(readLine());
        let index = readLine().trim().split(" ").map((x) => parseInt(x));
        
        let sources = new Array(Q);
        let targets = new Array(Q);
        let input1 = readLine().trim().split(" ");
        let input2 = readLine().trim().split(" ");
        for(let j = 0;j<Q;j++) sources[j] = input1[j];
        for(let j = 0;j<Q;j++) targets[j] = input2[j];
        let obj = new Solution();
        let res = obj.findAndReplace(S, Q, index, sources, targets);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript
/**
 * @param {string} S
 * @param {number} Q
 * @param {number[]} index
 * @param {string[]} sources
 * @param {string[]} targets
 * @returns {string}
*/

class Solution {
    // Function to find and replace the occurrences of specified words.
    findAndReplace(S, Q, index, sources, targets) {
        // Convert the string S to an array to allow in-place modifications.
        let result = S.split('');
        
        // Iterate through the replacement operations in reverse order.
        // This ensures that the indices are not affected by earlier replacements.
        for (let i = Q - 1; i >= 0; i--) {
            let startIndex = index[i];
            let source = sources[i];
            let target = targets[i];
            
            // Check if the substring at the specified index matches the source.
            if (S.substring(startIndex, startIndex + source.length) === source) {
                // Replace the matching substring in the result array.
                result.splice(startIndex, source.length, ...target);
            }
        }
        
        // Join the result array back into a string and return it.
        return result.join('');
    }
}
