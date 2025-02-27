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
        
        input_line = readLine().split(' ');
        let s = new Array(n);
        for(let i=0;i<n;i++){
            s[i] = input_line[i];
        }
        
        input_line = readLine().split(' ');
        let word1 = input_line[0];
        
        input_line = readLine().split(' ');
        let word2 = input_line[0];
        
        let obj = new Solution();
        let ans = obj.shortestDistance(s, word1, word2);
        console.log(ans);
    
console.log("~");
}
}

// } Driver Code Ends

//User function Template for javascript

/**
 * @param {string[]} s - Array of words
 * @param {string} word1 - First target word
 * @param {string} word2 - Second target word
 * @returns {number} - Shortest distance between word1 and word2
*/
class Solution {
    //Function to find the shortest distance between two words.
    shortestDistance(s, word1, word2) {
        let lastPositionWord1 = -1;  // Stores the last seen position of word1
        let lastPositionWord2 = -1;  // Stores the last seen position of word2
        let minimumDistance = Infinity;  // Tracks the minimum distance between the two words

        for (let index = 0; index < s.length; index++) {
            if (s[index] === word1) {
                lastPositionWord1 = index;  // Update position if word1 is found
            } 
            if (s[index] === word2) {
                lastPositionWord2 = index;  // Update position if word2 is found
            }
            
            // If both words have been seen at least once, calculate distance
            if (lastPositionWord1 !== -1 && lastPositionWord2 !== -1) {
                const currentDistance = Math.abs(lastPositionWord1 - lastPositionWord2);
                minimumDistance = Math.min(minimumDistance, currentDistance);
            }
        }

        // If no valid distance was found, return -1, otherwise return the minimum distance
        return minimumDistance === Infinity ? -1 : minimumDistance;
    }
}
