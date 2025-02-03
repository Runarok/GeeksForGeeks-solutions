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
    let i = 0;
    for (; i < t; i++) {
        let n = parseInt(readLine());
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let [k, x] = readLine().trim().split(" ").map((x) => parseInt(x));

        let obj = new Solution();
        let res = obj.printKClosest(arr, n, k, x);
        let s = "";
        for (let it of res) {
            s += it + " ";
        }
        console.log(s);
    
console.log("~");
}
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */

class Solution {
    // Function to print k closest elements to x in the given array
    printKClosest(arr, n, k, x) {
        let crossover = -1;
        
        // Find the crossover point where elements start being greater than x
        for (let i = 0; i < n; i++) {
            if (arr[i] > x) {
                crossover = i;
                break;
            }
        }

        // If no crossover point is found, set crossover to n (all elements are <= x)
        if (crossover === -1) {
            crossover = n;
        }

        let l = crossover - 1;  // Left pointer starts from one element before the crossover
        let r = crossover;  // Right pointer starts from the crossover point
        const res = [];  // Array to store the result

        // Loop until we've found k closest elements
        while (k > 0) {
            // Skip over the element that is equal to x
            if (arr[l] === x) {
                l--;
            }
            if (arr[r] === x) {
                r++;
            }

            // Compare the absolute differences of the left and right elements with x
            if (l >= 0 && r < n) {
                const diffLeft = Math.abs(arr[l] - x);
                const diffRight = Math.abs(arr[r] - x);

                // Add the element with the smaller difference to the result
                if (diffLeft >= diffRight) {
                    res.push(arr[r++]);
                } else {
                    res.push(arr[l--]);
                }
            }
            // If only left pointer is valid, add it to result
            else if (l >= 0) {
                res.push(arr[l--]);
            }
            // If only right pointer is valid, add it to result
            else if (r < n) {
                res.push(arr[r++]);
            }

            k--;  // Decrease k as we found one element
        }

        return res;  // Return the result array
    }
}

