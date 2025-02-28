//{ Driver Code Starts
function readLine() { return inputString[currentLine++]; }

function main() {
    const t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let arr1 = readLine().split(' ').map(x => parseInt(x));
        let arr2 = readLine().split(' ').map(x => parseInt(x));
        let [k] = readLine().split(' ').map(x => parseInt(x));
        let solution = new Solution();
        let ans = solution.findKthMissing(arr1, arr2, k);
        console.log(ans);
        console.log("~");
    }
}

// Adapted for the provided input format
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

// } Driver Code Ends

class Solution {
    findKthMissing(arr1, arr2, k) {
        // Convert arr2 to a Set for faster lookup
        const set2 = new Set(arr2);
        
        // Initialize an array to store the missing elements
        let missing = [];
        
        // Iterate over arr1 and find the elements that are missing in arr2
        for (let num of arr1) {
            if (!set2.has(num)) {
                missing.push(num);
            }
        }
        
        // If k is within the bounds of missing elements, return the k-th missing element
        if (k <= missing.length) {
            return missing[k - 1]; // k-1 because array indices are 0-based
        }
        
        // If no k-th missing element exists, return -1
        return -1;
    }
}