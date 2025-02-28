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
        let ans = ob.countFreq(arr);
        // console.log(ans);
        console.log(ans.join(' '));
        tc--;
        console.log("~");
    }
}
// } Driver Code Ends

// User function Template for javascript
/**
 * @param {number[]} arr
 * @returns {Object}
 */

class Solution {
    // Function to count the frequency of all elements from 1 to N in the array.
    countFreq(arr) {
        // Initialize an empty object to store the frequency of each element
        let frequencyMap = {};

        // Count the frequency of each element in the array
        for (let i = 0; i < arr.length; i++) {
            // If the element is not in the frequency map, initialize its count to 1
            if (frequencyMap[arr[i]] === undefined) {
                frequencyMap[arr[i]] = 1;
            } else {
                // If the element is already in the map, increment its count
                frequencyMap[arr[i]]++;
            }
        }

        // Get the distinct elements (keys of the map), convert them to numbers, and sort them in ascending order
        let sortedUniqueElements = Object.keys(frequencyMap).map(Number).sort((a, b) => a - b);

        let result = [];  // Array to store the cumulative frequency for each element
        let cumulativeSum = 0;  // Variable to track the cumulative frequency

        // Calculate the cumulative frequency for each distinct element
        for (let i = 0; i < sortedUniqueElements.length; i++) {
            // Add the frequency of the current element to the cumulative sum
            cumulativeSum += frequencyMap[sortedUniqueElements[i]];

            // Add the cumulative sum to the result array
            result.push(cumulativeSum);
        }

        // Return the result array containing the cumulative frequencies
        return result;
    }
}
