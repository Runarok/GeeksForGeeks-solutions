//{ Driver Code Starts
//Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}


let codes = {};
let freq = {};
//MinHeap structure
class MinHeapNode
{
  constructor(data, freq)
  {
    this.data = data;
    this.freq = freq;
    this.left = null;
    this.right = null;
  }
};

function comperator(l,r)
{
    return (l.freq - r.freq);
}

let codesStr = "";
function printCodes(root, str)
{
  if (!root)
    return;
  if (root.data != '$')
    console.log(root.data + ": " + str);
  printCodes(root.left, str + "0");
  printCodes(root.right, str + "1");
}

function storeCodes(root, str)
{
  if (root==null)
    return;
  if (root.data != '$')
    codes[root.data]=str;
  storeCodes(root.left, str + "0");
  storeCodes(root.right, str + "1");
}

//priority_queue<MinHeapNode*, vector<MinHeapNode*>, compare> 
class MinHeap { 
    constructor() {
        this.heap_size = 0;
        this.harr = new Array();
    }
    parent(i){
      return Math.floor((i - 1) / 2); 
    }
    left(i){ 
      return (2 * i + 1);
    }
    right(i){ 
      return (2 * i + 2); 
    }

    extractMin() {
        // Your code here.
        if (this.heap_size <= 0) return -1;
        if (this.heap_size == 1) {
            this.heap_size--;
            return this.harr[0];
        }

        let root = this.harr[0];
        this.harr[0] = this.harr[this.heap_size - 1];
        this.harr[this.heap_size - 1] = new MinHeapNode("$",Number.MIN_VALUE);
        this.heap_size--;

        this.MinHeapify(0);

        return root;
    }

    insertKey(k) {
        // Your code here.
        this.heap_size++;
        let i = this.heap_size - 1;
        this.harr[i] = k;

        while (i !== 0 && this.harr[this.parent(i)].freq > this.harr[i].freq) {
            let temp = this.harr[i];
            this.harr[i] = this.harr[this.parent(i)];
            this.harr[this.parent(i)] = temp;
            i = this.parent(i);
        }
    }

    deleteKey(i) {
        if (i < this.heap_size) {
            this.decreaseKey(i, new MinHeapNode("$",Number.MIN_VALUE));
            this.extractMin();
        }
    }

    decreaseKey(i,  new_val) {
        this.harr[i] = new_val;
        while (i != 0 && this.harr[this.parent(i)].freq > this.harr[i].freq) {
            let temp = this.harr[i];
            this.harr[i] = this.harr[this.parent(i)];
            this.harr[this.parent(i)] = temp;
            i = this.parent(i);
        }
    }

    MinHeapify(i) {
        let l = this.left(i);
        let r = this.right(i);
        let smallest = i;
        if (l < this.heap_size && this.harr[l].freq < this.harr[i].freq) smallest = l;
        if (r < this.heap_size && this.harr[r].freq < this.harr[smallest].freq) smallest = r;
        if (smallest != i) {
            let temp = this.harr[i];
            this.harr[i] = this.harr[smallest];
            this.harr[smallest] = temp;
            this.MinHeapify(smallest);
        }
    }
}


let minHeap = new MinHeap();


//huffman Code function
function HuffmanCodes()
{
  let left, right, top;
  Object.keys(freq).forEach((key) => minHeap.insertKey(new MinHeapNode(key,freq[key])));
  while (minHeap.heap_size != 1)
  {
    left = minHeap.extractMin();
    // minHeap.deleteKey(0);
    right = minHeap.extractMin();
    // minHeap.deleteKey(0);
    top = new MinHeapNode('$', left.freq + right.freq);
    top.left = left;
    top.right = right;
    minHeap.insertKey(top);
  }
  storeCodes(minHeap.extractMin(), "");
}

function calcFreq(str, n)
{
  for (let i=0; i<str.length; i++)
    if(freq[str[i]])
      freq[str[i]]++;
    else
      freq[str[i]] = 1;
}


function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let str = readLine();
    let enStr="",deStr;
    calcFreq(str,str.length);
    HuffmanCodes();
    
    
    for(let it = 0;it<str.length;it++){
     
      enStr+=codes[str[it]];
    }
    let obj = new Solution();

    deStr = obj.decode_file(minHeap.harr[0],enStr);
    console.log(deStr);
  }
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {MinHeapNode} root
 * @param {string} s
 * @return {string} 
*/

class Solution {

  // Function to decode the encoded string using the Huffman tree
  decode_file(root, s) {
    // Initialize the current node as the root of the Huffman tree
    let current = root;
    let decodedStr = ''; // To store the decoded string

    // Traverse the encoded string
    for (let i = 0; i < s.length; i++) {
      
      // Move to the left or right node based on the current bit ('0' or '1')
      if (s[i] === '0') {
        current = current.left; // Move left for '0'
      } else {
        current = current.right; // Move right for '1'
      }

      // If a leaf node is reached, append the data to the result and reset the current node to the root
      if (current.left === null && current.right === null) {
        decodedStr += current.data; // Add the character to the decoded string
        current = root; // Reset to the root of the tree
      }
    }

    // If the decoded string is empty, return an empty string
    if (decodedStr.length <= 1) {
      return '';
    }
    
    // Return the decoded string
    return decodedStr;
  }
}

