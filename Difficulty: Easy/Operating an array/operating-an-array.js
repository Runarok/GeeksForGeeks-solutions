//{ Driver Code Starts

// Position this line where user code will be pasted.

const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output : process.stdout});

let input = [];
rl.on('line', (line) => { input.push(line); }).on('close', () => {
    let t = parseInt(input[0], 10);
    let index = 1;

    for (let i = 0; i < t; i++) {
        let arr = input[index].split(' ').map(Number);
        index++;
        let [x, y, yi, z] = input[index].split(' ').map(Number);
        index++;

        let temp = arr.slice();
        let obj = new Solution();

        // searchEle
        if (obj.searchEle(arr, x)) {
            process.stdout.write("true ");
        } else {
            process.stdout.write("false ");
        }

        // insertEle
        obj.insertEle(arr, y, yi);
        temp.splice(yi, 0, y);
        if (arr.join(',') === temp.join(',')) {
            process.stdout.write("true ");
        } else {
            process.stdout.write("false ");
        }

        // deleteEle
        obj.deleteEle(arr, z);
        let tempIndex = temp.indexOf(z);
        if (tempIndex !== -1) {
            temp.splice(tempIndex, 1);
        }
        if (arr.join(',') === temp.join(',')) {
            process.stdout.write("true ");
        } else {
            process.stdout.write("false ");
        }
        console.log();
        console.log("~");
    }
});
// } Driver Code Ends

// User function Template for javascript

/**
 * searchEle
 * @param {number[]} arr
 * @param {number} x
 * @return {boolean}
 *
 * insertEle
 * @param {number[]} arr
 * @param {number} y
 * @param {number} yi
 * @return {void}
 *
 * deleteEle
 * @param {number[]} arr
 * @param {number} z
 * @return {void}
 */

class Solution {

    // Function to search for element x in the array
    searchEle(arr, x) {
        // Sort array before performing binary search
        arr = [...arr].sort((a, b) => a - b);
        const n = arr.length;
        let l = 0;
        let r = n - 1;
        
        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2);
            
            // If the element is found at mid index, return true
            if (arr[mid] === x) {
                return true;
            }
            
            // Adjust the search range based on comparison
            if (arr[mid] < x) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        
        // If element is not found, return false
        return false;
    }

    // Function to insert element y at index yi
    insertEle(arr, y, yi) {
        // Shift elements to the right to make space for y
        for (let i = arr.length - 1; i >= yi; i--) {
            arr[i + 1] = arr[i];
        }
        
        // Insert y at the desired index
        arr[yi] = y;
    }

    // Function to delete element z from the array
    deleteEle(arr, z) {
        const pos = arr.indexOf(z);
        
        // If element is found, shift remaining elements to the left
        if (pos !== -1) {
            for (let i = pos; i < arr.length - 1; i++) {
                arr[i] = arr[i + 1];
            }
            // Shorten the array by 1
            arr.length = arr.length - 1;
        }
    }
}
