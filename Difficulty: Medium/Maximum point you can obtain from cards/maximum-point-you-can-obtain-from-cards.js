//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.
function main() {
    const t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        const cardPoints = readLine().split(' ').map(Number);
        const k = parseInt(readLine());
        const solution = new Solution();
        console.log(solution.maxScore(cardPoints, k));
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
    // Function to calculate the maximum score from cardPoints with exactly 'k' picks
    maxScore(cardPoints, k) {
        let leftSum = 0;  // To track the sum of the leftmost k elements
        let rightSum = 0;  // To track the sum of the rightmost elements that are picked
        for (let i = 0; i < k; i++) {  // Initial sum of first k elements (from the left)
            leftSum += cardPoints[i];
        }
        
        let maxSum = leftSum;  // Initially, the maximum sum is just the sum of the first k elements
        let rightPt = cardPoints.length - 1;  // Pointer to track the rightmost element
        
        // Now, try shifting the window to take elements from both ends of the array
        for (let i = k - 1; i >= 0; i--) {
            leftSum -= cardPoints[i];  // Remove the leftmost element of the current window
            rightSum += cardPoints[rightPt];  // Add the next element from the right end
            maxSum = Math.max(maxSum, leftSum + rightSum);  // Update the maxSum if needed
            rightPt--;  // Move the pointer to the left
        }
        
        return maxSum;  // Return the maximum sum found
    }
}
