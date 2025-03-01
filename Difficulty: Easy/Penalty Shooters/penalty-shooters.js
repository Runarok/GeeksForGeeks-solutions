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
        let X = parseInt(input_line[0]);
        let Y = parseInt(input_line[1]);
        let Z = parseInt(input_line[2]);
        
        let obj = new Solution();
        let [c1,c2] = obj.goals(X,Y,Z);
        
        let outputstr = c1 + " " + c2;
        console.log(outputstr);
    
console.log("~");
}
}
// } Driver Code Ends

//User function Template for javascript
/**
 * @param {number} X - Goals scored by player 1.
 * @param {number} Y - Goals scored by player 2.
 * @param {number} Z - Current divisor being checked.
 * @returns {number[]} - An array where first element is goals reduced from player 1, second element is goals reduced from player 2.
*/

class Solution {
    // Function to find how many goals need to be reduced for each player.
    goals(X, Y, Z) {
        // Initialize counters for goals reduced from player 1 and player 2.
        let goalsReducedFromPlayer1 = 0;
        let goalsReducedFromPlayer2 = 0;

        // Loop until Z becomes less than or equal to 1.
        while (Z > 1) {
            if (X % Z === 0) {
                X--;
                goalsReducedFromPlayer1++;
            } else if (Y % Z === 0) {
                Y--;
                goalsReducedFromPlayer2++;
            } else {
                Z--;
            }
        }

        // Return an array containing goals reduced from both players.
        return [goalsReducedFromPlayer1, goalsReducedFromPlayer2];
    }
}
