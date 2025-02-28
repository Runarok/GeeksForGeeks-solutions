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
        let ans = ob.findMinimumIF(arr);
        console.log(ans);
        // console.log(ans.join(' '));
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

// User function Template for JavaScript
class Solution {
    // Function to find the minimum difference between reversed numbers in the array.
    findMinimumIF(arr) {
        // Helper function to reverse a given number
        const reverseNumber = (num) => {
            let reversed = 0;

            // Reverse the digits of the number
            while (num !== 0) {
                let lastDigit = num % 10;
                reversed = reversed * 10 + lastDigit;
                num = Math.floor(num / 10);
            }

            // Return the reversed number
            return reversed;
        };

        // Reverse all numbers in the array and store the result
        let reversedArr = arr.map(num => reverseNumber(num));

        // Sort the reversed array in ascending order
        reversedArr.sort((a, b) => a - b);

        // Initialize the minimum difference as infinity
        let minDifference = Infinity;

        // Iterate through the sorted array to find the minimum difference between adjacent elements
        for (let i = 1; i < reversedArr.length; i++) {
            let difference = Math.abs(reversedArr[i] - reversedArr[i - 1]);
            if (difference < minDifference) {
                minDifference = difference;
            }
        }

        // Return the minimum difference found
        return minDifference;
    }
}
