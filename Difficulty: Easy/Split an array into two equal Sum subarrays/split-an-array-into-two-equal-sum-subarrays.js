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

        const arr = readLine().split(' ').map(x => parseInt(x));

        let obj = new Solution();
        let res = obj.canSplit(arr);
        console.log(res);
        console.log("~");
    }
}

// } Driver Code Ends

class Solution {
    /**
     * Function to check if an array can be split into two parts with equal sum.
     * @param {number[]} arr - The input array.
     * @returns {boolean} - Returns true if the array can be split into two parts with equal sum, otherwise false.
     */
    canSplit(arr) {
        let n = arr.length - 1;
        let startSum = arr[0];  // Initialize the start sum with the first element
        let endSum = 0;

        // Calculate the total sum for the endSum
        for (let i = 1; i <= n; i++) {
            endSum += arr[i];
        }

        // Iterate through the array, updating startSum and endSum to check for equality
        for (let i = 1; i <= n; i++) {
            if (startSum === endSum) {
                return true;  // Return true if the two sums are equal
            } else {
                startSum += arr[i];  // Add current element to startSum
                endSum -= arr[i];    // Subtract current element from endSum
            }
        }

        // Return false if no split with equal sum is found
        return false;
    }
}
