//{ Driver Code Starts
process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
process.stdin.on("data", (inputStdin) => { inputString += inputStdin; });

process.stdin.on("end", (_) => {
    inputString = inputString.trim().split("\n");
    main();
});

function readLine() { return inputString.shift(); }

function main() {
    let t = parseInt(readLine().trim());
    for (let i = 0; i < t; i++) {
        let arr = readLine().trim().split(" ").map(Number);
        let k = parseInt(readLine().trim());

        let solution = new Solution();
        let ans = solution.canPair(arr, k);
        console.log(ans ? "true" : "false");
    }
}

// } Driver Code Ends

class Solution {
    canPair(arr, k) {
        // Get the size of the array
        let size = arr.length;

        // If the size is odd, we cannot pair all elements
        if (size % 2 !== 0) {
            return false;
        }

        // Create a map to store the frequency of remainders when elements are divided by k
        let dict = new Map();

        // Populate the map with the frequencies of remainders
        for (let item of arr) {
            let rem = ((item % k) + k) % k;  // Adjust for negative numbers
            dict.set(rem, (dict.get(rem) || 0) + 1);
        }

        // Check the conditions for each element
        for (let item of arr) {
            let rem = ((item % k) + k) % k;  // Adjust for negative numbers

            if (rem === 0) {
                // If remainder is 0, we need an even count
                if (dict.get(rem) % 2 !== 0) {
                    return false;
                }
            } else if (2 * rem === k) {
                // If remainder is half of k, we need an even count
                if (dict.get(rem) % 2 !== 0) {
                    return false;
                }
            } else {
                // If remainder exists, check if the count of remainder and (k - remainder) are equal
                if (dict.get(rem) !== dict.get(k - rem)) {
                    return false;
                }
            }
        }

        return true;
    }
}
