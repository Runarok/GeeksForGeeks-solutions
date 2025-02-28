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
        let ans = ob.MaximumSum(arr);
        console.log(ans);
        console.log("~");
        // console.log(ans.join(' '));
        tc--;
    }
}
// } Driver Code Ends

class Solution {
    // Function to find the number of maximum pair sums
    MaximumSum(arr) {
        let maxElement = -Infinity;  // Variable to store the maximum element in the array
        let secondMaxElement = -Infinity;  // Variable to store the second maximum element

        // Find the maximum element in the array
        for (let i = 0; i < arr.length; i++) {
            if (maxElement < arr[i]) {
                maxElement = arr[i];
            }
        }

        // Find the second maximum element that is not equal to the maximum element
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== maxElement) {
                if (secondMaxElement < arr[i]) {
                    secondMaxElement = arr[i];
                }
            }
        }

        let maxCount = 0, secondMaxCount = 0;  // Variables to count occurrences of max and second max elements

        // Count how many times the maximum and second maximum elements appear in the array
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === maxElement) {
                maxCount++;
            } else if (arr[i] === secondMaxElement) {
                secondMaxCount++;
            }
        }

        // If the maximum element appears more than once, calculate the number of pairs from maxCount
        if (maxCount > 1) {
            return (maxCount * (maxCount - 1)) / 2;
        } else {
            // Otherwise, return the number of pairs formed by maxCount and secondMaxCount
            return maxCount * secondMaxCount;
        }
    }
}
