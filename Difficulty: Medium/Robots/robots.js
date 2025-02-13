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
        let s1 = readLine();
        let s2 = readLine();
        let obj = new Solution();
        let res = obj.moveRobots(s1, s2);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

//User function Template for javascript
/**
 * @param {string} s1
 * @param {string} s2
 * @returns {string}
*/

class Solution {
    // Function to move robots and check if the movement is valid
    moveRobots(s1, s2) {
        let i = 0, j = 0, n = s1.length;

        // Iterate through both strings
        while (i < n && j < n) {
            // If robot in s1 is '#' (empty spot), just move to the next position
            if (s1[i] == '#') {
                i++;
            }
            // If robot in s2 is '#' (empty spot), just move to the next position
            else if (s2[j] == '#') {
                j++;
            }
            // If robots in s1 and s2 do not match, return "No"
            else if (s1[i] != s2[j]) {
                return "No";
            }
            // If 'B' robot in s1 is at a higher index than in s2, return "No"
            else if (s1[i] == 'B' && s2[j] == 'B' && i > j) {
                return "No";
            }
            // If 'A' robot in s1 is at a lower index than in s2, return "No"
            else if (s1[i] == 'A' && s2[j] == 'A' && i < j) {
                return "No";
            }
            // If none of the conditions above are met, move both pointers
            else {
                i++;
                j++;
            }
        }

        // If all conditions are valid, return "Yes"
        return "Yes";
    }
}
