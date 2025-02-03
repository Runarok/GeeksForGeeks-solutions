//{ Driver Code Starts
const readline = require("readline");

// Main function
function main() {
    const rl =
        readline.createInterface({input : process.stdin, output : process.stdout});

    let inputLines = [];
    rl.on("line", (line) => { inputLines.push(line); });

    rl.on("close", () => {
        let ind = 0;
        const t = parseInt(inputLines[ind++], 10);
        const solution = new Solution();

        for (let i = 1; i <= t; i++) {
            const x = parseInt(inputLines[ind++]);
            const y = parseInt(inputLines[ind++]);
            console.log(solution.distance(x, y));
            console.log("~");
        }
    });
}

main();

// } Driver Code Ends


// User function Template for javascript

class Solution {
    // Function to calculate the distance between two nodes in a binary tree
    distance(val1, val2) {
        // If both values are the same, distance is 0
        if (val1 === val2) {
            return 0;
        }

        let steps = 0;

        // Loop until both values become equal
        while (val1 !== val2) {
            // If val1 is greater, move it up in the tree
            if (val1 > val2) {
                val1 = Math.floor(val1 / 2);
            } 
            // Otherwise, move val2 up in the tree
            else {
                val2 = Math.floor(val2 / 2);
            }
            steps++;
        }

        return steps;
    }
}

