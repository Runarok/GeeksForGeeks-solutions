//{ Driver Code Starts
// Initial Template for javascript

// Position this line where user code will be pasted.

// Function to handle input and output
function main() {
    const readline = require('readline');

    const rl =
        readline.createInterface({input : process.stdin, output : process.stdout});

    let tokens = [];

    rl.on('line', (line) => {
          // Split the input line into tokens separated by whitespace
          tokens = tokens.concat(line.trim().split(/\s+/));
      }).on('close', () => {
        let idx = 0;
        const t = parseInt(tokens[idx++], 10); // Number of test cases
        const sol = new Solution();

        for (let i = 0; i < t; i++) {
            // Parse base and exponent for each test case
            const b = parseFloat(tokens[idx++]);
            const e = parseInt(tokens[idx++], 10);

            // Compute the power and format the output to 5 decimal places
            const result = sol.power(b, e).toFixed(5);
            console.log(result);
            console.log("~");
        }

        process.exit(0);
    });
}

// Invoke the main function to start the program
main();

// } Driver Code Ends


// User function Template for javascript
class Solution {
    /**
     * Computes b raised to the power e recursively.
     * @param {number} b - The base.
     * @param {number} e - The exponent.
     * @returns {number} - The result of b^e.
     */
    power(b, e) {
        // Base case: any number to the power of 0 is 1
        if (e === 0) return 1;
        
        // If exponent is negative, we compute 1 / (b^(-e))
        if (e < 0) {
            b = 1 / b;
            e = -e;
        }

        // Recursive case: split exponent
        if (e % 2 === 0) {
            const half = this.power(b, e / 2);
            return half * half;
        } else {
            return b * this.power(b, e - 1);
        }
    }
}
