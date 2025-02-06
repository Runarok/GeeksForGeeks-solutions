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

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let N = parseInt(readLine());
        let A = readLine().trim().split(" ").map((x) => parseInt(x));
        let Q = parseInt(readLine());
        let obj = new Solution();
        let segTree = obj.constructST(A,N);
        let store = readLine().trim().split(" ").map((x) => parseInt(x));
        let ans = [];
        for(let j = 0;j<Q;j++){
            let start,end;
            if(store[2*j] < store[2*j+1]){
                start = store[2*j];
                end = store[2*j+1];
            } else {
                start = store[2*j+1];
                end = store[2*j];
            }
            ans.push(obj.RMQ(segTree, N,start, end));
        }
        console.log(ans.join(" ")+" ");
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript
/**
 * @param {number[]} arr - The input array.
 * @param {number} n - The size of the array.
 * @returns {number[]} - The constructed segment tree.
 */

class Solution {
    // Function to construct the segment tree.
    build(arr, index, l, r) {
        if (l === r) {
            this.st[index] = arr[l];
            return;
        }
        let mid = Math.floor((l + r) / 2);
        this.build(arr, 2 * index + 1, l, mid);
        this.build(arr, 2 * index + 2, mid + 1, r);
        this.st[index] = Math.min(this.st[2 * index + 1], this.st[2 * index + 2]);
    }

    // Function to construct the segment tree.
    constructST(arr, n) {
        // Initialize the segment tree array
        this.st = new Array(2 * n);
        this.build(arr, 0, 0, n - 1);  // Build the tree
        return this.st;  // Return the constructed segment tree
    }

    // Function to perform a range query on the segment tree
    query(index, s, e, qs, qe) {
        // Total overlap
        if (qs <= s && e <= qe) {
            return this.st[index];
        }

        // No overlap
        if (s > qe || e < qs) {
            return Number.MAX_SAFE_INTEGER;
        }

        // Partial overlap
        let mid = Math.floor((s + e) / 2);
        const left = this.query(2 * index + 1, s, mid, qs, qe);
        const right = this.query(2 * index + 2, mid + 1, e, qs, qe);
        return Math.min(left, right);
    }

    // Function to compute the minimum of the given range of array elements.
    RMQ(st, n, qs, qe) {
        this.st = st;
        return this.query(0, 0, n - 1, qs, qe);
    }
}
