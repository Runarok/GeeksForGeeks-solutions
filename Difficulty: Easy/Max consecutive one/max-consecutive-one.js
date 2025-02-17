//{ Driver Code Starts
// Initial Template for javascript

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split("\n").map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        const arr = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        let ans = obj.maxConsecutiveCount(arr);
        console.log(ans);
        console.log("~");
    }
}

// } Driver Code Ends

// } Driver Code Ends

// User function Template for JavaScript

class Solution {
    // Function to find the maximum count of consecutive 0's or 1's in the array
    maxConsecutiveCount(arr) {
        // Initialize variables to track the current count and the maximum count
        let maxCount = 0, currentCount = 1;
        
        // Loop through the array from the second element
        for (let i = 1; i < arr.length; i++) {
            // If the current element is the same as the previous one, increase the count
            if (arr[i] === arr[i - 1]) {
                currentCount++;
            } else {
                // Otherwise, update the maxCount if necessary and reset currentCount
                maxCount = Math.max(maxCount, currentCount);
                currentCount = 1; // Reset for the new sequence
            }
        }
        
        // After the loop, ensure to compare the final currentCount with maxCount
        maxCount = Math.max(maxCount, currentCount);
        
        // Return the maximum count of consecutive 0's or 1's
        return maxCount;
    }
}
