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

// Structure of node of the tree
class node {
	
	constructor()
	{
	   this.sum=0;
	   this.prefixsum=0;
	   this.suffixsum=0;
	   this.maxsum=0;    
	}
}

// A Max of 1000 Node Array
let tree = new Array(4 * 1000);
// Utility funciton to build the tree
function build(arr, low, high, index)
{
	if (low == high) {
		tree[index].sum = arr[low];
		tree[index].prefixsum = arr[low];
		tree[index].suffixsum = arr[low];
		tree[index].maxsum = arr[low];
	} else {
		let mid = Math.floor((low + high) / 2);
		build(arr, low, mid, 2 * index + 1);
		build(arr, mid + 1, high, 2 * index + 2);
		tree[index].sum = tree[2 * index + 1].sum + tree[2 * index + 2].sum;
		tree[index].prefixsum = Math.max(tree[2 * index + 1].prefixsum, tree[2 * index + 1].sum + tree[2 * index + 2].prefixsum);
		tree[index].suffixsum = Math.max(tree[2 * index + 2].suffixsum, tree[2 * index + 2].sum + tree[2 * index + 1].suffixsum);
		tree[index].maxsum = Math.max(tree[index].prefixsum, Math.max(tree[index].suffixsum, Math.max(tree[2 * index + 1].maxsum, Math.max(tree[2 * index + 2].maxsum,tree[2 * index + 1].suffixsum + tree[2 * index + 2].prefixsum))));
	}
}



function main() {
    for(let i=0;i<4*1000;i++)
    {
        tree[i] = new node();
    }
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);
        let q = parseInt(input_line[1]);
        let arr = new Array(n);
        input_line = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            arr[i] = input_line[i];
        }
        build(arr, 0,n-1,0);
        let obj = new Solution();
        for(let i=0;i<q;i++)
        {
            input_line = readLine().split(' ').map(x=>parseInt(x));
            let typ = input_line[0];
            let x = input_line[1];
            let y = input_line[2];
            if(typ==1){
                let ans = obj.query(arr, n, x ,y);
                if(ans==-0)
                ans=0;
                console.log(ans);
            }
            else{
                obj.update(arr, n, x, y);   
            }
        }
    }
}
// } Driver Code Ends

// Back-end complete function Template for JavaScript

/**
 * @class Solution
 * This class implements a segment tree to perform range queries and updates efficiently.
 */

class Solution {
    
    /**
     * updateUtil
     * A recursive function to update a value at a given index in the segment tree.
     * 
     * @param {number[]} arr - The original array.
     * @param {number} index - The current index in the segment tree.
     * @param {number} low - The lower bound of the segment range.
     * @param {number} high - The upper bound of the segment range.
     * @param {number} idx - The index in the original array to be updated.
     * @param {number} value - The new value to be set at the given index.
     */
    updateUtil(arr, index, low, high, idx, value) {
        if (low === high) {
            // Updating the leaf node with the new value.
            tree[index].sum = value;
            tree[index].prefixsum = value;
            tree[index].suffixsum = value;
            tree[index].maxsum = value;
        } else {
            let mid = Math.floor((low + high) / 2);
            
            // Recursively update the left or right subtree based on index position.
            if (idx <= mid) {
                this.updateUtil(arr, 2 * index + 1, low, mid, idx, value);
            } else {
                this.updateUtil(arr, 2 * index + 2, mid + 1, high, idx, value);
            }

            // Updating the current segment tree node after the child nodes are updated.
            tree[index].sum = tree[2 * index + 1].sum + tree[2 * index + 2].sum;
            tree[index].prefixsum = Math.max(
                tree[2 * index + 1].prefixsum,
                tree[2 * index + 1].sum + tree[2 * index + 2].prefixsum
            );
            tree[index].suffixsum = Math.max(
                tree[2 * index + 2].suffixsum,
                tree[2 * index + 2].sum + tree[2 * index + 1].suffixsum
            );
            tree[index].maxsum = Math.max(
                tree[index].prefixsum,
                Math.max(
                    tree[index].suffixsum,
                    Math.max(
                        tree[2 * index + 1].maxsum,
                        Math.max(
                            tree[2 * index + 2].maxsum,
                            tree[2 * index + 1].suffixsum + tree[2 * index + 2].prefixsum
                        )
                    )
                )
            );
        }
    }

    /**
     * queryUtil
     * A recursive function to get the maximum sum in a given range.
     * 
     * @param {number[]} arr - The original array.
     * @param {number} index - The current index in the segment tree.
     * @param {number} low - The lower bound of the segment range.
     * @param {number} high - The upper bound of the segment range.
     * @param {number} l - The left bound of the query range.
     * @param {number} r - The right bound of the query range.
     * @returns {Object} - The node containing the max sum information.
     */
    queryUtil(arr, index, low, high, l, r) {
        let result = new node();
        result.sum = result.prefixsum = result.suffixsum = result.maxsum = -1000000000;
        
        // If the query range is completely outside the segment range, return default node.
        if (r < low || high < l) return result;
        
        // If the current segment is fully within the query range, return the segment tree node.
        if (l <= low && high <= r) {
            return tree[index];
        }

        let mid = Math.floor((low + high) / 2);

        // If the entire range lies in the right subtree, query right subtree.
        if (l > mid) {
            return this.queryUtil(arr, 2 * index + 2, mid + 1, high, l, r);
        }
        
        // If the entire range lies in the left subtree, query left subtree.
        if (r <= mid) {
            return this.queryUtil(arr, 2 * index + 1, low, mid, l, r);
        }

        // If the range is split across left and right subtrees, query both.
        let left = this.queryUtil(arr, 2 * index + 1, low, mid, l, r);
        let right = this.queryUtil(arr, 2 * index + 2, mid + 1, high, l, r);

        // Combine results from left and right children.
        result.sum = left.sum + right.sum;
        result.prefixsum = Math.max(left.prefixsum, left.sum + right.prefixsum);
        result.suffixsum = Math.max(right.suffixsum, right.sum + left.suffixsum);
        result.maxsum = Math.max(
            result.prefixsum,
            Math.max(
                result.suffixsum,
                Math.max(
                    left.maxsum,
                    Math.max(right.maxsum, left.suffixsum + right.prefixsum)
                )
            )
        );

        return result;
    }

    /**
     * update
     * Function to update a value in the array and the segment tree.
     * 
     * @param {number[]} arr - The original array.
     * @param {number} arrSize - The size of the array.
     * @param {number} index - The index of the element to update (1-based index).
     * @param {number} value - The new value to be assigned at the given index.
     */
    update(arr, arrSize, index, value) {
        arr[index - 1] = value; // Convert to 0-based index.
        this.updateUtil(arr, 0, 0, arrSize - 1, index - 1, value);
    }

    /**
     * query
     * Function to return the maximum sum in the given range.
     * 
     * @param {number[]} arr - The original array.
     * @param {number} arrSize - The size of the array.
     * @param {number} l - The left boundary of the range (1-based index).
     * @param {number} r - The right boundary of the range (1-based index).
     * @returns {number} - The maximum subarray sum within the given range.
     */
    query(arr, arrSize, l, r) {
        return this.queryUtil(arr, 0, 0, arrSize - 1, l - 1, r - 1).maxsum;
    }
}
