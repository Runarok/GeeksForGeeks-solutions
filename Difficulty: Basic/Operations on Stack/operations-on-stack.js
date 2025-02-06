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
        let s = new Stack();
        let q = parseInt(readLine());
        let input_ar1 = readLine().split(' ');
        let index = 0;
        let obj = new Solution();
        while(q--){
            let ch = input_ar1[index++];
            if(ch=='i'){
                let x = parseInt(input_ar1[index++]);
                obj.insert(s,x);
            }
            else if(ch=='r'){
                obj.remove(s);
            }
            else if(ch=='h'){
                obj.headOf_Stack(s);
            }
            else if(ch=='f'){
                let x = parseInt(input_ar1[index++]);
                if(obj.find(s,x)){
                    console.log("Yes");
                }
                else{
                    console.log("No");
                }
                
            }
        }
        
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for JavaScript

class Solution 
{
    /**
     * Pushes an element into the stack.
     * @param {stack} s - The stack object where the element will be pushed
     * @param {number} x - The element to be pushed onto the stack
     */
    insert(s, x)
    {
        // Push the element 'x' onto the stack's array
        s.arr.push(x);
        // Increment the 'top' pointer to reflect the new top element
        s.top++;
    }
    
    /**
     * Removes the top element from the stack.
     * @param {stack} s - The stack object from which the element will be removed
     */
    remove(s)
    {
        // Pop the top element from the stack's array
        s.arr.pop();
        // Decrement the 'top' pointer to reflect the removal of the element
        s.top--;
    }
    
    /**
     * Prints the top element of the stack.
     * @param {stack} s - The stack object from which the top element will be printed
     */
    headOf_Stack(s)
    {
        // Print the element at the top of the stack
        console.log(s.arr[s.top]);
    }
    
    /**
     * Searches for an element in the stack.
     * @param {stack} s - The stack object where the element will be searched
     * @param {number} val - The value to be searched in the stack
     * @returns {boolean} - Returns true if the element is found, otherwise false
     */
    find(s, val)
    {
        // Iterate through the stack's array up to the 'top' pointer
        for(let i = 0; i <= s.top; i++){
            // If the element is found, return true
            if(s.arr[i] == val) return true;
        }
        // If the element is not found, return false
        return false;
    }
}
