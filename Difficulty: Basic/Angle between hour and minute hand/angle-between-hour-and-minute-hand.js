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
        let [H,M] = readLine().trim().split(" ").map((x) => parseInt(x));
        

        let obj = new Solution();
        let res = obj.getAngle(H,M);
        console.log(res);
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number} H - Hours
 * @param {number} M - Minutes
 * @return {number} - Smallest angle between hour and minute hand
 */

class Solution {
    getAngle(H, M) {
        // Calculate the angle of the hour hand
        let hourAngle = (H % 12) * 30 + (M / 60) * 30;
        
        // Calculate the angle of the minute hand
        let minuteAngle = M * 6;
        
        // Find the absolute difference between the two angles
        let angle = Math.abs(hourAngle - minuteAngle);
        
        // The smaller angle between the two possible angles
        return Math.floor(Math.min(angle, 360 - angle));
    }
}
