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
        let res = obj.uniqueCombinations(coins, sum);
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

// User function Template for JavaScript

/**
 * @param {number[]} arr
 * @param {number} target
 * @returns {number[][]}
 */

class Solution {
    // Function to find all unique combinations of elements in array 'arr' 
    // that sum up to the 'target' value.
    uniqueCombinations(arr, target) {
       const  resultCombinations = [], currentCombination = []; 
      
        // Sort the array to ensure combinations are considered in ascending order.
        arr.sort((a, b) => a - b);

        // Initialize current sum to track the total of the selected combination.
        let currentSum = 0;
        
        // Variable to store the last element added to the combination, 
        // used to avoid duplicates in the same recursion path.
        let lastElement = 0;

        // Recursive helper function to generate all possible combinations.
        const findCombinations = (index) => {
            // If the current sum matches the target, add the combination to the result.
            if (currentSum === target) return resultCombinations.push([...currentCombination]);

            // If the current sum exceeds the target or we've exhausted all elements, stop recursion.
            if (currentSum > target || index === arr.length) return;

            // Skip the current index if the element is the same as the last one added 
            // to avoid generating duplicate combinations.
            if (lastElement !== arr[index]) {
                // Add the current element to the combination and update the current sum.
                currentCombination.push(arr[index]);
                currentSum += arr[index];

                // Recurse with the next index to explore combinations including the current element.
                findCombinations(index + 1);

                // If the current sum exceeds the target, backtrack by removing the last element added.
                if (currentSum > target) return currentCombination.pop(), currentSum -= arr[index];

                // Backtrack: Remove the current element and adjust the current sum.
                currentCombination.pop();
                currentSum -= arr[index];

                // Update lastElement to prevent reusing the same element in this recursion path.
                lastElement = arr[index];
            }

            // Recurse without including the current element to explore alternative combinations.
            findCombinations(index + 1);
        };

        // Start the recursion with the first element in the array.
        findCombinations(0);

        // Return the list of all unique combinations that sum up to the target.
        return resultCombinations;
    }
}
