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

class Pair {
  constructor(first,second){
    this.first = first;
    this.second = second;
  }
}

class Node
{
    constructor(x){
        this.data=x;
        this.height = 1;
        this.left=null;
        this.right=null;
    }
}
function setHeights(n){
  if(n==null) return 0;
  n.height = 1 + Math.max( setHeights(n.left) , setHeights(n.right) );
  return n.height;
}

function buildTree(str)
{
    // Corner Case
    if (str.length === 0 || str[0] == 'N')
        return null;

    // Creating vector of strings from input
    // string after spliting by space
    let ip = new Array();
    
    let ip_str = str.split(" ");
    
    for (let i=0;i<ip_str.length;i++)
        ip.push(ip_str[i]);

    // Create the root of the tree
    let root = new Node(parseInt(ip[0]));

    // Push the root to the queue
    let queue = new Array();
    queue.push(root);

    // Starting from the second element
    let i = 1;
    while (queue.length!==0 && i < ip.length) {

        // Get and remove the front of the queue
        let currNode = queue[0];
        queue.shift();

        // Get the current node's value from the string
        let currVal = ip[i];

        // If the left child is not null
        if (currVal != "N") {

            // Create the left child for the current node
            currNode.left = new Node(parseInt(currVal));

            // Push it to the queue
            queue.push(currNode.left);
        }

        // For the right child
        i++;
        if (i >= ip.length)
            break;
        currVal = ip[i];

        // If the right child is not null
        if (currVal != "N") {

            // Create the right child for the current node
            currNode.right = new Node(parseInt(currVal));

            // Push it to the queue
            queue.push(currNode.right);
        }
        i++;
    }
    setHeights(root);
    return root;
}

function isBST(n,lower,upper){
    if(n==null) return true;
    if( n.data <= lower || n.data >= upper ) return false;
    return isBST(n.left, lower, n.data) && isBST(n.right, n.data, upper) ;
}

function isBalanced(n){
    if(n==null){
        return new Pair(0,true);
    }
      
    let l = isBalanced(n.left);
    let r = isBalanced(n.right);
  
    if( Math.abs(l.first - r.first) > 1 ) return new Pair(0,false);
  
    return new Pair( 1 + Math.max(l.first , r.first) , l.second && r.second );
}

let s = "";

function isBalancedBST(root){
    if( isBST(root, Number.MIN_VALUE , Number.MAX_VALUE) == false )
      s+=("BST voilated, inorder traversal : ");
  
    else if ( isBalanced(root).second == false)
      s+=("Unbalanced BST, inorder traversal : ");
  
    else return true;
    return false;
}

function inorder(root){
  if(root === null) return;
  inorder(root.left);
  s = s + root.data + " ";
  inorder(root.right);
}

function main() {
    let t = parseInt(readLine());
    for(let i=0;i<t;i++)
    {
      let s_tree = readLine().trim();
      let root = buildTree(s_tree);
      s="";
  		let n = parseInt(readLine());
  		let input_line = readLine().split(" ").map((x) =>parseInt(x));        
  	  let arr = new Array(n);
      for(let j  =0;j<n;j++) arr[j] = input_line[j];
      let obj = new Solution();
      for(let j = 0;j<n;j++){
        root = obj.deleteNode(root,arr[j]);
        if(!isBalancedBST(root)){
          break;
        }
      }
      if(root===null){
        console.log("null");
      }      
      else{
        inorder(root);
        console.log(s);
      }
    
console.log("~");
}
}
// } Driver Code Ends



class Solution {
    // Utility function to get the height of the node
    getHeight(node) {
        return node ? node.height : 0;
    }
    
    // Utility function to get the balance factor of a node
    getBalance(node) {
        return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
    }
    
    // Utility function to perform a right rotation
    rightRotate(y) {
        let x = y.left;
        let T2 = x.right;
        
        // Perform rotation
        x.right = y;
        y.left = T2;
        
        // Update heights
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
        
        // Return the new root
        return x;
    }
    
    // Utility function to perform a left rotation
    leftRotate(x) {
        let y = x.right;
        let T2 = y.left;
        
        // Perform rotation
        y.left = x;
        x.right = T2;
        
        // Update heights
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
        
        // Return the new root
        return y;
    }
    
    // Function to delete a node and return the new root
    deleteNode(root, data) {
        // Step 1: Perform standard BST delete operation
        if (root === null) {
            return root;
        }
        
        // If the data to be deleted is smaller, go to the left subtree
        if (data < root.data) {
            root.left = this.deleteNode(root.left, data);
        }
        // If the data to be deleted is larger, go to the right subtree
        else if (data > root.data) {
            root.right = this.deleteNode(root.right, data);
        }
        // If data is same as root's data, this is the node to be deleted
        else {
            // Node with only one child or no child
            if (root.left === null) {
                let temp = root.right;
                root = null;
                return temp;
            } else if (root.right === null) {
                let temp = root.left;
                root = null;
                return temp;
            }
            
            // Node with two children: Get the inorder successor (smallest in the right subtree)
            let temp = this.getMinValueNode(root.right);
            
            // Copy the inorder successor's content to this node
            root.data = temp.data;
            
            // Delete the inorder successor
            root.right = this.deleteNode(root.right, temp.data);
        }
        
        // Step 2: Update the height of this ancestor node
        root.height = Math.max(this.getHeight(root.left), this.getHeight(root.right)) + 1;
        
        // Step 3: Get the balance factor of this node (to check whether it became unbalanced)
        let balance = this.getBalance(root);
        
        // If this node becomes unbalanced, then there are 4 cases
        
        // Left Left Case
        if (balance > 1 && this.getBalance(root.left) >= 0) {
            return this.rightRotate(root);
        }
        
        // Right Right Case
        if (balance < -1 && this.getBalance(root.right) <= 0) {
            return this.leftRotate(root);
        }
        
        // Left Right Case
        if (balance > 1 && this.getBalance(root.left) < 0) {
            root.left = this.leftRotate(root.left);
            return this.rightRotate(root);
        }
        
        // Right Left Case
        if (balance < -1 && this.getBalance(root.right) > 0) {
            root.right = this.rightRotate(root.right);
            return this.leftRotate(root);
        }
        
        // Return the (unchanged) node pointer
        return root;
    }
    
    // Utility function to get the node with the minimum value in a given tree
    getMinValueNode(root) {
        let current = root;
        while (current.left !== null) {
            current = current.left;
        }
        return current;
    }
}