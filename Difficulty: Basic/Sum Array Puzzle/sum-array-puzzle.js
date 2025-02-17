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
    let t = parseInt(readLine(), 10);
    while (t--) {
        let arr = readLine().split(' ').map(Number);
        let solution = new Solution();
        solution.sumArray(arr);
        console.log(arr.join(' '));
        console.log("~")
    }
}
// } Driver Code Ends

class Solution {
    sumArray(arr) {
        let sum = 0;

        // First loop: Compute total sum of the array
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }

        // Second loop: Replace each element with (total sum - current element)
        for (let i = 0; i < arr.length; i++) {
            arr[i] = sum - arr[i];
        }

        return arr; 
    }
}
