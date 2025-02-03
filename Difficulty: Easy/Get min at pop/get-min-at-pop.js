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

class Stack{
    constructor(){
        this.arr = [];
        this.top = -1;
    }
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            arr[i] = input_ar1[i];
        let obj = new Solution();
        let mys = obj._push(arr, n);
        obj._getMinAtPop(mys);
        
    }
}
// } Driver Code Ends

// User function Template for JavaScript

class Solution {
    
    /**
     * @param {number[]} arr
     * @param {number} n
     * @returns {Stack}
     */
    // Function to push all the elements into the stack.
    _push(arr, n) {
        // Create a new stack instance
        let stack = new Stack();

        // Iterating over the array elements and pushing them into the stack
        for (let i = 0; i < n; i++) {
            stack.arr.push(arr[i]);
            stack.top++;
        }

        return stack;
    }

    /**
     * @param {Stack} s
     */
    // Function to print the minimum value in the stack each time while popping
    _getMinAtPop(s) {
        let values = [];

        // Pushing all the elements of the stack into a list (array)
        while (s.top !== -1) {
            values.push(s.arr[s.top]);
            s.arr.pop();
            s.top--;
        }

        // Create a new stack to keep track of the minimum elements
        let minStack = new Stack();
        
        // Push the last element into both the original stack and the minStack
        s.arr.push(values[values.length - 1]);
        s.top++;
        minStack.arr.push(values[values.length - 1]);
        minStack.top++;

        // Iterate over the list in reverse order (starting from second last element)
        for (let i = values.length - 2; i >= 0; i--) {
            // Push the current element into the original stack
            s.arr.push(values[i]);
            s.top++;

            // Compare the top elements of both stacks and push the minimum value into minStack
            if (s.arr[s.top] < minStack.arr[minStack.top]) {
                minStack.arr.push(s.arr[s.top]);
                minStack.top++;
            } else {
                minStack.arr.push(minStack.arr[minStack.top]);
                minStack.top++;
            }
        }

        // Print all the elements in minStack one by one
        let result = '';
        while (s.top !== -1) {
            result += minStack.arr[minStack.top] + " ";
            s.arr.pop();
            s.top--;
            minStack.arr.pop();
            minStack.top--;
        }

        console.log(result);
    }
}
