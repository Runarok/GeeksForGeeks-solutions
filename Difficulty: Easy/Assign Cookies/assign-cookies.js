//{ Driver Code Starts
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let greed = readLine().split(' ').map(x => parseInt(x));
        let cookie = readLine().split(' ').map(x => parseInt(x));
        let solution = new Solution();
        let ans = solution.maxChildren(greed, cookie);
        console.log(ans);
        console.log("~");
    }
}
// } Driver Code Ends

class Solution {
    // Function to find the maximum number of children that can be satisfied with cookies
    maxChildren(greed, cookie) {
        // Sort both greed and cookie arrays in ascending order
        greed.sort((a, b) => a - b);
        cookie.sort((a, b) => a - b);
      
        // Initialize pointers for both greed and cookie arrays
        let childIndex = 0, cookieIndex = 0;
        let satisfiedChildren = 0;
      
        // Iterate until we reach the end of either the greed or cookie array
        while (childIndex < greed.length && cookieIndex < cookie.length) {
          
            // If the current child can be satisfied with the current cookie
            // Assign the cookie to the child and increment both indices
            if (greed[childIndex] <= cookie[cookieIndex]) {
                satisfiedChildren++;
                childIndex++;
                cookieIndex++;
            }
            
            // If the current child cannot be satisfied with the current cookie,
            // move to the next bigger cookie
            else {
                cookieIndex++;
            }
        }
        
        // Return the total number of satisfied children
        return satisfiedChildren;
    }
}
