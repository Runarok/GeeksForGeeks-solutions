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
        let ob = new Solution();
        let ans = ob.FindElement(arr);
        console.log(ans);
        console.log("~");
        // console.log(ans.join(' '));
        tc--;
    }
}
// } Driver Code Ends

// User function Template for JavaScript
/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    // Function to find the number
    // of maximum pair sums
    FindElement(arr) {
        const size = arr.length;

        // If the array has only one element, return that element
        if (size == 1) return arr[size - 1];

        let b_l = arr[0];  // b_l stores the largest element found so far
        let x = arr[0];    // x is the element we search for

        // Iterate through the array
        for (let i = 1; i < size; i++) {
            if (x === null && arr[i] > b_l) {
                // If x is null and we find an element greater than b_l
                x = arr[i];
                b_l = x; // Update b_l
            } else if (x != null) {
                // If x is not null, check if current element is greater than x
                if (arr[i] > x) {
                    if (arr[i] > b_l) {
                        b_l = arr[i]; // Update b_l if current element is the largest
                    }
                } else {
                    x = null; // Reset x if current element is not greater than x
                }
            }
        }

        // If x is null, no element satisfies the condition, return -1
        if (x === null) return -1;

        // Return the value of x
        return x;
    }
}
