//{ Driver Code Starts
function main() {
    const readline = require('readline');
    const rl =
        readline.createInterface({input : process.stdin, output : process.stdout});

    let input = [];
    rl.on('line', (line) => { input.push(line); });

    rl.on('close', () => {
        let t = parseInt(input[0].trim(), 10);
        let index = 1;
        const solution = new Solution();

        while (t--) {
            let k = parseInt(input[index++].trim(), 10);
            let arr = input[index++].trim().split(' ').map(Number);
            console.log(solution.findUnique(k, arr));
            console.log("~");
        }
    });
}

main();
// } Driver Code Ends

class Solution {
    findUnique(k, arr) {
        // Create a set from the array to get unique elements
        let uniqueElements = new Set(arr);

        // Loop through each unique element in the set
        for (let element of uniqueElements) {
            // Check if the current element appears only once in the array
            if (arr.indexOf(element) === arr.lastIndexOf(element)) {
                // Return the unique element that appears only once
                return element;
            }
        }
    }
}
