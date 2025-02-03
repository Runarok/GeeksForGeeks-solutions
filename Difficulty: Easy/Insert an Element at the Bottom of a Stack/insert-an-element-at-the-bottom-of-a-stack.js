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
        let [n,x] = readLine().trim().split(" ").map((x) => Number(x));
        let arr = readLine().trim().split(" ").map((x) => Number(x));
        let obj = new Solution();
        let res = obj.insertAtBottom(arr, x);
        let s = "";
        for(let it of res){
            s+=it+" ";
        }
        console.log(s);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript
/**
 * @param {Stack} st
 * @param {number} x
 * @returns {Stack}
 */

class Solution {
    // Function to insert an element at the bottom of a stack.
    
    solve(st, x) {
        // Base case: If stack is empty, push the element
        if (st.length === 0) {
            st.push(x);
            return;
        }
        
        // Pop the top element
        const element = st.pop();
        
        // Recursively insert the element at the bottom
        this.solve(st, x);
        
        // Push the popped element back on the stack
        st.push(element);
    }
    
    insertAtBottom(st, x) {
        // Call the recursive function to insert the element at the bottom
        this.solve(st, x);
        return st;
    }
}
