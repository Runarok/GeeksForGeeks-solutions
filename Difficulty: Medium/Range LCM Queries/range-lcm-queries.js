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

let st = new Array();

function getMid(st, end)
{ 
    return Math.floor((st + (end - st) / 2)); 
}

function gcd(a,b)
{
    if(b==0)
    return a;
    return gcd(b,a%b);
}
function lcm(a,b)
{
    let g=gcd(a,b);
    return (a/g)*b;
}
    
function constructSTUtil(arr, ss, se, st, si) {
        if (ss == se) {
            st[si] = arr[ss];
            return arr[ss];
        }

        let mid = getMid(ss, se);

        st[si] = lcm(constructSTUtil(arr, ss, mid, st, si * 2 + 1) ,constructSTUtil(arr, mid + 1, se, st, si * 2 + 2));
        return st[si];
}


// construct segment tree
function constructST(arr, n) {
    let x = (Math.ceil(Math.log(n) / Math.log(2)));
    let max_size = 2 * (Math.pow(2, x)) - 1;
    st = new Array(max_size);
    constructSTUtil(arr, 0, n - 1, st, 0);
    return st;
}


function main() {
    let t = parseInt(readLine());
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(" ");
        let n = parseInt(input_line[0]);
        let q = parseInt(input_line[1]);
        let arr = new Array(n);
        input_line = readLine().split(" ");
        for(let i=0;i<n;i++)
            arr[i] = parseInt(input_line[i]);
        
        let st = constructST(arr,n);
        
        for(let i=0;i<q;i++)
        {
            input_line = readLine().split(" ")
            let ch = input_line[0];
            let a = parseInt(input_line[1]);
            let b = parseInt(input_line[2]);
            let g = new Solution();
            if (ch == "G") {
                let ans=g.getLCM(st,arr,n, a, b);
                if(ans==-0)
                ans=0;
                console.log(ans);
            } else
                g.updateValue(a, b, arr, st, n);
        }
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @class Solution
 * This class implements a segment tree for efficiently updating values and querying LCM in a given range.
 */

class Solution {
    /**
     * updateValue
     * Updates the value in the given array at the specified index and updates the segment tree.
     * 
     * @param {number} index - The index to update (0-based).
     * @param {number} new_val - The new value to update at the given index.
     * @param {number[]} arr - The original array.
     * @param {number[]} st - The segment tree.
     * @param {number} n - The size of the array.
     */
    updateValue(index, new_val, arr, st, n) {
        // Update the value in the array
        arr[index] = new_val;

        // Update the corresponding segment tree
        this.updateTree(st, 0, n - 1, index, new_val, 0);
    }

    /**
     * updateTree
     * A recursive function to update the segment tree when a value in the array changes.
     * 
     * @param {number[]} st - The segment tree.
     * @param {number} ss - The start index of the current segment.
     * @param {number} se - The end index of the current segment.
     * @param {number} i - The index to update (0-based).
     * @param {number} val - The new value to set.
     * @param {number} si - The current index in the segment tree.
     */
    updateTree(st, ss, se, i, val, si) {
        // If the index to update is outside the current segment, return
        if (i < ss || i > se) return;

        // If we are at the leaf node, update its value
        if (ss === se) {
            st[si] = val;
            return;
        }

        // Recursively update the left or right subtree based on the index position
        let mid = getMid(ss, se);
        if (i <= mid) {
            this.updateTree(st, ss, mid, i, val, 2 * si + 1);
        } else {
            this.updateTree(st, mid + 1, se, i, val, 2 * si + 2);
        }

        // After updating child nodes, update the current node with the LCM of both children
        st[si] = lcm(st[2 * si + 1], st[2 * si + 2]);
    }

    /**
     * getLCM
     * Returns the LCM of elements in a given range [qs, qe].
     * 
     * @param {number[]} st - The segment tree.
     * @param {number[]} arr - The original array.
     * @param {number} n - The size of the array.
     * @param {number} qs - The left boundary of the range (0-based).
     * @param {number} qe - The right boundary of the range (0-based).
     * @returns {number} - The LCM of the given range.
     */
    getLCM(st, arr, n, qs, qe) {
        return this.queryTree(st, 0, n - 1, qs, qe, 0);
    }

    /**
     * queryTree
     * A recursive function to find the LCM of elements in a given range [qs, qe].
     * 
     * @param {number[]} st - The segment tree.
     * @param {number} ss - The start index of the current segment.
     * @param {number} se - The end index of the current segment.
     * @param {number} qs - The left boundary of the query range (0-based).
     * @param {number} qe - The right boundary of the query range (0-based).
     * @param {number} si - The current index in the segment tree.
     * @returns {number} - The LCM of the specified range.
     */
    queryTree(st, ss, se, qs, qe, si) {
        // If the query range is completely outside the current segment, return 1 (LCM identity)
        if (qs > se || qe < ss) {
            return 1;
        }

        // If the current segment is completely within the query range, return its LCM value
        if (qs <= ss && qe >= se) {
            return st[si];
        }

        // If the range partially overlaps, query both left and right subtrees
        let mid = getMid(ss, se);
        let leftLcm = this.queryTree(st, ss, mid, qs, qe, 2 * si + 1);
        let rightLcm = this.queryTree(st, mid + 1, se, qs, qe, 2 * si + 2);

        // Return the LCM of the left and right results
        return lcm(leftLcm, rightLcm);
    }
}
