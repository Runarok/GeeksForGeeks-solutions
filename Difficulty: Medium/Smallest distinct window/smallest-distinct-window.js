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
        let s = readLine().trim();
        let obj = new Solution();
        let res = obj.findSubString(s);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for javascript

/**
 * @param {string} s
 * @return {number}
 */

class Solution {
    findSubString(s) {
        // Step 1: Create a map to count occurrences of each character in the string
        let map = new Map();
        for (let i = 0; i < s.length; i++) {
            if (map.has(s[i])) {
                map.set(s[i], map.get(s[i]) + 1);
            } else {
                map.set(s[i], 1);
            }
        }

        // Step 2: Get the number of unique characters
        let noOfUniqueElements = map.size;

        let i = 0;  // Left pointer
        let j = 0;  // Right pointer

        let map1 = new Map();  // To count occurrences in the sliding window
        let minWindowSize = s.length;  // Initialize the minimum window size as the length of the string

        // Step 3: Traverse the string with two pointers
        while (j < s.length) {
            // Add the character at the right pointer to map1
            if (map1.has(s[j])) {
                map1.set(s[j], map1.get(s[j]) + 1);
            } else {
                map1.set(s[j], 1);
            }

            // Step 4: Check if the current window contains all unique characters
            if (map1.size === noOfUniqueElements) {
                let size = j - i + 1;  // Calculate the window size
                if (size < minWindowSize) {
                    minWindowSize = size;  // Update the minimum window size if a smaller one is found
                }

                // Step 5: Move the left pointer to reduce the window size while maintaining all unique characters
                if (map1.get(s[i]) > 1) {
                    while (map1.get(s[i]) > 1) {
                        map1.set(s[i], map1.get(s[i]) - 1);
                        i++;
                    }
                    size = j - i + 1;
                    if (size < minWindowSize) {
                        minWindowSize = size;  // Update the minimum window size
                    }
                }
            }

            // Move the right pointer to explore the next character
            j++;
        }

        // Return the minimum window size that contains all unique characters
        return minWindowSize;
    }
}
