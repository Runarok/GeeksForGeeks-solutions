//{ Driver Code Starts
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

function main() {
    const t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        const arr1 = readLine().split(' ').map(Number);
        const arr2 = readLine().split(' ').map(Number);
        const solution = new Solution();
        console.log(solution.minRemove(arr1, arr2));
        console.log("~");
    }
}

// } Driver Code Ends

class Solution {
    minRemove(arr1, arr2) {
        // Create maps to store the frequency of each element in arr1 and arr2
        const freq1 = new Map();
        const freq2 = new Map();
        const result = []; // Stores elements that need to be removed

        // Count frequency of elements in arr1
        for (const num of arr1) {
            freq1.set(num, (freq1.get(num) || 0) + 1);
        }

        // Count frequency of elements in arr2
        for (const num of arr2) {
            freq2.set(num, (freq2.get(num) || 0) + 1);
        }

        // Find common elements and store them in the result list
        for (const [num, count] of freq1) {
            if (freq2.has(num)) {
                // Only remove the minimum occurrences of the common elements
                const occurrences = Math.min(count, freq2.get(num));
                for (let i = 0; i < occurrences; i++) {
                    result.push(num);
                }
            }
        }

        // Return the total number of common elements to be removed
        return result.length;
    }
}
