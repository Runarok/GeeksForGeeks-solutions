//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.

// Driver code
const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

let input = [];
rl.on("line", (line) => { input.push(line); }).on("close", () => {
    const t = parseInt(input[0]);
    let index = 1;
    for (let i = 0; i < t; i++) {
        const stack = input[index++].trim().split(" ").map(Number);
        const ob = new Solution();
        ob.deleteMid(stack);
        console.log(stack.reverse().join(" "));
        console.log("~");
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
