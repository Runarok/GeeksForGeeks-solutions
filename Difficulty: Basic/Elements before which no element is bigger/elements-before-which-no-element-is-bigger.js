//{ Driver Code Starts
function main() {
    const t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        const arr = readLine().split(' ').map(Number);
        const solution = new Solution();
        console.log(solution.countElements(arr));
        console.log('~');
    }
}

// Input reading functions
function readLine() { return inputString[currentLine++]; }

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString = '';
let currentLine = 0;
process.stdin.on('data', function(inputStdin) { inputString += inputStdin; });
process.stdin.on('end', function() {
    inputString = inputString.split('\n');
    main();
});

// } Driver Code Ends

class Solution {
    countElements(arr) {
        // Initialize the first element as the largest
        let biggestElement = arr[0];
        let resultCount = 1;

        // Iterate through the array to count elements greater than previous max
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > biggestElement) {
                resultCount++;
                biggestElement = arr[i]; // Update the largest element
            }
        }
        return resultCount;
    }
}
