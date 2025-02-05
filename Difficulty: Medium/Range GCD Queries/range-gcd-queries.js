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
    
function constructSTUtil(arr, ss, se, st, si) {
        if (ss == se) {
            st[si] = arr[ss];
            return arr[ss];
        }

        let mid = getMid(ss, se);

        st[si] = gcd(constructSTUtil(arr, ss, mid, st, si * 2 + 1) ,constructSTUtil(arr, mid + 1, se, st, si * 2 + 2));

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
            if (ch == "0") {
                let ans=g.findRangeGcd(a, b, st, n);
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

/**
 * updateValue
 * Function used to update the value present in the given array `arr` at a specified `index` to `new_val`.
 * @param {number[]} arr (given array)
 * @param {number} n (size of arr)
 * @param {number} index (index to update)
 * @param {number} new_val (new value to update at index)
 * @param {number[]} st (constructed segment-tree)
 * 
 * findRangeGcd
 * Function used to find the gcd of a given range within the array.
 * @param {number[]} st (constructed segment-tree)
 * @param {number} n (size of array)
 * @param {number} l (left index of the range)
 * @param {number} r (right index of the range)
 * @returns {number} The gcd of the range [l, r]
*/

class Solution {
    // Helper function to compute GCD of two numbers
    gcd(a, b) {
        if (b === 0) return a;
        return this.gcd(b, a % b);
    }

    // Recursive function to update nodes in the segment tree that cover the given index
    updateValueUtil(ss, se, index, new_val, si, st) {
        // Base case: If index is out of the range of this node's segment
        if (index < ss || index > se) return;
        
        // If we're at a leaf node (single element), update the value directly
        if (ss === se) {
            st[si] = new_val;
            return;
        }
        
        // Otherwise, check if the index lies within the left or right child
        let mid = Math.floor((ss + se) / 2);
        
        // Update left or right child recursively
        if (index <= mid)
            this.updateValueUtil(ss, mid, index, new_val, 2 * si + 1, st);
        else
            this.updateValueUtil(mid + 1, se, index, new_val, 2 * si + 2, st);

        // After updating the child, update the current node's value (gcd of the two children)
        st[si] = this.gcd(st[2 * si + 1], st[2 * si + 2]);
    }

    // Function to update a value in the input array and segment tree
    updateValue(index, new_val, arr, st, n) {
        // Base case: If the index is invalid
        if (index < 0 || index >= n) {
            return;
        }

        // Update the value in the input array
        arr[index] = new_val;

        // Update the segment tree to reflect the new value
        this.updateValueUtil(0, n - 1, index, new_val, 0, st);
    }

    // Recursive function to get the gcd of the range [qs, qe]
    findGcd(ss, se, qs, qe, si, st) {
        // Case 1: If the segment of this node is outside the given range, return 0
        if (ss > qe || se < qs) return 0;
        
        // Case 2: If this node's segment is fully inside the given range, return the gcd for this node
        if (qs <= ss && qe >= se) return st[si];

        // Case 3: If part of the segment overlaps with the given range, recursively find gcd in the children
        let mid = Math.floor((ss + se) / 2);
        return this.gcd(
            this.findGcd(ss, mid, qs, qe, 2 * si + 1, st),
            this.findGcd(mid + 1, se, qs, qe, 2 * si + 2, st)
        );
    }

    // Function to find the gcd of the range [l, r] using the segment tree
    findRangeGcd(l, r, st, n) {
        // Base case: If the range is invalid
        if (l < 0 || r >= n || l > r) {
            return -1;
        }
        
        // Call the recursive function to find the gcd of the range
        return this.findGcd(0, n - 1, l, r, 0, st);
    }
}
