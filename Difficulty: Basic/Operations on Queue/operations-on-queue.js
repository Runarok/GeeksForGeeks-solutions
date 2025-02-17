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

class MyQueue {
    constructor(){
		this.front = 0;
		this.arr = [];
    }
	push(x){
	    this.arr.push(x);
	}
	pop(){
		if(this.front == this.arr.length)
            return -1;
        return this.arr[this.front++];
	} 
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let s = new MyQueue();
        let q = parseInt(readLine());
        let input_ar1 = readLine().split(' ');
        let index = 0;
        let obj = new Solution();
        while(q--){
            let ch = input_ar1[index++];
            if(ch === 'i'){
                let x = parseInt(input_ar1[index++]);
                obj.enqueue(s, x);
            }
            else if(ch === 'r'){
                obj.dequeue(s);
            }
            else if(ch === 'h'){
                console.log(obj.front(s));
            }
            else if(ch === 'f') {
	            let x = parseInt(input_ar1[index++]);
	            console.log(obj.find(s, x));
	        }
        }
    }
}
// } Driver Code Ends

// User function Template for JavaScript

/*class MyQueue {
    constructor(){
		this.front = 0;  // Tracks the front element in the queue
		this.arr = [];    // Holds the elements of the queue
    }
    
    // Method to add an element to the queue
	push(x){
	    this.arr.push(x);  // Adds the element to the end of the queue
	}
	
    // Method to remove and return the front element from the queue
	pop(){
		if(this.front == this.arr.length)  // Checks if the queue is empty
            return -1;
        return this.arr[this.front++];  // Returns the front element and increments the front pointer
	} 
}*/

class Solution {
    
    // Method to add an element to the queue
	enqueue(queue, element)
	{
	    queue.push(element);  // Adds the element to the end of the queue
	} 
	
	/**
     * @param {MyQueue} queue
    */
    
    // Method to remove the front element from the queue
	dequeue(queue)
	{
	   queue.pop();  // Removes the front element from the queue
	} 
	
	/**
     * @param {MyQueue} queue
     * @returns {number}
    */
    
    // Method to get the front element of the queue
	front(queue)
	{
	    // Checks if the queue is empty (front equals rear)
	    if(queue.front === queue.rear){
	        return -1;  // Returns -1 if the queue is empty
	    } 
	    return queue.arr[queue.front];  // Returns the front element of the queue
	} 
	
	/**
     * @param {MyQueue} queue
     * @param {number} element
     * @returns {string}
    */
    
    // Method to find if a given element is in the queue
	find(queue, element)
	{
	    // Loop through the queue starting from the front element
	    for(let i = queue.front; i < queue.arr.length; i++){
	        if(queue.arr[i] === element){  // Checks if the element matches any in the queue
	            return "Yes";  // Returns "Yes" if element is found
	        }
	    }
	    return "No";  // Returns "No" if element is not found in the queue
	} 
}

