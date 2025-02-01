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

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+=" ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let R = input_ar1[0];
        let C = input_ar1[1];
        let arr = [];
        for(let i=0;i<R;i++){
            let input_ar2 = readLine().split(' ').map(x=>parseInt(x));
            let a = input_ar2;
            arr.push(a);
        }
        let obj = new Solution();
        let res = obj.helpaterp(arr, R, C);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends


// } Driver Code Ends

// Driver Code Ends

// User function Template for JavaScript
/**
 * @param {number[][]} hospital
 * @returns {number}
*/

class Solution {
    // Function to return Probability.
    helpaterp(hospital) {
        const totalRows = hospital.length;  // Total number of rows in the hospital grid
        if (totalRows === 0) return -1;  // If no rows, return -1
        const totalCols = hospital[0].length;  // Total number of columns in the hospital grid

        // Directions representing up, down, left, right adjacency
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

        // Initialize a queue to process infected patients' locations
        let infectedQueue = [];
        let healthyCount = 0;  // Counter for uninfected (healthy) people

        // Traverse the hospital grid to populate the queue and count healthy people
        for (let row = 0; row < totalRows; row++) {
            for (let col = 0; col < totalCols; col++) {
                if (hospital[row][col] === 2) {
                    infectedQueue.push([row, col, 0]); // [row, col, days since infection]
                } else if (hospital[row][col] === 1) {
                    healthyCount++;  // Count healthy individuals
                }
            }
        }

        // If no healthy individuals, return 0 (no spread needed)
        if (healthyCount === 0) return 0;

        let infectionDays = 0;  // Track the number of days for the infection spread

        // Perform BFS to spread the infection to adjacent healthy cells
        while (infectedQueue.length > 0) {
            const [currentRow, currentCol, currentDays] = infectedQueue.shift();  // Dequeue the next infected person

            // Check all 4 possible directions for infection spread
            for (const [dx, dy] of directions) {
                const nextRow = currentRow + dx;  // New row after movement
                const nextCol = currentCol + dy;  // New column after movement

                // Check if the move is within bounds and the cell is healthy
                if (nextRow >= 0 && nextRow < totalRows && nextCol >= 0 && nextCol < totalCols && hospital[nextRow][nextCol] === 1) {
                    hospital[nextRow][nextCol] = 2;  // Infect the healthy individual
                    infectedQueue.push([nextRow, nextCol, currentDays + 1]);  // Add new infected person to the queue
                    healthyCount--;  // Decrease the number of healthy individuals
                    infectionDays = currentDays + 1;  // Update the day counter for infection
                }
            }
        }

        // If there are still healthy people left, return -1 (impossible to infect all)
        return healthyCount === 0 ? infectionDays : -1;
    }
}
