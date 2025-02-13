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
        let nums = readLine().split(' ').map(x => parseInt(x));
        let solution = new Solution();
        let ans = solution.findMajority(nums);
        if (ans.length === 0) {
            console.log("[]");
        } else {
            console.log(ans.join(" "));
        }
    }
}
// } Driver Code Ends

class Solution {
    // Function to find the majority elements in the array
    findMajority(arr) {
        // Sort the array in ascending order
        arr = arr.sort((a,b) => a - b);
        
        let i, j = 0, c = 1;
        let a = []; // Array to store majority elements
        let n = Math.floor(arr.length / 3); // A majority element should appear more than n times
        
        // Traverse the sorted array to count occurrences
        for (i = 0; i < arr.length; i++) {
            // If current element is equal to the next one, increment the count
            if (arr[i] === arr[i + 1]) {
                c++;
            } else {
                // If the count is greater than n, it's a majority element
                if (c > n) {
                    a[j] = arr[i];
                    j++;
                }
                // Reset the count
                c = 1;
            }
        }
        
        // Return the array of majority elements
        return a;
    }
}
