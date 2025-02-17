//{ Driver Code Starts
// Initial Template for javascript

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let x = parseInt(readLine());
        let arr = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        let ans = obj.countOfElements(x, arr);
        console.log(ans);
        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for javascript

class Solution {
    countOfElements(x, arr) {
        var count = 0;
        for(const i of arr) {
            if (i <= x) {count++;}
        }
        return count;
    }
}