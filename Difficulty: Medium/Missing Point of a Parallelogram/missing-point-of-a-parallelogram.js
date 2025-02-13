//{ Driver Code Starts
//Initial Template for javascript


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+=" ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let A = new Array(2);
        let B = new Array(2);
        let C = new Array(2);
        
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<2;i++){
            A[i] = input_ar1[i];
        }
        input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<2;i++){
            B[i] = input_ar1[i];
        }
        input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<2;i++){
            C[i] = input_ar1[i];
        }
        let obj = new Solution();
        let res = obj.findPoint(A,B,C);
        printList(res,res.length);
        
    }
}
// } Driver Code Ends

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @returns {number[]}
*/

class Solution{
    /**
     * @param {number[]} A
     * @param {number[]} B
     * @param {number[]} C
     * @returns {number[]}
     */
    findPoint(A, B, C) {
        const [x1, y1] = A;
        const [x2, y2] = B;
        const [x3, y3] = C;
        
        // Calculate the three possible points D
        const D1 = [x1 + x3 - x2, y1 + y3 - y2]; // D1 = A + C - B
        const D2 = [x1 + x2 - x3, y1 + y2 - y3]; // D2 = A + B - C
        const D3 = [x2 + x3 - x1, y2 + y3 - y1]; // D3 = B + C - A
        
        // Function to compare two points lexicographically
        function lexicographicCompare(p1, p2) {
            if (p1[0] === p2[0]) {
                return p1[1] < p2[1]; // Compare y if x's are equal
            }
            return p1[0] < p2[0]; // Compare x
        }

        // Find the lexicographically smallest point
        let smallestD = D1; // Start with the first point
        if (lexicographicCompare(D2, smallestD)) {
            smallestD = D2;
        }
        if (lexicographicCompare(D3, smallestD)) {
            smallestD = D3;
        }
        
        // Return the result formatted to 6 decimal places
        return [smallestD[0].toFixed(6), smallestD[1].toFixed(6)];
    }
}
