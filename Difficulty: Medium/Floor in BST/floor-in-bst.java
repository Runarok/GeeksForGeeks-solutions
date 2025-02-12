//{ Driver Code Starts
// Initial Template for Java

import java.util.*;
import java.lang.*;
import java.math.*;
import java.io.*;

class Node {
    int data;
    Node right;
    Node left;

    Node(int val) {
        data = val;
        right = null;
        left = null;
    }
}

class GFG {

    public static Node insert(Node tree, int val) {
        Node temp = null;
        if (tree == null) {
            return new Node(val);
        }

        if (val < tree.data) {
            tree.left = insert(tree.left, val);
        } else if (val > tree.data) {
            tree.right = insert(tree.right, val);
        }

        return tree;
    }

    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        while (T-- > 0) {
            Node root = null;
            int n = sc.nextInt();
            for (int i = 0; i < n; i++) {
                int k = sc.nextInt();
                root = insert(root, k);
            }

            int s = sc.nextInt();

            Solution obj = new Solution();
            int ans = obj.floor(root, s);
            System.out.println(ans);
        
System.out.println("~");
}
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to find the floor value of a given integer x in a binary search tree
    public static int floor(Node root, int x) {
        // Variable to store the floor value
        int ceil = -1; 
        
        // Traverse the tree until we reach the end or find the floor value
        while (root != null) {
            // If we find the exact match of x, return the value
            if (root.data == x) {
                ceil = root.data;
                return ceil;
            }
            
            // If the current node's value is less than x, it could be a potential floor value
            if (root.data < x) {
                ceil = root.data;
                root = root.right; // Move to the right subtree to find a larger value
            } else {
                root = root.left; // Move to the left subtree to find a smaller value
            }
        }
        
        // Return the floor value
        return ceil;
    }
}
