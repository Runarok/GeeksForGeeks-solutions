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
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let N = input_ar1[0];
        let Q = input_ar1[1];
        let arr = new Array(N);
        let input_ar2 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<N;i++)
            arr[i] = input_ar2[i];
        let queries = new Array(Q);
        for(let i=0;i<Q;i++)
        {
            let queryLine = readLine().split(' ').map(x=>parseInt(x));
            let L = queryLine[0];
            let R = queryLine[1];
            queries[i] = [L, R];
        }
        let obj = new Solution();
        let res = obj.maximumXor(N, Q, arr, queries);
        let s = '';
        for(let it of res)
            s+=it+" ";
        console.log(s);
        
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number} N
 * @param {number} Q
 * @param {number[]} arr
 * @param {number[][]} queries
 * @returns {number[]}
*/

class TrieNode {
    constructor() {
        this.children = [null, null];
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    // Function to insert a number into the Trie
    insert(num) {
        let curr = this.root;
        for (let i = 31; i >= 0; i--) {
            let bit = (num >> i) & 1;
            if (!curr.children[bit]) {
                curr.children[bit] = new TrieNode();
            }
            curr = curr.children[bit];
        }
    }

    // Function to calculate the maximum XOR of num with any number in the Trie
    maxNum(num) {
        let curr = this.root;
        let maxVal = 0;
        for (let i = 31; i >= 0; i--) {
            let bit = (num >> i) & 1;
            if (curr.children[1 - bit]) {
                maxVal = maxVal | (1 << i);
                curr = curr.children[1 - bit];
            } else {
                curr = curr.children[bit];
            }
        }
        return maxVal;
    }
}

class Solution {
    // Function to return the maximum XOR values for the queries
    maximumXor(N, Q, arr, queries) {
        // Sort the array arr
        arr.sort((a, b) => a - b);

        // Prepare results array
        let result = new Array(queries.length).fill(-1);

        // Prepare queries with index tracking
        let q = queries.map((query, idx) => [query[0], query[1], idx]);
        q.sort((a, b) => a[1] - b[1]);

        let ind = 0;
        let trie = new Trie();
        let n = arr.length;

        // Process each query
        for (let i = 0; i < queries.length; i++) {
            let xi = q[i][0];
            let mi = q[i][1];
            let idx = q[i][2];

            // Insert numbers into Trie as long as they are <= mi
            while (ind < n && arr[ind] <= mi) {
                trie.insert(arr[ind]);
                ind++;
            }

            // If no elements in arr are <= mi, set result to -1
            if (ind > 0) {
                result[idx] = trie.maxNum(xi);
            }
        }

        return result;
    }
}

