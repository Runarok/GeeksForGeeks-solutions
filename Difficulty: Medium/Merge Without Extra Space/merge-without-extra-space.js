//{ Driver Code Starts
// Initial Template for javascript
'use strict';

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

    while (t-- > 0) {
        // Read the array of integers
        let a = readLine().split(' ').map(x => parseInt(x));
        let b = readLine().split(' ').map(x => parseInt(x));

        // Create an instance of the Solution class
        let obj = new Solution();

        // Call the missingNumber method and print the result
        obj.mergeArrays(a, b)
        console.log(a.join(' '));
        console.log(b.join(' '));

        console.log("~");
    }
}
// } Driver Code Ends

class Solution {
    mergeArrays(arr1, arr2) {
        let n = arr1.length;  // Length of the first array
        let m = arr2.length;  // Length of the second array
        let gap = Math.ceil((n + m) / 2); // Initial gap size (virtual array size)

        // Keep reducing the gap until it becomes 0
        while (gap > 0) {
            let i = 0;
            let j = gap;

            // Compare elements within the virtual merged array
            while (j < n + m) {
                // Get the values from arr1 and arr2 based on current indices
                let val1 = (j < n) ? arr1[j] : arr2[j - n]; // Value from arr1 or arr2
                let val2 = (i < n) ? arr1[i] : arr2[i - n]; // Value from arr1 or arr2

                if (val1 < val2) {
                    // If the first value is smaller, perform swapping based on the index ranges

                    if (j < n && i < n) {
                        // Swap within arr1
                        [arr1[i], arr1[j]] = [arr1[j], arr1[i]];
                    } else if (j >= n && i < n) {
                        // Swap between arr1 and arr2
                        [arr1[i], arr2[j - n]] = [arr2[j - n], arr1[i]];
                    } else {
                        // Swap within arr2
                        [arr2[i - n], arr2[j - n]] = [arr2[j - n], arr2[i - n]];
                    }
                }

                i++;
                j++;
            }

            // After one pass, reduce the gap
            if (gap === 1) break;
            gap = Math.ceil(gap / 2);
        }
    }
}
