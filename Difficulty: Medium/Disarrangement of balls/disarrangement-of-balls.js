//{ Driver Code Starts

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

        let n = parseInt(readLine());

        let obj = new Solution();
        let res = obj.countDer(n);
        console.log(res);
    }
}

// } Driver Code Ends

class Solution {
    /**
    * @param number n
    * @returns number
    */
    countDer(n) {
        if (n === 1) return 0; // Base case: Derangement for 1 is 0
        if (n === 2) return 1; // Base case: Derangement for 2 is 1
        
        let d1 = 0; // D(n-2)
        let d2 = 1; // D(n-1)
        let dn = 0; // D(n)

        // Compute derangements iteratively for n >= 3
        for (let i = 3; i <= n; i++) {
            dn = (i - 1) * (d1 + d2); // Derangement formula
            d1 = d2; // Update previous derangement values
            d2 = dn; // Update derangement for (n-1)
        }
        
        return dn; // Return the derangement for n
    }
}
