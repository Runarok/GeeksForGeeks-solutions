//{ Driver Code Starts
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x));
        let leftIndex = readLine().split(' ').map(x => parseInt(x));
        let rightIndex = readLine().split(' ').map(x => parseInt(x));

        let obj = new Solution();
        let result = obj.maxPrefixes(arr, leftIndex, rightIndex);
        console.log(result.join(' '));
        console.log("~");
    }
}
// } Driver Code Ends

class Solution {
    // Function to find the maximum sum of subarrays based on leftIndex and rightIndex ranges
    maxPrefixes(arr, leftIndex, rightIndex) {
        // Return an empty array if the input array is empty
        if (arr.length < 1) return [];

        let result = [];
        let n = leftIndex.length - 1; // Get the last index of leftIndex array

        // Iterate through the leftIndex and rightIndex ranges from the end
        while (n >= 0) {
            let max_Value = 0; // Initialize the maximum value for the current subarray
            let cur_Max_Val = 0; // Initialize the current subarray sum

            // Calculate the sum of the current subarray and keep track of the maximum sum
            for (let i = leftIndex[n]; i <= rightIndex[n]; i++) {
                cur_Max_Val += arr[i];
                max_Value = Math.max(cur_Max_Val, max_Value);
            }

            // Add the maximum value to the result array at the beginning
            result.unshift(max_Value);

            // Move to the previous subarray
            n -= 1;
        }

        // Return the result array
        return result;
    }
}
