//{ Driver Code Starts
const readline = require('readline')
                     .createInterface({input : process.stdin, output : process.stdout});

const input = [];
readline.on('line', (line) => { input.push(line); }).on('close', () => {
    const t = parseInt(input[0], 10);
    for (let i = 1; i <= t; i++) {
        const arr = input[i].split(' ').map(Number);
        const ob = new Solution();
        console.log(ob.maxDistance(arr));
        console.log("~");
    }
});
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number[]} arr
 * @return {number}
 */

class Solution {

    maxDistance(arr) {
        let result = 0; // Initialize result to keep track of maximum distance
        let newMap = {}; // Create an object to store the first occurrence index of each element
        
        // Iterate over the array to compute the maximum distance
        for (let i = 0; i < arr.length; i++) {
            if (newMap[arr[i]] === undefined) {
                // If the element is not in the map, store its first occurrence index
                newMap[arr[i]] = i;
            } else {
                // If the element is found again, calculate the distance from its first occurrence
                let res = i - newMap[arr[i]];
                // Update the result with the maximum distance found so far
                result = Math.max(res, result);
            }
        }
        
        return result; // Return the maximum distance found
    }
}
