//{ Driver Code Starts

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split("\n").map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++){
        
        let n = parseInt(readLine());
        
        
        let k = parseInt(readLine());
        
        
        let arr = new Array(n);
        let input_arr = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            arr[i] = input_arr[i];
        }
        
        let obj = new Solution();
        let res = obj.minimizeDifference(n, k, arr);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

class Solution {
/**
* @param {number} n - Number of elements in the array
* @param {number} k - Subarray length for comparison
* @param {number[]} arr - Input array
* @returns {number} - The minimized difference between the maximum and minimum values
*/
    minimizeDifference(n, k, arr) {
        // Initialize arrays to store the maximum and minimum suffix values
        let maxSuffix = new Array(n + 1).fill(-Infinity); // Array to store max values from the end
        let minSuffix = new Array(n + 1).fill(Infinity); // Array to store min values from the end

        // Set the last elements of the suffix arrays to the last element of the input array
        maxSuffix[n - 1] = arr[n - 1];
        minSuffix[n - 1] = arr[n - 1];

        // Fill the suffix arrays with the maximum and minimum values from the end of the array to the start
        for (let i = n - 2; i >= 0; i--) {
            maxSuffix[i] = Math.max(maxSuffix[i + 1], arr[i]); // Maximum suffix calculation
            minSuffix[i] = Math.min(minSuffix[i + 1], arr[i]); // Minimum suffix calculation
        }

        // Initialize prefix values with the first element of the array
        let maxPrefix = arr[0];
        let minPrefix = arr[0];

        // Initialize the minimum difference with the difference of suffix values at index k
        let minDiff = maxSuffix[k] - minSuffix[k];

        // Iterate through the array to find the minimum difference
        for (let i = 1; i < n; i++) {
            if (i + k <= n) {
                // Calculate the maximum and minimum values for the current prefix and suffix
                let maxi = Math.max(maxSuffix[i + k], maxPrefix); // Max between suffix and prefix values
                let mini = Math.min(minSuffix[i + k], minPrefix); // Min between suffix and prefix values

                // Update the minimum difference if a smaller one is found
                minDiff = Math.min(minDiff, maxi - mini);
            }
            
            // Update the prefix values
            maxPrefix = Math.max(maxPrefix, arr[i]); // Update maxPrefix
            minPrefix = Math.min(minPrefix, arr[i]); // Update minPrefix
        }

        return minDiff; // Return the minimized difference
    }
}
