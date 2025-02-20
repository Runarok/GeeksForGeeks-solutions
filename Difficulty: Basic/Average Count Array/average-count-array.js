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
        let arr = readLine().split(' ').map(Number);
        let k = parseInt(readLine());
        let ob = new Solution();
        let ans = ob.countArray(arr, k);
        console.log(ans.join(' '));
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

// Back-end complete function Template for JavaScript
class Solution {
    // Function to count the occurrences of numbers in the array
    countArray(arr, x) {
        const n = arr.length; // Length of the input array
        const resultArray = []; // Array to store the counts

        // Creating a frequency map to count occurrences of each number in arr
        const frequencyMap = new Map();
        for (let num of arr) {
            frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
        }

        // Populating the result array
        for (let num of arr) {
            const targetValue = Math.floor((num + x) / 2); // Compute the target value
            resultArray.push(frequencyMap.get(targetValue) || 0); // Store its frequency
        }

        return resultArray;
    }
}
