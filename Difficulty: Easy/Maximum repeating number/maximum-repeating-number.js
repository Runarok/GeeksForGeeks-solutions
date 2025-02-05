//{ Driver Code Starts
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
        let arr = readLine().split(' ').map(Number);
        let ob = new Solution();
        let ans = ob.maxRepeating(k, arr);
        console.log(ans);
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {
    // Function to find the element that repeats the maximum number of times in the array
    // If there are multiple elements with the same frequency, return the smallest one.
    maxRepeating(k, arr) {
        // Create a map to store the frequency of each element in the array
        var map = new Map();
        
        // Traverse the array and update the frequency count in the map
        for (var i = 0; i < arr.length; i++) {
            map.set(arr[i], (map.get(arr[i]) || 0) + 1);
        }
        
        // Initialize variables to keep track of the maximum repetition count and the smallest element with that count
        var max_rep = Number.MIN_VALUE;
        var min_ele = Number.MAX_VALUE;
        
        // Traverse the map to find the element with the highest repetition
        for (var [key, value] of map) {
            // If a higher repetition is found, update the max repetition and the corresponding element
            if (value >= max_rep) {
                // If there is a tie in the repetition count, choose the smaller element
                if (value == max_rep && key > min_ele) {
                    continue;
                } else {
                    min_ele = key;
                    max_rep = value;
                }
            }
        }
        
        // Return the element with the maximum repetition (or smallest in case of a tie)
        return min_ele;
    }
}
