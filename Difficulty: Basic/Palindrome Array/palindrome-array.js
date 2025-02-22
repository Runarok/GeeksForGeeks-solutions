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

        let obj = new Solution();
        let res = obj.isPerfect(arr);
        if (res)
            console.log("true");
        else
            console.log("false");
    }
}

// } Driver Code Ends

class Solution {
    /**
     * Function to check if an array is a perfect palindrome
     * @param number[] arr - The input array
     * @returns boolean - Returns true if the array is a palindrome, false otherwise
     */
    isPerfect(arr) {
        let left = 0; // Pointer to start of the array
        let n = arr.length - 1; // Pointer to the end of the array
        
        // Loop until the two pointers meet in the middle
        while(left < n){
            // If elements at the start and end are not equal, return false
            if(arr[left] !== arr[n]) return false;
            left++; // Move the left pointer forward
            n--; // Move the right pointer backward
        }
        return true; // If the entire array is checked and matches, return true
    }
}
