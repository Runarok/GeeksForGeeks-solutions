//{ Driver Code Starts
function readLine() { return inputString[currentLine++]; }

function main() {
    const t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        const arr = readLine().split(' ').map(x => parseInt(x));
        const solution = new Solution();
        console.log(solution.findMaxAnd(arr));
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
    // Function to find the maximum AND value of any two numbers in the array
    findMaxAnd(arr) {
        let res = 0;  // Initialize result to 0
        
        // Iterate through bits from 30 to 0 (assuming 32-bit integers)
        for (let i = 30; i >= 0; i--) {
            let count = 0;
            
            // Count how many numbers have the ith bit set
            for (const num of arr) {
                if (num & (1 << i)) {
                    count++;
                }
            }
            
            // If at least two numbers have the ith bit set, we can include this bit in the result
            if (count >= 2) {
                res = res | (1 << i);  // Set the ith bit in the result
                
                // Modify the array: set numbers to 0 if they don't have the ith bit set
                for (let j = 0; j < arr.length; j++) {
                    if (!(arr[j] & (1 << i))) {
                        arr[j] = 0;
                    }
                }
            }
        }
        
        return res;  // Return the final result
    }
}
