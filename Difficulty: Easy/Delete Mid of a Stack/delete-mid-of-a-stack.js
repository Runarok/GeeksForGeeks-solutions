//{ Driver Code Starts

// Driver code
const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output : process.stdout});

let input = [];
rl.on('line', function(line) { input.push(line.trim()); });

rl.on('close', function() {
    const t = parseInt(input[0]); // First line is the number of test cases
    const solution = new Solution();

    for (let i = 1; i <= t; i++) {
        const stack = input[i].split(" ").map(Number);
        solution.deleteMid(stack);
        console.log(stack.reverse().join(" ")); // Output the modified stack
        console.log("~");                       // Output the modified stack
    }
});
// } Driver Code Ends


class Solution {

    deleteMid(s) {
        let n = s.length;
        let middle = Math.floor(n / 2);  // Calculate the middle index

        let stack = [];
        
        // Pop elements until the middle one and push them into the helper stack
        for (let i = 0; i < middle; i++) {
            stack.push(s.pop());
        }

        // Remove the middle element (do nothing on this step)
        s.pop();

        // Push the elements from the helper stack back to the original stack
        while (stack.length > 0) {
            s.push(stack.pop());
        }
    }
}

