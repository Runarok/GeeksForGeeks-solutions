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
    
function constructSTUtil(arr, ss, se, st, si) {
        if (ss == se) {
            st[si] = arr[ss];
            return arr[ss];
        }

        let mid = getMid(ss, se);

        st[si] = constructSTUtil(arr, ss, mid, st, si * 2 + 1) +
                      constructSTUtil(arr, mid + 1, se, st, si * 2 + 2);

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
                let ans=g.getSum(st, n, a, b);
                if(ans==-0)
                ans=0;
                console.log(ans);
            } else
                g.updateValue(arr, st, n, a, b);
        }
    
console.log("~");
}
}

// } Driver Code Ends

class Solution {

    // Builds the segment tree for sum operation.
    build(arr, st, start, end, stIndex) {
        if (start === end) {
            st[stIndex] = arr[start];
            return;
        }

        const mid = Math.floor((start + end) / 2);
        this.build(arr, st, start, mid, 2 * stIndex + 1); // Left child
        this.build(arr, st, mid + 1, end, 2 * stIndex + 2); // Right child

        // Sum the left and right child nodes
        st[stIndex] = st[2 * stIndex + 1] + st[2 * stIndex + 2];
    }

    // Updates the segment tree with the new value at the given index.
    updateValue(arr, st, n, index, val) {
        if (index < 0 || index >= n) return;

        arr[index] = val;
        this.updateST(index, val, st, 0, n - 1, 0);
    }

    // Updates the segment tree with the new value at the given index.
    updateST(index, newVal, st, stStart, stEnd, stIndex) {
        if (index < stStart || index > stEnd) return;

        if (stStart === stEnd) {
            st[stIndex] = newVal;
            return;
        }

        const mid = Math.floor((stStart + stEnd) / 2);
        this.updateST(index, newVal, st, stStart, mid, 2 * stIndex + 1); // Left child
        this.updateST(index, newVal, st, mid + 1, stEnd, 2 * stIndex + 2); // Right child

        // Update current node after left and right children are updated
        st[stIndex] = st[2 * stIndex + 1] + st[2 * stIndex + 2];
    }

    // Returns the sum of elements in the range [l, r].
    getSum(st, n, l, r) {
        if (l < 0 || r >= n || l > r) return 0; // Invalid range

        return this.queryST(l, r, st, 0, n - 1, 0);
    }

    // Queries the segment tree to get the sum in the given range.
    queryST(l, r, st, stStart, stEnd, stIndex) {
        // No overlap
        if (r < stStart || l > stEnd) {
            return 0;
        }

        // Complete overlap
        if (l <= stStart && r >= stEnd) {
            return st[stIndex];
        }

        // Partial overlap
        const mid = Math.floor((stStart + stEnd) / 2);
        const leftSum = this.queryST(l, r, st, stStart, mid, 2 * stIndex + 1); // Left child query
        const rightSum = this.queryST(l, r, st, mid + 1, stEnd, 2 * stIndex + 2); // Right child query

        return leftSum + rightSum; // Combine the results of both children
    }
}
