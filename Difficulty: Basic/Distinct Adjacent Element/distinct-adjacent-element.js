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
    const solution = new Solution();
    for (let i = 0; i < t; i++) {
        const arr = readLine().split(' ').map(Number);
        console.log(solution.distinctAdjacentElement(arr) ? "true" : "false");
        console.log("~");
    }
}

// } Driver Code Ends

class Solution {
    distinctAdjacentElement(arr) {
        // Create a Map to store the frequency of each element in the array
        const freq = new Map()

        // Populate the frequency map
        arr.forEach(el => {
            freq.set(el, (freq.get(el) || 0) + 1)
        })

        // Find the maximum frequency of any element
        const max = Math.max(...freq.values())

        // Check if the maximum frequency is less than or equal to half of the array length
        return max <= Math.ceil(arr.length / 2)
    }
}
