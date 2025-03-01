//{ Driver Code Starts
import java.util.*;

class Node
{
    int data;
    Node left, right;
    Node(int key)
    {
        data = key;
        left = right = null;
    }
}

class leaf_nodes
{
    public static void main (String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        
        while(t-- > 0)
        {
            int n = sc.nextInt();
            Node root = null;
            for(int i = 0; i < n; i++)
            {
                int data = sc.nextInt();
                root = insert(root, data);
            }
            Solution gfg = new Solution();
            System.out.println(gfg.sumOfLeafNodes(root));
        
System.out.println("~");
}
    }
    
    public static Node insert(Node root, int x)
    {
        
        if(root == null)
          {
              return (new Node(x));
          }
          
          if(x < root.data)
          {
              root.left = insert(root.left, x);
          }
          else if(x >= root.data)
          {
              root.right = insert(root.right, x);
          }
          
      return root;      
    }
    
}

// } Driver Code Ends

/* Node class of the binary search tree
class Node
{
    int data;
    Node left, right;
    Node(int key)
    {
        data = key;
        left = right = null;
    }
}
*/
class Solution
{
    // Public method to calculate the sum of all leaf nodes
    public static int sumOfLeafNodes(Node root)
    {
        // Calling helper function to compute the sum
        return sum(root);
    }
    
    // Helper method to recursively compute the sum of leaf nodes
    private static int sum(Node node) {
        // If the node is null, return 0
        if (node == null) {
            return 0;
        }
        
        // If the node is a leaf node (both children are null)
        if (node.left == null && node.right == null) {
            return node.data;
        }
        
        // Recursively calculate sum of leaf nodes in left and right subtrees
        int leftSum = sum(node.left);
        int rightSum = sum(node.right);
        
        // Return the total sum of leaf nodes in this subtree
        return leftSum + rightSum;
    }
}
