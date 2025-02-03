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

        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let x = parseInt(readLine());

        let obj = new Solution();
        let res = obj.findPair(arr, x);
        console.log(res);
        console.log("~");
    }
}

// } Driver Code Ends



class Solution {
    /**
     * @param {number[]} arr
     * @param {number} x
     * @returns {boolean}
     */
    findPair(arr, x) {
        let s = new Set();  // Create a set to store the elements

        // Iterate through the array to check for the pair
        for (let i = 0; i < arr.length; i++) {
            // Check if the pair exists by checking if the difference or sum is already in the set
            if (s.has(arr[i] + x) || s.has(arr[i] - x)) {
                return true;  // Pair found, return true
            } else {
                s.add(arr[i]);  // Add current element to the set if no pair is found
            }
        }

        return false;  // Return false if no pair is found
    }
}
