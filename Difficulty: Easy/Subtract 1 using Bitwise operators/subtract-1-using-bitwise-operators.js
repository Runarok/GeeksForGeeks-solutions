//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.
const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output : process.stdout});

rl.question('', (t) => {
    t = parseInt(t);
    const obj = new Solution();

    function processTestCase() {
        if (t-- > 0) {
            rl.question('', (number) => {
                number = parseInt(number);
                const ans = obj.subtractOne(number);
                console.log(ans);
                console.log("~");
                processTestCase();
            });
        } else {
            rl.close();
        }
    }

    processTestCase();
});

// } Driver Code Ends

// User function Template for JavaScript

class Solution {
    // Function to subtract 1 from the given number and return the result
    subtractOne(x) {
        return x - 1;
    }
}
