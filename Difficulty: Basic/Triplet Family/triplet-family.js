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
        let arr = readLine().split(' ').map(Number);
        let ob = new Solution();
        let ans = ob.findTriplet(arr);
        // console.log(ans);
        if (ans) {
            console.log("true");
        } else {
            console.log("false");
        }
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

class Solution {
    /**
     * Function to find if there exists a triplet in the array where the sum of 
     * two elements equals the third element.
     * @param {number[]} arr - The input array.
     * @returns {boolean} Returns true if such a triplet exists, otherwise false.
     */
    findTriplet(arr) {
        arr.sort((a, b) => a - b);  // Sort the array in ascending order
        let n = arr.length;
        
        for (let i = 0; i < n; i++) {
            let l = i - 1;  // Left pointer
            let k = 0;  // Right pointer
            
            // Look for two numbers whose sum equals arr[i]
            while (k < l) {
                let sum = arr[k] + arr[l];
                if (sum === arr[i]) {
                    return true;  // Found a triplet
                } else if (sum > arr[i]) {
                    l--;  // Move left pointer to the right
                } else {
                    k++;  // Move right pointer to the left
                }
            }
        }
        
        return false;  // No such triplet found
    }
}
