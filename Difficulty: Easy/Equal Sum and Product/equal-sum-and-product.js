//{ Driver Code Starts
function readLine() { return inputString[currentLine++]; }

function main() {
    const t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        const arr = readLine().split(' ').map(x => parseInt(x));
        const solution = new Solution();
        const ans = solution.countSubarrays(arr);
        console.log(ans);
        console.log("~");
    }
}

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', () => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

// } Driver Code Ends

class Solution {
    countSubarrays(arr) {
        let count = 0;  // To store the result

        // Loop through each possible starting point of the subarray
        for (let i = 0; i < arr.length; i++) {
            let sum = 0;  // Initialize sum for the subarray
            let product = 1;  // Initialize product for the subarray

            // Loop through each possible ending point of the subarray
            for (let j = i; j < arr.length; j++) {
                sum += arr[j];  // Add the current element to sum
                product *= arr[j];  // Multiply the current element to product

                // If sum and product are equal, increment the count
                if (sum === product) {
                    count++;
                }
            }
        }

        return count;  // Return the final count of subarrays
    }
}
