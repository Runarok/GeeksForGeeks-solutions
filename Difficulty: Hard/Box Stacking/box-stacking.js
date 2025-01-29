//{ Driver Code Starts
// Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => { inputString += inputStdin; });

process.stdin.on("end", (_) => {
    inputString =
        inputString.trim().split("\n").map((string) => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        // let n = parseInt(readLine());
        let height = readLine().split(' ').map(item => parseInt(item));
        let width = readLine().split(' ').map(item => parseInt(item));
        let length = readLine().split(' ').map(item => parseInt(item));
        let obj = new Solution();
        let res = obj.maxHeight(height, width, length);
        console.log(res);

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} height
 * @param {number[]} width
 * @param {number[]} length
 * @returns {number}
 */

class Solution {
    maxHeight(height, width, length) {
        let N = height.length;
        let boxes = [];
        
        // Generate all possible orientations for the boxes
        for (let i = 0; i < N; i++) {
            let a = height[i], b = width[i], c = length[i];
            // Add all 3 rotations of each box
            boxes.push([a, Math.min(b, c), Math.max(b, c)]);
            boxes.push([b, Math.min(a, c), Math.max(a, c)]);
            boxes.push([c, Math.min(a, b), Math.max(a, b)]);
        }
        
        // Sort the boxes in descending order by their base area (width * length)
        boxes.sort((box1, box2) => (box2[1] * box2[2]) - (box1[1] * box1[2]));
        
        // Memoization object to store results for each box
        let memo = {};
        
        // Helper function to compute the maximum height of the stack starting from box `idx`
        const getHeight = (idx) => {
            if (memo[idx] !== undefined) return memo[idx];
            
            let ans = boxes[idx][0]; // The height of the current box itself
            
            // Try to stack it on top of each previous box in the sorted array
            for (let j = idx + 1; j < boxes.length; j++) {
                // If box[j] can be stacked on box[idx], then update the result
                if (boxes[j][1] < boxes[idx][1] && boxes[j][2] < boxes[idx][2]) {
                    ans = Math.max(ans, boxes[idx][0] + getHeight(j));
                }
            }
            
            memo[idx] = ans; // Store the result in memo
            return ans;
        };
        
        // Try stacking boxes starting from each one
        let result = 0;
        for (let i = 0; i < boxes.length; i++) {
            result = Math.max(result, getHeight(i));
        }
        
        return result;
    }
}
