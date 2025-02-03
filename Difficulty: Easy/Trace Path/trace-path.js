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
        let input_ar0 = readLine().split(' ').map(x=>parseInt(x));
        let n = input_ar0[0];
        let m = input_ar0[1];
        let s = readLine();
        let obj = new Solution();
        let res = obj.isPossible(n, m, s);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number} n
 * @param {number} m
 * @param {string} s
 * @returns {boolean}
*/

class Solution {
    /**
     * Function to determine if it is possible to form the number n
     * based on the movements described in string s.
     * 
     * @param {number} n
     * @param {number} m
     * @param {string} s
     * @returns {boolean}
     */
    isPossible(n, m, s)
    {
        let leftLimit = 0, rightLimit = 0, upLimit = 0, downLimit = 0;
        let horizontalMovement = 0, verticalMovement = 0;
        
        // Iterate through the string s to track movement in different directions
        for (let i = 0; i < s.length; i++) {
            // Update horizontal movement based on 'L' and 'R'
            if (s[i] === 'L') {
                horizontalMovement -= 1;
            } else if (s[i] === 'R') {
                horizontalMovement += 1;
            }
            // Update vertical movement based on 'U' and 'D'
            else if (s[i] === 'U') {
                verticalMovement += 1;
            } else {
                verticalMovement -= 1;
            }

            // Track the maximum right and left movement
            if (horizontalMovement >= 0) {
                rightLimit = Math.max(horizontalMovement, rightLimit);
            } else {
                leftLimit = Math.min(horizontalMovement, leftLimit);
            }
            
            // Track the maximum up and down movement
            if (verticalMovement >= 0) {
                upLimit = Math.max(verticalMovement, upLimit);
            } else {
                downLimit = Math.min(verticalMovement, downLimit);
            }
        }
        
        // Check if the movement fits within the given constraints
        if (rightLimit + 1 - leftLimit <= m && upLimit + 1 - downLimit <= n) {
            return 1;  // It's possible
        }
        return 0;  // Not possible
    }
}
