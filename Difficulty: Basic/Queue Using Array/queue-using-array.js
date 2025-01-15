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
        let obj = new MyQueue();
        let q = parseInt(readLine());
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let index = 0;
        let s = '';
        while(q--){
            if(input_ar1[index] === 1){
                index++;
                let a = input_ar1[index++];
                obj.push(a);
            }
            else{
                index++;
                s += obj.pop() + " ";
            }
        }
        console.log(s);
        
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript
class MyQueue {
    
    constructor() {
        // Initialize front and rear pointers and an empty array
        this.front = 0;
        this.rear = 0;
        this.size = 0; // Current size of the queue
        this.capacity = 10; // Initial capacity of the array
        this.arr = new Array(this.capacity); // Array to store queue elements
    }

    /**
     * @param {number} x
     */
    push(x) {
        // Resize the array if it's full
        if (this.size === this.capacity) {
            this.resize(this.capacity * 2); // Double the capacity
        }

        // Insert element at the rear of the queue
        this.arr[this.rear] = x;
        this.rear = (this.rear + 1) % this.capacity; // Circular increment
        this.size++;
    }

    /**
     * @returns {number}
     */
    pop() {
        // If the queue is empty, return -1
        if (this.size === 0) {
            return -1;
        }

        // Pop the element from the front of the queue
        let poppedElement = this.arr[this.front];
        this.front = (this.front + 1) % this.capacity; // Circular increment
        this.size--;

        // Resize the array when the queue becomes too empty (to save space)
        if (this.size <= this.capacity / 4 && this.capacity > 10) {
            this.resize(Math.floor(this.capacity / 2)); // Halve the capacity
        }

        return poppedElement;
    }

    // Helper function to resize the queue array
    resize(newCapacity) {
        let newArr = new Array(newCapacity);

        // Copy elements from the old array to the new array
        for (let i = 0; i < this.size; i++) {
            newArr[i] = this.arr[(this.front + i) % this.capacity];
        }

        this.arr = newArr;
        this.front = 0;
        this.rear = this.size;
        this.capacity = newCapacity;
    }
}
