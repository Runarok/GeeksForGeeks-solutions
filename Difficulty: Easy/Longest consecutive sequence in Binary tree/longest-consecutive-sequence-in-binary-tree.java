//{ Driver Code Starts
import java.util.LinkedList; 
import java.util.Queue; 
import java.io.*;
import java.util.*;

class Node
{
    int data;
    Node left;
    Node right;
    Node(int data)
    {
        this.data = data;
        left=null;
        right=null;
    }
}

class Main
{
    static Node buildTree(String str)
    {
        
        if(str.length()==0 || str.charAt(0)=='N'){
            return null;
        }
        
        String ip[] = str.split(" ");
        // Create the root of the tree
        Node root = new Node(Integer.parseInt(ip[0]));
        // Push the root to the queue
        
        Queue<Node> queue = new LinkedList<>(); 
        
        queue.add(root);
        // Starting from the second element
        
        int i = 1;
        while(queue.size()>0 && i < ip.length) {
            
            // Get and remove the front of the queue
            Node currNode = queue.peek();
            queue.remove();
                
            // Get the current node's value from the string
            String currVal = ip[i];
                
            // If the left child is not null
            if(!currVal.equals("N")) {
                    
                // Create the left child for the current node
                currNode.left = new Node(Integer.parseInt(currVal));
                // Push it to the queue
                queue.add(currNode.left);
            }
                
            // For the right child
            i++;
            if(i >= ip.length)
                break;
                
            currVal = ip[i];
                
            // If the right child is not null
            if(!currVal.equals("N")) {
                    
                // Create the right child for the current node
                currNode.right = new Node(Integer.parseInt(currVal));
                    
                // Push it to the queue
                queue.add(currNode.right);
            }
            i++;
        }
        
        return root;
    }
    
    public static void main (String[] args) throws IOException
    {
	    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        
        int t=Integer.parseInt(br.readLine());
        
        while(t-- > 0)
        {
            String s = br.readLine();
            Node root = buildTree(s);
            
            Solution g = new Solution();
            System.out.println(g.longestConsecutive(root));
        
System.out.println("~");
}
	}
}


// } Driver Code Ends

/* Complete the function below
Node is as follows
class TreeNode
{
    int key;
    TreeNode left, right;
    public TreeNode(int key)
    {
        this.key = key;
        left = right = null;
    }
} */

class Solution {
    int res = -1;

    // Function to find the length of the longest consecutive sequence
    int longestConsecutive(Node root) {
        // Start the recursive helper function with initial count as 0
        helper(root, root.data, 0);
        
        // If no consecutive sequence is found, return -1
        if (res == 1) {
            return -1;
        }
        return res;
    }

    // Recursive helper function to calculate the longest consecutive sequence
    public void helper(Node root, int value, int count) {
        // Base case: if the root is null, return
        if (root == null) {
            return;
        }

        // If root's data matches the expected consecutive value, increase the count
        if (root.data == value) {
            count++;
            // Update the result with the maximum count found so far
            res = Math.max(res, count);
        } else {
            // Reset the count if the sequence is broken
            count = 1;
        }

        // Recursively check the left and right subtrees with the expected consecutive value
        helper(root.left, root.data + 1, count);
        helper(root.right, root.data + 1, count);
    }
}

