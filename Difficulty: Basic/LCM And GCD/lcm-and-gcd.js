//{ Driver Code Starts
// Initial Template for javascript

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split("\n").map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {

        let a = parseInt(readLine());

        let b = parseInt(readLine());

        let obj = new Solution();
        let res = obj.lcmAndGcd(a, b);

        let S_res = '';
        for (let i = 0; i < res.length; i++) {
            S_res += (res[i]);
            S_res += ' ';
        }
        console.log(S_res);
        console.log("~");
    }
}

// Position this line where user code will be pasted.

// } Driver Code Ends



class Solution {
    /**
    * @param number a
    * @param number b
    * @returns number[]
    */
    lcmAndGcd(a, b) {
        // Function to calculate GCD using Euclidean algorithm
        function gcd(x, y) {
            while (y !== 0) {
                let temp = y;
                y = x % y;
                x = temp;
            }
            return x;
        }

        // Calculate GCD
        let gcdValue = gcd(a, b);

        // Calculate LCM using the formula: LCM(a, b) = (a * b) / GCD(a, b)
        let lcmValue = (a * b) / gcdValue;

        return [lcmValue, gcdValue];
    }
}
