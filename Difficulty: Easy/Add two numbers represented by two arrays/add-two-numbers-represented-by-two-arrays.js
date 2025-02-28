//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.
//  Initial Template for javascript

// Driver code
const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output : process.stdout});

let inputLines = [];
let currentLine = 0;

rl.on('line', (line) => { inputLines.push(line.trim()); });

rl.on('close', () => { main(); });

function readLine() { return inputLines[currentLine++]; }

function main() {
    let tc = parseInt(readLine());
    while (tc > 0) {
        let arr1 = readLine().split(' ').map(Number);
        let arr2 = readLine().split(' ').map(Number);
        let ob = new Solution();
        let ans = ob.calc_Sum(arr1, arr2);
        console.log(ans);
        console.log("~");
        tc--;
    }
}

// } Driver Code Ends

// User function Template for javascript
class Solution {
    calc_Sum(A, B) {
        // Initialize carry to 0 and ans array to store the result digits.
        let carry = 0;
        let ans = [];

        // Pointers to the last elements of arrays A and B.
        let indexA = A.length - 1;
        let indexB = B.length - 1;

        // Add digits from both arrays while both have digits left.
        while (indexA >= 0 && indexB >= 0) {
            let sum = A[indexA] + B[indexB] + carry;
            let digit = sum % 10; // Current place value (unit place)
            ans.push(digit);
            carry = Math.floor(sum / 10); // Carry to the next place value
            indexA--;
            indexB--;
        }

        // If array A has remaining digits, process them.
        while (indexA >= 0) {
            let sum = A[indexA] + carry;
            let digit = sum % 10;
            ans.push(digit);
            carry = Math.floor(sum / 10);
            indexA--;
        }

        // If array B has remaining digits, process them.
        while (indexB >= 0) {
            let sum = B[indexB] + carry;
            let digit = sum % 10;
            ans.push(digit);
            carry = Math.floor(sum / 10);
            indexB--;
        }

        // If there is still a carry left, add it to the result.
        if (carry) {
            ans.push(carry);
        }

        // Remove trailing zeros if any.
        while (ans[ans.length - 1] == '0') {
            ans.pop();
        }

        // Reverse the result and convert to string for final output.
        return ans.reverse().join('');
    }
}
