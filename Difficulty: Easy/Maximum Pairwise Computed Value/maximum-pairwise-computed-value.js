//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.
const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output : process.stdout});

let inputLines = [];
let currentLine = 0;

rl.on('line', (line) => { inputLines.push(line.trim()); });

rl.on('close', () => { main(); });

function readLine() { return inputLines[currentLine++]; }

class Height {
    constructor(feet, inches) {
        this.feet = feet;
        this.inches = inches;
    }
}

function main() {
    let t = parseInt(readLine());    // Read the number of test cases
    const solution = new Solution(); // Create an instance of Solution

    while (t > 0) {
        // Read and ignore the number of heights if not needed
        let line = readLine();
        let values = line.split(' ').map(Number);

        let arr = [];
        // Process the line to extract pairs of integers
        for (let i = 0; i < values.length; i += 2) {
            let feet = values[i];
            let inches = values[i + 1];
            arr.push(new Height(feet, inches));
        }

        // Compute the result using the findMax method
        let result = solution.findMax(arr);
        console.log(result); // Print the result
        console.log("~");
        t--; // Decrement the test case counter
    }
}

// } Driver Code Ends

// User function Template for javascript
class Solution {
    // Function to find the maximum height in inches from an array of height objects.
    findMax(arr) {
        let maxHeightInInches = 0;

        for (let i = 0; i < arr.length; i++) {
            // Convert height to inches (feet * 12 + inches)
            let currentHeightInInches = (arr[i].feet * 12) + arr[i].inches;

            // Update max height if the current height is greater
            maxHeightInInches = Math.max(currentHeightInInches, maxHeightInInches);
        }

        return maxHeightInInches;  // Return the maximum height found
    }
}
