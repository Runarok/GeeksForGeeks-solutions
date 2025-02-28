//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.
const readline = require('readline');

const rl = readline.createInterface({input : process.stdin, output : process.stdout});

let tc;
rl.question('', (answer) => {
    tc = parseInt(answer);
    let count = 0;
    rl.on('line', (line) => {
        const arr = line.split(' ').map(Number);
        const sol = new Solution();
        const res = sol.sortArray(arr);
        console.log(res.join(' '));
        console.log("~");
        count++;
        if (count === tc) {
            rl.close();
        }
    });
});
// } Driver Code Ends

// User function Template for javascript
class Solution {
    // Function to sort the array and remove the leading 0 if it exists
    sortArray(arr) {
        // Sort the array in ascending order
        let result = arr.sort(function(a, b) {
            return a - b;
        });

        // If the first element is 0, remove it from the array
        if (result[0] === 0) {
            result.shift();
        }

        // Return the sorted array without the leading 0
        return result;
    }
}
