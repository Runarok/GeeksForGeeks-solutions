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
        let a = parseInt(readLine());
        let b = parseInt(readLine());
        let ob = new Solution();
        ob.threeWayPartition(arr, a, b);
        let ia = 0;
        let ib = 0;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= a) {
                ia = i;
                break;
            }
        }

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > b) {
                ib = i;
                break;
            }
        }

        let f = 0;

        for (let i = 0; i < ia; i++) {
            if (arr[i] >= a) {
                f = 1;
                break;
            }
        }

        for (let i = ia; i < ib; i++) {
            if (arr[i] > b || arr[i] < a) {
                f = 1;
                break;
            }
        }

        for (let i = ib; i < arr.length; i++) {
            if (arr[i] < b) {
                f = 1;
                break;
            }
        }

        if (f === 1) {
            console.log("false");
        } else {
            console.log("true");
        }
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 */

class Solution {
    // Function to partition the array into three parts based on the range [a, b]
    threeWayPartition(arr, a, b) {
        // Arrays to store values based on the comparison with a and b
        let smallerThanA = [];  // Stores elements smaller than 'a'
        let inRangeAB = [];      // Stores elements in the range [a, b]
        let greaterThanB = [];   // Stores elements greater than 'b'

        // Step 1: Partition the array into three different arrays
        for (let num of arr) {
            if (num < a) {
                smallerThanA.push(num);  // Add numbers smaller than 'a'
            } else if (num > b) {
                greaterThanB.push(num);  // Add numbers greater than 'b'
            } else {
                inRangeAB.push(num);     // Add numbers in the range [a, b]
            }
        }

        // Step 2: Concatenate the three arrays to maintain the order
        let result = [...smallerThanA, ...inRangeAB, ...greaterThanB];

        // Step 3: Modify the original array with the newly ordered elements
        for (let i = 0; i < arr.length; i++) {
            arr[i] = result[i];
        }

        // The original array 'arr' is now partitioned correctly
    }
}
