//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.
//  Driver code

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
        // let k = parseInt(readLine());
        let arr = readLine().split(' ').map(Number);
        let obj = new Solution();
        let res = obj.leftRight(arr);
        if (res === true) {
            console.log("true");
        } else {
            console.log("false");
        }
        // console.log(ans.join(' '));
        tc--;
        console.log("~");
    }
}
// } Driver Code Ends

// User function Template for JavaScript
/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number[]}
 */
class Solution {
    // Function to check if there exists a possible rearrangement where 
    // each element has a count equal to its distance from the ends.
    leftRight(arr) {
        const n = arr.length;

        // Create a frequency map to store the occurrences of each number in the array
        const freqMap = new Map();
        for (let num of arr) {
            freqMap.set(num, (freqMap.get(num) || 0) + 1);
        }

        // Iterate through the array
        for (let i = 0; i < n; i++) {
            // Calculate the left and right distances
            const leftCount = i;
            const rightCount = n - 1 - i;

            // Check if the left count is available in the frequency map and decrement it if found
            if (freqMap.has(leftCount) && freqMap.get(leftCount) > 0) {
                freqMap.set(leftCount, freqMap.get(leftCount) - 1);
            }
            // If the left count is not available, check for the right count
            else if (freqMap.has(rightCount) && freqMap.get(rightCount) > 0) {
                freqMap.set(rightCount, freqMap.get(rightCount) - 1);
            }
            // If neither left nor right counts are available, return false
            else {
                return false;
            }
        }

        // If we reach here, return true, meaning the rearrangement is possible
        return true;
    }
}
