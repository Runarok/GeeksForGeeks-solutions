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
        let res = obj.increasingNumbers(n);

        let S_res = '';
        for (let i = 0; i < res.length; i++) {
            S_res += (res[i]);
            S_res += ' ';
        }
        console.log(S_res);
    
console.log("~");
}
}

// } Driver Code Ends

class Solution {
    /**
    * @param {number} n - The length of the numbers to generate.
    * @returns {number[]} - Array of increasing numbers with n digits.
    */
    increasingNumbers(n) {
        const sol = []; // This will store the resulting numbers
        
        // Helper function to recursively generate the increasing numbers
        function getNumbers(count, number, start) {
            // If count is 0, push the generated number to the result array
            if (count === 0) {
                sol.push(number);
            }
            // Loop to generate numbers, ensuring they are strictly increasing
            for (let i = start; i <= 9; i++) {
                // Ensure the current number's last digit is smaller than i
                if (number % 10 < i) {
                    number = number * 10 + i; // Add the digit to the number
                    getNumbers(count - 1, number, start + 1); // Recurse with the updated number and count
                    number = Math.floor(number / 10); // Backtrack
                }
            }
        }
        
        // Special case when n = 1, directly push all digits 0-9 to the result
        if (n === 1) {
            for (let i = 0; i <= 9; i++) {
                sol.push(i);
            }
        } else {
            // Start the recursion with an initial count of n digits, number 0, and start from 1
            getNumbers(n, 0, 1);   
        }
        
        return sol; // Return the array of increasing numbers
    }
}
