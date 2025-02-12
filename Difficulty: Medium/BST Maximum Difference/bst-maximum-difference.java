//{ Driver Code Starts
import java.io.*;
import java.util.*;

class Node{
    int data;
    Node left;
    Node right;
    Node(int data){
        this.data = data;
        left=null;
        right=null;
    }
}

class GFG {
    
	public static void main (String[] args) throws Exception{
	        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	        
	        int t=Integer.parseInt(br.readLine());
	        while(t > 0){
	            int n=Integer.parseInt(br.readLine().trim());
	            String s[] = br.readLine().trim().split(" ");

	            int target=Integer.parseInt(br.readLine().trim());
    	    	Node root = null;
                for(int i=0;i<n;i++){
                    root=insert(root,Integer.parseInt(s[i]));
                }
        	    Solution g = new Solution();
        	    System.out.println(g.maxDifferenceBST(root,target));
                t--;
            
        
System.out.println("~");
}
    }

    public static Node insert(Node tree, int val) {
        Node temp = null;
        if (tree == null) return new Node(val);
    
        if (val < tree.data) {
            tree.left = insert(tree.left, val);
        } else if (val > tree.data) {
            tree.right = insert(tree.right, val);
        }
    
        return tree;
    }
  
}
// } Driver Code Ends

class Solution {
    public static int maxDifferenceBST(Node root, int target) {
        // Starting the helper function with initial sum of 0 and the target value
        return help(root, 0, target);
    }

    static int help(Node r, int sum, int t) {
        // Base case: if the current node is null, return -1
        if (r == null) return -1;

        // If the current node's value is greater than the target, move to the left child
        if (r.data > t) {
            return help(r.left, sum + r.data, t);
        }
        // If the current node's value is less than the target, move to the right child
        else if (r.data < t) {
            return help(r.right, sum + r.data, t);
        }
        // If we found the target, process the case where the node's value equals the target
        else if (r.data == t) {
            // If the current node has no children, return the sum
            if (r.left == null && r.right == null) return sum;
            // If the current node has children, return the sum minus the minimum sum of its children
            return sum - Math.min(sum(r.left), sum(r.right));
        }
        return -1;
    }

    static int sum(Node r) {
        // Base case: if the node is null, return a large value to represent no valid sum
        if (r == null) return Integer.MAX_VALUE;

        // If the node is a leaf, return its own value
        if (r.left == null && r.right == null) return r.data;

        // Calculate the minimum sum from the left and right subtrees
        int x = Math.min(sum(r.left), sum(r.right));

        // Return the current node's value plus the minimum sum from its children
        return r.data + x;
    }
}
