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

        let n = parseInt(readLine());

        let obj = new Solution();
        let res = obj.countNumberswith4(n);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

class Solution {
    /**
    * @param number n
    * @returns number
    */
    countNumberswith4(n) {
        // Initialize count variable to store the number of numbers containing '4'
        let count = 0;
        
        // Loop through numbers from 0 to n
        for (let i = 0; i <= n; i++) {
            // Convert the number to a string and check if it contains '4'
            if (`${i}`.includes('4')) {
                count++; // Increment count if '4' is found
            }
        }
        
        return count; // Return the final count
    }
}
