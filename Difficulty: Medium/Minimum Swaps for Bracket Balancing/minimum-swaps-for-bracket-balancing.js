//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let S = String(readLine());
        let obj = new Solution();
        console.log(obj.minimumNumberOfSwaps(S));

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {string} s
 * @returns {number}
 */

class Solution {
    minimumNumberOfSwaps(s) {
        let ans = 0;
        let count = 0; // To store the count of '['
        let n = s.length;
        s = s.split(''); // Convert string to an array for easier manipulation
        
        // Traverse over the string
        for (let i = 0; i < n; i++) {
            // When '[' encounters
            if (s[i] === '[') {
                count += 1;
            }
            // When ']' encounters
            else {
                count -= 1;
            }
            // When count becomes less than 0 (more ']' than '[' up to this point)
            if (count < 0) {
                // Start searching for '[' from (i + 1)th index
                let j = i + 1;
                while (j < n) {
                    // When jth index contains '['
                    if (s[j] === '[') {
                        break;
                    }
                    j++;
                }
                // Increment the answer by how far we need to move '[' to balance
                ans += j - i;
                
                // Set count to 1 again as we've fixed the imbalance
                count = 1;
                
                // Bring the character at jth position to ith position
                // and shift all characters from i to j-1 towards the right
                let ch = s[j];
                for (let k = j; k > i; k--) {
                    s[k] = s[k - 1];
                }
                s[i] = ch;
            }
        }
        return ans;
    }
}
