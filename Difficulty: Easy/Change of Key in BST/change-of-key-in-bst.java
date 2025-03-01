//{ Driver Code Starts
import java.util.Scanner;
import java.util.*;
import java.lang.*;
import java.io.*;

class Node
{
	int data;
	Node left,right;
	
	Node(int d)
	{
		data = d;
		left = right = null;		
	}
}

class BinarySearchTree
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
            
            while(t > 0){
                String s = br.readLine();
                Node root = buildTree(s);
                String nums = br.readLine();
                String[] s1 = nums.split(" ");
                int oldKey=Integer.parseInt(s1[0]);
                int new_key=Integer.parseInt(s1[1]);

			GfG g=new GfG();
			root=g.changeKey(root,oldKey,new_key);
			inorder(root);
			System.out.println();
                t--;
        
System.out.println("~");
}
    }
    
  static void inorder(Node root)
    {
        if(root != null)
         {
        inorder(root.left);
		System.out.print(root.data + " ");
		inorder(root.right);
         }
    }
    

}

// } Driver Code Ends

class GfG {
    // Function to find the successor of a node in a BST.
    static Node getSuccessor(Node temp) {
        temp = temp.right;  // Move to the right child
        // Traverse left as much as possible to find the in-order successor
        while (temp != null && temp.left != null) {
            temp = temp.left;
        }
        return temp;  // Return the in-order successor node
    }

    // Function to delete a node with value 'x' from the BST.
    public static Node deleteNode(Node root, int x) {
        // Base case: if the root is null, return null
        if (root == null) {
            return root;
        }
        
        // Recursively search for the node to be deleted
        if (root.data > x) {
            // If the node to be deleted is smaller, move to the left subtree
            root.left = deleteNode(root.left, x);
        } else if (root.data < x) {
            // If the node to be deleted is larger, move to the right subtree
            root.right = deleteNode(root.right, x);
        } else {
            // Node to be deleted found
            // Case 1: Node has no left child, return right child
            if (root.left == null) {
                return root.right;
            }
            // Case 2: Node has no right child, return left child
            if (root.right == null) {
                return root.left;
            }
            // Case 3: Node has both children
            // Find the in-order successor and replace the node's data with it
            Node succ = getSuccessor(root);
            root.data = succ.data;  // Replace with successor's data
            // Delete the successor node
            root.right = deleteNode(root.right, succ.data);
        }
        return root;  // Return the updated root
    }

    // Function to insert a node with value 'val' into the BST.
    public static Node insert(Node root, int val) {
        // If the tree is empty, create and return a new node
        if (root == null) {
            return new Node(val);
        }
        
        // Otherwise, insert the node in the appropriate subtree
        if (root.data > val) {
            // Insert in the left subtree
            root.left = insert(root.left, val);
        } else if (root.data < val) {
            // Insert in the right subtree
            root.right = insert(root.right, val);
        }
        // If the value is equal to the node's data, insert in the right subtree to avoid duplicates
        else {
            root.right = insert(root.right, val);
        }
        return root;  // Return the unchanged root pointer
    }

    // Function to change a node's key by deleting the old key and inserting the new key.
    public static Node changeKey(Node root, int old_key, int new_key) {
        // First delete the node with the old key
        root = deleteNode(root, old_key);
        // Then insert the new key into the tree
        root = insert(root, new_key);
        return root;  // Return the updated root
    }
}
