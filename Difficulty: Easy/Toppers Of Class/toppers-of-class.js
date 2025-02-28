//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', () => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    const t = parseInt(readLine());
    for (let test = 0; test < t; test++) {
        const arr = readLine().split(' ').map(Number);
        const k = parseInt(readLine());

        const solution = new Solution();
        const result = solution.kToppers(arr, k);

        console.log(result.join(' '));
        console.log("~")
    }
}
// } Driver Code Ends

// User function Template for JavaScript
class Solution {
    // Function to find the top k elements in the array and return their indices.
    kToppers(arr, k) {
        // Create a sorted copy of the array in descending order
        const sortedArr = [...arr].sort((a, b) => b - a);
        
        // Create a Set to store the top k unique elements from the sorted array
        const toppers = new Set([...new Set(sortedArr)].slice(0, k));
        
        let ans = [];
        
        // Iterate through the original array to find indices of the top k elements
        arr.forEach((v, i) => {
            if (toppers.has(v)) {
                ans.push([v, i]);
            }
        });
        
        // Sort the result array in descending order of values
        ans.sort((a, b) => b[0] - a[0]);
        
        // Return the indices of the top k elements
        return ans.map((v) => v[1]);
    }
}
