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
    let t = parseInt(readLine()); // Reading the number of test cases
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(Number); // Reading the array
        let solution = new Solution();
        console.log(
            solution.findSubarray(arr)); // Calling the function and printing the result
        console.log("~");
    }
}

// } Driver Code Ends

class Solution {
    // Function to find the number of subarrays whose sum is 0
    findSubarray(arr) {
        let sum = 0;  // Variable to keep track of the cumulative sum
        let ans = 0;  // Variable to store the number of subarrays whose sum is 0
        let sumFrequency = {0: 1};  // Initialize hash map with sum 0 having 1 count (to account for subarrays starting at index 0)

        // Iterate through the array to calculate cumulative sums
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];  // Add the current element to the cumulative sum
            
            // If the cumulative sum has been encountered before, there are subarrays whose sum is 0
            if (sum in sumFrequency) {
                ans += sumFrequency[sum];  // Add the frequency of this cumulative sum to the result
            }
            
            // Store or update the frequency of the current cumulative sum in the hashmap
            sumFrequency[sum] = (sumFrequency[sum] || 0) + 1;
        }
        
        return ans;  // Return the total count of subarrays whose sum is 0
    }
}
