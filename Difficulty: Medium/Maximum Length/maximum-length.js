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
        let input_ar0 = readLine().split(' ').map(x=>parseInt(x));
        let a = input_ar0[0];
        let b = input_ar0[1];
        let c = input_ar0[2];
        let obj = new Solution();
        console.log(obj.solve(a, b, c));
        
    
console.log("~");
}
}
// } Driver Code Ends

//User function Template for JavaScript
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {number}
*/

class Solution {
    solve(a, b, c) {
        // Create a max heap to store the characters and their counts
        const maxHeap = new MaxHeap();
        
        // Add the counts of a, b, and c to the heap if they are greater than 0
        if (a > 0) maxHeap.push(['a', a]);
        if (b > 0) maxHeap.push(['b', b]);
        if (c > 0) maxHeap.push(['c', c]);
        
        let result = []; // Array to store the resulting string
        
        // While the heap is not empty, process the characters
        while (maxHeap.size() > 0) {
            let [char1, count1] = maxHeap.pop(); // Get the most frequent character from the heap
            
            // Check if the last two characters in the result are the same as the current one
            if (result.length >= 2 && result[result.length - 1] === char1 && result[result.length - 2] === char1) {
                // If the last two characters are the same, pick the next most frequent character from the heap
                if (maxHeap.size() === 0) {
                    return -1; // If no other character is available, return -1 (impossible to form a valid string)
                }
                let [char2, count2] = maxHeap.pop(); // Get the next most frequent character
                result.push(char2); // Add the second character to the result string
                if (count2 - 1 > 0) {
                    maxHeap.push([char2, count2 - 1]); // If there are remaining occurrences, push back the character with updated count
                }
                maxHeap.push([char1, count1]); // Push char1 back to the heap with its remaining count
            } else {
                // If the last two characters are not the same, add char1 to the result
                result.push(char1);
                if (count1 - 1 > 0) {
                    maxHeap.push([char1, count1 - 1]); // Push char1 back to the heap if it has more occurrences left
                }
            }
        }
        
        // Return the length of the resulting string, which is the longest string that can be formed
        return result.length;
    }
}

// MaxHeap class to maintain the elements based on their frequency (max heap logic)
class MaxHeap {
    constructor() {
        this.heap = []; // The heap is stored as an array
    }

    // Add a new element to the heap
    push([char, count]) {
        this.heap.push([char, count]); // Add the new element to the heap
        this.bubbleUp(); // Ensure that the heap order is maintained
    }

    // Remove and return the maximum element from the heap
    pop() {
        if (this.heap.length === 1) return this.heap.pop(); // If only one element is left, return it
        const max = this.heap[0]; // The maximum element is at the root of the heap
        this.heap[0] = this.heap.pop(); // Replace the root with the last element in the heap
        this.bubbleDown(0); // Ensure the heap order is maintained by bubbling down the new root
        return max;
    }

    // Return the size of the heap (number of elements in the heap)
    size() {
        return this.heap.length;
    }

    // Maintain heap order by bubbling up the last element in the heap
    bubbleUp() {
        let index = this.heap.length - 1; // Start from the last element
        const element = this.heap[index]; // The element to bubble up
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2); // Find the parent index
            const parent = this.heap[parentIndex]; // Get the parent element
            if (element[1] <= parent[1]) break; // If the parent element is greater than or equal, stop bubbling up
            this.heap[index] = parent; // Swap the element with its parent
            index = parentIndex; // Move up to the parent index
        }
        this.heap[index] = element; // Place the element in its correct position
    }

    // Maintain heap order by bubbling down the element at the given index
    bubbleDown(index) {
        const length = this.heap.length;
        const element = this.heap[index]; // The element to bubble down
        while (true) {
            let leftIndex = 2 * index + 1; // Index of the left child
            let rightIndex = 2 * index + 2; // Index of the right child
            let left, right;
            let swap = null;
            // If the left child exists, check if it is larger than the current element
            if (leftIndex < length) {
                left = this.heap[leftIndex];
                if (left[1] > element[1]) {
                    swap = leftIndex; // If the left child is larger, set swap to the left child index
                }
            }
            // If the right child exists, check if it is larger than the current element or left child
            if (rightIndex < length) {
                right = this.heap[rightIndex];
                if (
                    (swap === null && right[1] > element[1]) || // If no swap yet, check right child
                    (swap !== null && right[1] > left[1]) // If left child was larger, check right child
                ) {
                    swap = rightIndex; // If right child is larger, set swap to the right child index
                }
            }
            if (swap === null) break; // If no swap needed, break out of the loop
            this.heap[index] = this.heap[swap]; // Swap the element with the child
            index = swap; // Move down to the child index
        }
        this.heap[index] = element; // Place the element in its correct position
    }
}
