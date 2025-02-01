//{ Driver Code Starts

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split("\n").map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {

        let coins = readLine().trim().split(" ").map((x) => parseInt(x));
        let sum = parseInt(readLine());
        let obj = new Solution();
        let res = obj.combinationSum(coins, sum);
        if (res.length == 0) {
            console.log(-1);
        } else {
            for (let row of res) {
                row.sort((a, b) => a - b); // Sort each row in ascending order
            }

            // Step 2: Sort `res` lexicographically
            res.sort((row1, row2) => {
                const len = Math.min(row1.length, row2.length);
                for (let i = 0; i < len; i++) {
                    if (row1[i] !== row2[i]) {
                        return row1[i] - row2[i]; // Compare row elements
                    }
                }
                return row1.length -
                       row2.length; // If all elements are equal, sort by row length
            });
            let ans = "";
            for (let row of res) {
                let s = "[";
                for (let k = 0; k < row.length; k++) {
                    s += row[k];
                    s += " ";
                }
                s += "]";
                ans += s;
                ans += " ";
            }
            console.log(ans);
        }
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} target
 * @returns {number[][]}
 */

class Solution {
    
    // Function to find all combinations of elements in array arr that sum to target
    combinationSum(arr, target) {
        // Helper function to perform backtracking
        function backtrack(index, target, path) {
            // If target is 0, add the current combination (path) to the result
            if (target === 0) {
                result.push(path);
                return;
            }
            // Iterate through the array starting from the current index
            for (let i = index; i < arr.length; i++) {
                // If the current element exceeds the target, no point in continuing
                if (arr[i] > target) {
                    break;
                }
                // Recurse with updated target and add current element to the path
                backtrack(i, target - arr[i], path.concat(arr[i]));
            }
        }

        // Sort the array to optimize the backtracking process
        arr.sort((a, b) => a - b);
        
        let result = [];
        backtrack(0, target, []);  // Start backtracking from index 0 and empty path
        return result;
    }
}
