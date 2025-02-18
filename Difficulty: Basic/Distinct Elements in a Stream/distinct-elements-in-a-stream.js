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
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(Number);
        let solution = new Solution();
        let results = solution.getDistinct(arr);
        console.log(results.join(' '));
        console.log("~");
    }
}

// } Driver Code Ends

class Solution {
    getDistinct(arr) {
        // Initialize an array to store the count of distinct numbers at each index
        const v = new Array(arr.length);
        // Create a hash map to track occurrences of positive numbers and handle negative numbers
        const h = {};
        let distinctCount = 0;  // Variable to store the current distinct count

        // Loop through the array to process each element
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 0) {  // If the element is positive
                // If the positive number is not already in the map, add it
                if (!h[arr[i]]) {
                    h[arr[i]] = 1;
                    distinctCount++;  // Increment distinct count
                } else {
                    h[arr[i]]++;  // Increment the count of this number in the map
                }
            } else {  // If the element is negative
                // If the corresponding positive number exists in the map, decrement it
                if (h[-arr[i]] !== undefined) {
                    h[-arr[i]]--;
                    // If the count of this number reaches zero, delete it from the map and reduce distinct count
                    if (h[-arr[i]] < 1) {
                        delete h[-arr[i]];
                        distinctCount--;
                    }
                }
            }
            v[i] = distinctCount;  // Store the current distinct count in the result array
        }

        return v;  // Return the final array with the count of distinct numbers at each index
    }
}
