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
    
    push(a){
        this.arr.push(a);
        this.top++;
    }
    
    pop(){
        this.arr.pop();
        this.top--;
    }
    
    front(){
        return this.arr[this.top];
    }
    
    empty(){
        if(this.top != -1)
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
        let sq = new StackQueue();
        let q = parseInt(readLine());
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let index = 0;
        let res = '';
        while(q--){
            let QueryType = input_ar1[index++];
            if(QueryType == 1){
                let a = input_ar1[index++];
                sq.push(a);
            }
            else{
                res += sq.pop() + " ";
            }
        }
        console.log(res);
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

class StackQueue {
    constructor() {
        // Initialize two stacks: s1 for pushing, s2 for popping
        this.s1 = [];
        this.s2 = [];
    }

    /**
     * Push an element into the queue using stack s1.
     * @param {number} B - The element to be pushed into the queue.
     */
    push(B) {
        // Simply push the element onto stack s1
        this.s1.push(B);
    }

    /**
     * Pop an element from the queue using two stacks.
     * @returns {number} - The element popped from the queue, or -1 if the queue is empty.
     */
    pop() {
        // If both stacks are empty, return -1 indicating the queue is empty
        if (this.s1.length === 0 && this.s2.length === 0) {
            return -1;
        }

        // If s2 is empty, transfer all elements from s1 to s2 to reverse their order
        if (this.s2.length === 0) {
            while (this.s1.length !== 0) {
                this.s2.push(this.s1.pop()); // Pop from s1 and push to s2
            }
        }

        // Pop the front of the queue from s2
        return this.s2.pop(); // The element at the front of the queue is now at the top of s2
    }
}
