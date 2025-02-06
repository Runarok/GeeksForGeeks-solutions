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

        let p = new Array(2);
        let q = new Array(2);
        let r = new Array(2);
        let input = readLine().split(' ').map(x => parseInt(x));

        p[0] = BigInt(input[0]);
        p[1] = BigInt(input[1]);

        q[0] = BigInt(input[2]);
        q[1] = BigInt(input[3]);

        r[0] = BigInt(input[4]);
        r[1] = BigInt(input[5]);

        let obj = new Solution();
        let res = obj.InternalCount(p, q, r);
        console.log(res.toString());
    
console.log("~");
}
}

// } Driver Code Ends


class Solution {
    /**
    * @param {number[]} p
    * @param {number[]} q
    * @param {number[]} r
    * @returns {BigInt}
    */
    
    // Function to calculate GCD of two numbers
    gcd(a, b) {
        if (b === BigInt(0)) return a;
        return this.gcd(b, a % b);
    }
    
    // Function to calculate the absolute value of a number
    abs(x) {
        return x < BigInt(0) ? -x : x;
    }

    // Function to calculate the boundary count between two points
    getBoundaryCount(p, q) {
        if (p[0] === q[0]) return this.abs(p[1] - q[1]) - BigInt(1);
        if (p[1] === q[1]) return this.abs(p[0] - q[0]) - BigInt(1);
        return this.gcd(this.abs(p[0] - q[0]), this.abs(p[1] - q[1])) - BigInt(1);
    }

    // Function to calculate the number of internal lattice points in a triangle
    InternalCount(p, q, r) {
        const boundaryPoints = this.getBoundaryCount(p, q) + 
                               this.getBoundaryCount(p, r) + 
                               this.getBoundaryCount(q, r) + 
                               BigInt(3);
        const doubleArea = this.abs(p[0] * (q[1] - r[1]) + q[0] * (r[1] - p[1]) + r[0] * (p[1] - q[1]));
        return (doubleArea - boundaryPoints + BigInt(2)) / BigInt(2);
    }
}
