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
        let N = parseInt(readLine());
        let obj = new Solution();
        let res = obj.checkDoorStatus(N);
        let s = "";
        for(let it of res){
            s+=it+" ";
        }
        console.log(s);
    
console.log("~");
}
}

// } Driver Code Ends

class Solution {
    /**
     * Function to check the status of doors after multiple toggles
     * based on the pattern described.
     * 
     * @param {number} N - The number of doors.
     * @returns {number[]} - Array representing the status of each door (1 for open, 0 for closed).
     */
    checkDoorStatus(N) {
        // Initialize an array to represent the door statuses (0: closed)
        let result = Array(N).fill(0);
        
        // Iterate through each door toggle pattern
        for (let i = 1; i <= result.length; i++) {
            if (i === 1) {
                // Fill the entire array with 1s (open doors)
                result.fill(1);
            } else {
                // Toggle the doors based on the pattern
                let count = 1;
                while (i * count <= result.length) {
                    // Toggle the door at position (i * count) - 1
                    this.toggleBits(result, (i * count) - 1);
                    count++;
                }
            }
        }
        
        // Return the final state of all doors
        return result;
    }
    
    /**
     * Function to toggle the state of a door (from open to closed, or closed to open).
     * 
     * @param {number[]} arr - Array representing door statuses.
     * @param {number} position - Index of the door to toggle.
     */
    toggleBits(arr, position) {
        if (arr[position] === 0) {
            arr[position] = 1; // Door is open
        } else {
            arr[position] = 0; // Door is closed
        }
    }
}
