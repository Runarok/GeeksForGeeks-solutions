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
        let arr = readLine().split(' ').map(Number);
        let [num1, num2] = readLine().split(' ').map(Number);
        let ob = new Solution();
        console.log(ob.getCount(arr, num1, num2));
        console.log("~")
    }
}
// } Driver Code Ends

class Solution {

    // Function to return the count of elements between num1 and num2 in the array
    getCount(arr, num1, num2) {
        // Find the first occurrence (left) of num1 in the array
        let left = arr.indexOf(num1); 
        
        // Find the last occurrence (right) of num2 in the array
        let right = arr.lastIndexOf(num2); 

        // If num1 or num2 is not found, or if num1 appears after num2, return 0
        if (left === -1 || right === -1 || left >= right) {
            return 0;
        }

        // Return the number of elements between the indices of num1 and num2
        return right - left - 1;       
    }
}

