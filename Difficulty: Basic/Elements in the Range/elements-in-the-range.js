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

function printList(res, n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        s += res[i];
        s += " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let n = input_ar1[0];
        let A = input_ar1[1];
        let B = input_ar1[2];
        let arr = new Array(n);
        input_ar1 = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < n; i++) {
            arr[i] = input_ar1[i];
        }
        let obj = new Solution();
        let res = obj.check_elements(arr, n, A, B);
        if (res === true) {
            console.log("True");
        } else {
            console.log("False");
        }

        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} A
 * @param {number} B
 * @returns {boolean}
 */
class Solution {
    // Function to check if all elements in the range [A, B] are present in the array
    check_elements(arr, n, A, B) {
        // Calculate the range between A and B
        let range = B - A;

        // Iterate through the array to mark elements within the range [A, B]
        for (let i = 0; i < n; i++) {
            // If the absolute value of the current element is within the range [A, B]
            if ((Math.abs(arr[i])) >= A && (Math.abs(arr[i])) <= B) {
                let z = Math.abs(arr[i]) - A; // Adjust index for marking
                // If the index is valid and the value is positive, mark it by negating the element
                if (z < n && arr[z] > 0) {
                    arr[z] = arr[z] * -1;
                }
            }
        }

        // Variable to count how many elements in the range have been successfully marked
        let count = 0;

        // Check if all elements in the range [A, B] have been marked (i.e., negated)
        for (let i = 0; i <= range && i < n; i++) {
            // If an element is still positive, it means it was not marked
            if (arr[i] > 0) {
                return false;
            } else {
                count++; // Increment the count for marked elements
            }
        }

        // If the count doesn't match the expected number of elements, return false
        if (count !== (range + 1)) {
            return false;
        }

        // If all checks pass, return true
        return true;
    }
}
