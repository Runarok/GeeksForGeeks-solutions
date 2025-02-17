//{ Driver Code Starts
function main() {
    const readline = require('readline');
    const rl =
        readline.createInterface({input : process.stdin, output : process.stdout});

    let t;
    let inputs = [];

    rl.question('', (input) => {
        t = parseInt(input);
        rl.on('line', (line) => {
            inputs.push(line);
            if (inputs.length === t) {
                rl.close();
            }
        });
    });

    rl.on('close', () => {
        for (let i = 0; i < t; i++) {
            let input1 = inputs[i].trim();
            let names = input1.split(/\s+/);
            let obj = new Solution();
            let res = obj.longest(names);
            console.log(res);
            console.log("~");
        }
    });
}

main();
// } Driver Code Ends

class Solution {
    longest(arr) {
        let longest = '';
        
        // Iterate through the array and find the string with the maximum length
        arr.forEach(str => {
            if (str.length > longest.length) {
                longest = str;
            }
        });
        
        // Return the longest string
        return longest;
    }
}
