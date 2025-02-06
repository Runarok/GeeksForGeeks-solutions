//{ Driver Code Starts
//Initial Template for javascript

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
    }
    
    push(a){
        this.arr.push(a);
    }
    
    pop(){
        this.arr.pop();
    }
    top(){
        let index = this.arr.length-1; 
        return this.arr[index];
    }
    empty(){
        if(this.arr.length !== 0)
            return false;
        else
            return true;
    }
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let st = new Stack();
        let n = parseInt(readLine());
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            st.push(input_ar1[i]);
        let obj = new Solution();
        let res = obj.pairWiseConsecutive(st)
        if(res === true){
            console.log("Yes");
        }
        else{
            console.log("No");
        }
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {Stack} st
 * @returns {boolean}
*/

/*
class Stack{
    constructor(){
        this.arr = [];
    }
    
    push(a){
        this.arr.push(a);
    }
    
    pop(){
        this.arr.pop();
    }
    top(){
        let index = this.arr.length-1; 
        return this.arr[index];
    }
    empty(){
        if(this.arr.length != 0)
            return false;
        else
            return true;
    }
}
*/

// User function Template for JavaScript

/**
 * @param {Stack} st - The stack to check for consecutive pairs
 * @returns {boolean} - Returns true if all pairs of consecutive numbers are found in the stack, else false
 */

class Solution {
    // Function to check if the stack contains consecutive pairs
    pairWiseConsecutive(st)
    {
        // Create a temporary stack to hold elements while processing
        const temp = new Stack();
        
        // Transfer all elements from the original stack to the temporary stack
        while(!st.empty()) {
            temp.push(st.top());  // Push the top element of 'st' to 'temp'
            st.pop();  // Remove the top element from 'st'
        }

        // Process elements from the temporary stack
        while (!temp.empty()) {
            // If 'st' is empty, just push the element from 'temp' back to 'st'
            if (st.empty()) {
                st.push(temp.top());  
                temp.pop();  // Remove the top element from 'temp'
            } else {
                // Get the value from the top of 'temp' for comparison
                const valToComp = temp.top();
                temp.pop();  // Remove the top element from 'temp'

                // Check if the current top of 'st' is consecutive to 'valToComp'
                if (valToComp === st.top()-1 || valToComp === st.top()+1) {
                    st.pop();  // Remove the consecutive element from 'st'
                } else {
                    return false;  // Return false if no consecutive pair is found
                }
            }
        }

        // Return true if all consecutive pairs have been processed successfully
        return true;
    }
}
