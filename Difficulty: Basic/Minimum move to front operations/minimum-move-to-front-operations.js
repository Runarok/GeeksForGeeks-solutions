//{ Driver Code Starts
process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) { inputString += inputStdin; });

process.stdin.on('end', function() {
    inputString = inputString.trim().split('\n');
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(Number);
        let ob = new Solution();
        if (arr[arr.length - 1] == 0) arr.pop();
        console.log(ob.minMoves(arr));
        console.log("~");
    }
}
// } Driver Code Ends

class Solution {
    // Function to find the minimum moves to make the array sorted
    minMoves(arr) {
        // Variable to keep track of the longest sorted suffix
        let longestSortedSuffix = 0;
        
        // Variable to store the target number to match in the array
        let targetNumber = arr.length;

        // Iterate through the array from the end to the beginning
        for (let i = targetNumber - 1; i >= 0; i--) {
            // If the current element matches the target number
            if (arr[i] === targetNumber) {
                // Increase the longest sorted suffix count
                longestSortedSuffix++;
                
                // Decrease the target number for the next expected number
                targetNumber--;
            }
        }

        // Return the number of moves required, which is the length of the array minus the longest sorted suffix
        return arr.length - longestSortedSuffix;
    }
}
