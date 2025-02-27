//{ Driver Code Starts
// Initial Template for javascript

const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output : process.stdout});

let inputLines = [];
let currentLine = 0;

rl.on('line', function(line) { inputLines.push(line); });

rl.on('close', function() {
    let t = parseInt(inputLines[currentLine++]);
    for (let i = 0; i < t; i++) {
        let height = inputLines[currentLine++].split(' ').map(Number);
        let ob = new Solution();
        let ans = ob.countBuildings(height);
        console.log(ans);
    }
});

// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number[]} height
 * @returns {number}
 */

class Solution {
    // Returns count of buildings that can see sunlight
    countBuildings(height) {
        let visibleCount = 0;  // Counter for buildings that can see sunlight
        let maxHeightSoFar = -1;  // Tracks the maximum height encountered so far
        
        for (let i = 0; i < height.length; i++) {
            let currentBuildingHeight = height[i];

            // If current building is taller than all previous buildings, it can see sunlight
            if (currentBuildingHeight > maxHeightSoFar) {
                visibleCount++;
                maxHeightSoFar = currentBuildingHeight;  // Update max height seen so far
            }
        }
        
        return visibleCount;
    }
}
