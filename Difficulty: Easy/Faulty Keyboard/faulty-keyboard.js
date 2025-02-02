//{ Driver Code Starts
let inputString = "", currentLine = 0;

process.stdin.on("data", input => { inputString += input; });

process.stdin.on("end", () => {
    inputString = inputString.trim().split("\n");
    main();
});

function readLine() { return inputString[currentLine++]; }

// Driver code
function main() {
    let t = parseInt(readLine());
    let solution = new Solution();
    for (let i = 0; i < t; i++) {
        let M = parseInt(readLine());
        console.log(solution.maxNatural(M));
        console.log("~");
    }
}

// } Driver Code Ends

class Solution {
    maxNatural(m) {
        let count = 0;
        let n = m;
        let s = "";

        // Iterate through natural numbers starting from 1
        for (let i = 1; i <= m; i++) {
            s = i.toString(); // Convert number to string

            // Check if the length of the string fits within the remaining count
            if (s.length <= n) {
                n -= s.length; // Reduce the remaining count
                count++; // Increment the count of numbers that fit
            } else {
                break; // Stop when we can't fit the next number
            }
        }
        return count;
    }
}
