//{ Driver Code Starts
// Initial Template for javascript

// Driver code
const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output : process.stdout});

let inputLines = [];
let currentLine = 0;

rl.on('line', (line) => { inputLines.push(line.trim()); });

rl.on('close', () => { main(); });

function readLine() { return inputLines[currentLine++]; }

function main() {
    let tc = parseInt(readLine());
    while (tc > 0) {
        let k = parseInt(readLine());
        let arr1 = readLine().split(' ').map(Number);
        let arr2 = readLine().split(' ').map(Number);
        let ob = new Solution();
        let ans = ob.maxPoint(k, arr1, arr2);
        console.log(ans);
        console.log("~");
        tc--;
    }
}

// } Driver Code Ends

// User function Template for JavaScript

class Solution {
    maxPoint(k, arr1, arr2) { 
        // Variable to store the maximum points achievable
        let maximumPoints = 0;

        // Iterating through each task
        for (let i = 0; i < arr1.length; i++) { 
            // Calculating the number of times the task can be performed within the given time
            let time = Math.floor(k / arr1[i]);

            // Calculating the total points earned for this task
            let points = time * arr2[i];

            // Updating the maximum points if the current task yields more points
            maximumPoints = Math.max(maximumPoints, points);
        }

        // Returning the maximum points achievable
        return maximumPoints;
    }
}
