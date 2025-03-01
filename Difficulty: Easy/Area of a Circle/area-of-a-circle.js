//{ Driver Code Starts
// Initial function template for JavaScript

function main() {
    const readline = require('readline').createInterface({
        input : process.stdin,
        output : process.stdout,
    });

    let t;
    let lineCount = 0;

    readline.on('line', (line) => {
        if (lineCount === 0) {
            t = parseInt(line);
            lineCount++;
        } else {
            const number = parseFloat(line);
            const ob = new Solution();
            const ans = ob.calculateArea(number);
            console.log(
                ans.toFixed(5)); // Equivalent to cout << fixed << setprecision(5);
            console.log('~');
            lineCount++;

            if (lineCount > t) {
                readline.close(); // Close after processing all test cases
            }
        }
    });

    readline.on('close', () => {
                             // All test cases processed.
                         });
}

main();
// } Driver Code Ends

// User function template for JavaScript

class Solution {
    /**
     * Function to calculate the area of a circle given its radius.
     * @param {number} r - Radius of the circle.
     * @returns {number} - Area of the circle.
     */
    calculateArea(r) {
        let pi = Math.PI;  // Value of π (pi)
        let area = pi * r * r;  // Area formula: πr²
        return area;  // Return the calculated area
    }
}
