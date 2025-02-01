//{ Driver Code Starts
// Initial Template for javascript

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
        let arr1 = readLine().split(' ').map(x => parseInt(x));
        let arr2 = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        let ans = obj.minValue(arr1, arr2);
        console.log(ans);
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

class Solution {
    minValue(arr1, arr2) {
        // Sort arr1 in ascending order and arr2 in descending order
        arr1.sort((a, b) => a - b);
        arr2.sort((a, b) => b - a);
        
        // Initialize the result sum
        let result = 0;
        
        // Compute the sum of the products
        for (let i = 0; i < arr1.length; i++) {
            result += arr1[i] * arr2[i];
        }
        
        return result;
    }
}
