//{ Driver Code Starts
function main() {
    const t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        const arr = readLine().split(' ').map(Number);
        const solution = new Solution();
        console.log(solution.calculateFriendliness(arr));
        console.log("~");
    }
}

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

// } Driver Code Ends

class Solution {
    // Function to calculate the "friendliness" score based on the differences between adjacent elements
    calculateFriendliness(arr) {
        // Get the length of the array
        const n = arr.length;
        
        // Initialize the sum to 0
        let sum = 0;
        
        // Loop through the array
        for (let i = 0; i < n; i++) {
            // If it's the last element, calculate the difference with the first element
            if (i === n - 1) {
                let a = Math.abs(arr[i] - arr[0]);
                sum += a;  // Add the absolute difference to the sum
            } else {
                // Calculate the absolute difference with the next element
                let ab = Math.abs(arr[i] - arr[i + 1]);
                sum += ab;  // Add the absolute difference to the sum
            }
        }
        
        // Return the total "friendliness" score
        return sum;
    }
}
