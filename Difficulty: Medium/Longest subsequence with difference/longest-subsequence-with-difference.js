//{ Driver Code Starts
// Initial Template for javascript

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split("\n").map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        const arr = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        let ans = obj.maxLenSub(arr);
        console.log(ans);
        console.log("~");
    }
}

// } Driver Code Ends

// } Driver Code Ends

// User function Template for javascript

class Solution {
    // Function to find the length of the longest subsequence in the array
    maxLenSub(arr) {
        // Create a map to store the lengths of the subsequences
        const map = new Map();

        // Iterate through each element in the array
        arr.forEach(a => {
            // Get the lengths of the subsequences ending at a-1, a+1, or a itself, defaulting to 0 if not present
            const c1 = map.get(a - 1) || 0, 
                  c2 = map.get(a + 1) || 0, 
                  c0 = map.get(a) || 0;

            // Set the current element's subsequence length as the max length from the three possibilities + 1
            map.set(a, Math.max(c0, c1, c2) + 1);
        });

        // Return the maximum length of the subsequences found in the map
        return Math.max(...map.values());
    }
}
