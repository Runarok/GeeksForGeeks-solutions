//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.lang.Math;
import java.util.*;


// } Driver Code Ends

// User function Template for Java

/* 
Node structure definition:
class Node {
    int data;
    Node left, right;
    Node(int d) {
        data = d;
        left = right = null;
    }
}
*/

// Function to construct a Binary Search Tree (BST) from its postorder traversal
class GFG {
    // Main function to be called, starting the recursive construction
    public static Node constructTree(int post[], int n) {
        return constructTreeHelper(post, 0, n - 1);
    }
    
    // Recursive helper function to build the BST from postorder array
    private static Node constructTreeHelper(int[] post, int start, int end) {
        // Base case: if start index exceeds end index, return null (no subtree)
        if (start > end) {
            return null;
        }
        
        // Find the last element smaller than the current root (post[end])
        int splitIndex = end - 1;
        while (splitIndex >= 0 && post[splitIndex] > post[end]) {
            splitIndex--;
        }
        
        // Create a new node with the current root value (post[end])
        Node node = new Node(post[end]);
        
        // Recursively build right subtree using values greater than post[end]
        node.right = constructTreeHelper(post, splitIndex + 1, end - 1);
        
        // Recursively build left subtree using values smaller than post[end]
        node.left = constructTreeHelper(post, start, splitIndex);
        
        // Return the constructed node (current subtree root)
        return node;
    }
}



//{ Driver Code Starts.
class Node {
    int data;
    Node left, right;

    Node(int d) {
        data = d;
        left = right = null;
    }
}

class GFG2 {
    public static void inorder(Node root) {
        if (root == null) return;
        inorder(root.left);
        System.out.print(root.data + " ");
        inorder(root.right);
    }

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while (t-- > 0) {
            int n = sc.nextInt();
            int[] post = new int[n];
            for (int i = 0; i < n; i++) {
                int b = sc.nextInt();
                post[i] = b;
            }
            GFG obj = new GFG();
            Node root = obj.constructTree(post, n);
            inorder(root);
            System.out.println();
        
System.out.println("~");
}
    }
}

// } Driver Code Ends