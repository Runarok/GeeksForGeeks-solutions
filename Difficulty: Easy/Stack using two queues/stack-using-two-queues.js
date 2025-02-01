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

class Queue{
    constructor(){
        this.arr = [];
        this.front = 0;
    }
    
    push(a){
        this.arr.push(a);
    }
    
    pop(){
        if(this.arr.length != this.front){
            let x = this.arr[this.front];
            this.front++;
            return x;
        }
        else
            return -1;
    }
    
    front_ele(){
        return this.arr[this.front];
    }
    
    empty(){
        if(this.arr.length != this.front)
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
        let qs = new QueueStack();
        let q = parseInt(readLine());
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let index = 0;
        let res = '';
        while(q--){
            let QueryType = input_ar1[index++];
            if(QueryType == 1){
                let a = input_ar1[index++];
                qs.push(a);
            }
            else{
                res += qs.pop() + " ";
            }
        }
        console.log(res);
        
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/*
class Queue{
    constructor(){
        this.arr = [];
        this.front = 0;
    }
    
    push(a){
        this.arr.push(a);
    }
    
    pop(){
        if(this.arr.length != this.front){
            let x = this.arr[this.front];
            this.front++;
            return x;
        }
        else
            return -1;
    }
    
    front_ele(){
        return this.arr[this.front];
    }
    
    empty(){
        if(this.arr.length != this.front)
            return false;
        else
            return true;
    }
}
*/


// Class to implement a stack using two queues
class QueueStack{
    constructor(){
        this.q1 = new Queue();  // First queue for holding elements
        this.q2 = new Queue();  // Second queue for transferring elements
    }
    
    /**
     * @param {number} x - The element to be pushed into the stack
     */
    
    // Function to push an element into stack using two queues.
    push(x){
        // Transfer all elements from q1 to q2
        while(!this.q1.empty()){
            let element = this.q1.front_ele();  // Get the front element of q1
            this.q1.pop();  // Pop the front element from q1
            this.q2.push(element);  // Push it to q2
        }
        
        // Push the new element into q1
        this.q1.push(x);
        
        // Transfer all elements back from q2 to q1 to maintain stack order
        while(!this.q2.empty()){
            let element = this.q2.front_ele();  // Get the front element of q2
            this.q2.pop();  // Pop the front element from q2
            this.q1.push(element);  // Push it back to q1
        }
    }
    
    /**
     * @returns {number} - The element popped from the stack
     */
    
    // Function to pop an element from stack using two queues.
    pop(){
        // If q1 is not empty, return the front element (top of the stack)
        if(!this.q1.empty()){
            let element = this.q1.front_ele();  // Get the front element of q1 (top of the stack)
            this.q1.pop();  // Pop the element from q1
            return element;
        }
        return -1;  // If q1 is empty, return -1 (stack is empty)
    }
}