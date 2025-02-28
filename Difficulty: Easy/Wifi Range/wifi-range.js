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
        let inputArr = readLine().trim().split(" ").map((x) => parseInt(x));
        let N = inputArr[0];
        let X = inputArr[1];
        let S = readLine().trim();
        let obj = new Solution();
        let res = obj.wifiRange(N, S, X);
        console.log(Number(res));
    
console.log("~");
}
}
// } Driver Code Ends

//User function Template for javascript

/**
 * @param {number} N - Number of rooms
 * @param {string} S - String representing rooms with or without WiFi access points ('1' means access point, '0' means no access point)
 * @param {number} X - Range of each WiFi access point
 * @returns {boolean} - Whether all rooms have WiFi coverage
 */

class Solution {
    wifiRange(N, S, X) { 
        let lastAP = -1;  // Tracks the position of the last seen access point
        
        for (let i = 0; i < N; i++) {
            if (S[i] === '1') {
                // Current room has a WiFi access point
                lastAP = i;
            }
            
            if (S[i] === '0') {
                // Current room does not have an access point
                if (lastAP !== -1) {
                    // There is a previously seen access point
                    if (i - lastAP <= X) {
                        // This room is within the coverage of the last access point
                        continue;
                    }
                }

                // Check if there is a future access point within range
                let hasFutureAP = false;
                for (let j = i + 1; j <= i + X && j < N; j++) {
                    if (S[j] === '1') {
                        hasFutureAP = true;
                        break;
                    }
                }

                if (!hasFutureAP) {
                    // No future access point to cover this room
                    return false;
                }
            }
        }
        
        return true; // All rooms are covered
    }
}
