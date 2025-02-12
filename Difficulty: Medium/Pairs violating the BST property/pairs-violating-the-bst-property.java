//{ Driver Code Starts
import java.io.*;
import java.util.*;

class Node {
    int data;
    Node left;
    Node right;

    Node(int data) {
        this.data = data;
        left = null;
        right = null;
    }

    public static Node buildTree(String str) {
        // Corner Case
        if (str.length() == 0 || str.charAt(0) == 'N') return null;

        // Creating array of Strings from input
        // String after spliting by space
        String ip[] = str.split(" ");

        // Create the root of the tree
        Node root = new Node(Integer.parseInt(ip[0]));

        // Push the root to the queue
        Queue<Node> queue = new LinkedList<>();
        queue.add(root);

        // Starting from the second element
        int i = 1;
        while (queue.size() > 0 && i < ip.length) {

            // Get and remove the front of the queue
            Node currNode = queue.peek();
            queue.remove();

            // Get the current node's value from the string
            String currVal = ip[i];

            // If the left child is not null
            if (!currVal.equals("N")) {

                // Create the left child for the current node
                currNode.left = new Node(Integer.parseInt(currVal));
                // Push it to the queue
                queue.add(currNode.left);
            }

            // For the right child
            i++;
            if (i >= ip.length) break;

            currVal = ip[i];

            // If the right child is not null
            if (!currVal.equals("N")) {

                // Create the right child for the current node
                currNode.right = new Node(Integer.parseInt(currVal));

                // Push it to the queue
                queue.add(currNode.right);
            }
            i++;
        }

        return root;
    }

    public static Node inputTree(BufferedReader br) throws IOException {
        return buildTree(br.readLine().trim());
    }

    public static void inorder(Node root) {
        if (root == null) return;
        inorder(root.left);
        System.out.print(root.data + " ");
        inorder(root.right);
    }
}

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t;
        t = Integer.parseInt(br.readLine());
        while (t-- > 0) {

            int n;
            n = Integer.parseInt(br.readLine());

            Node root = Node.inputTree(br);

            Solution obj = new Solution();
            int res = obj.pairsViolatingBST(n, root);

            System.out.println(res);
        }
    }
}

// } Driver Code Ends


/*

Definition for Binary Tree Node
class Node
{
    int data;
    Node left;
    Node right;

    Node(int data)
    {
        this.data = data;
        left = null;
        right = null;
    }
}
*/

class Solution {
    private static List<Integer> elements; // List to store elements in a specific order during traversal
    private static int pairs; // Variable to track the count of violating pairs
    
    public static int pairsViolatingBST(int n, Node root) {
        // Initialize the elements list and pairs count
        elements = new ArrayList<>();
        pairs = 0;
        
        // Start inorder traversal of the tree
        inorderTraversal(root);
        
        // Return the total number of violating pairs
        return pairs;
    }
    
    private static void inorderTraversal(Node root) {
        // Base case: if root is null, return
        if (root == null) {
            return;
        }
        
        // Traverse the right subtree first (for reverse inorder)
        inorderTraversal(root.right);
        
        // Find the ceil (smallest element greater than or equal to root's data)
        int ceil = getCeil(root.data);
        
        // Insert root's data at the appropriate position in the elements list
        elements.add(ceil, root.data);
        
        // Add the number of violating pairs based on the current ceil value
        pairs += ceil;
        
        // Traverse the left subtree
        inorderTraversal(root.left);
    }
    
    private static int getCeil(int target) {
        // If elements list is empty, no ceil can be found, return 0
        if (elements.isEmpty()) {
            return 0;
        }
        
        // Binary search to find the appropriate position for target (ceil)
        int l = 0;
        int r = elements.size() - 1;
        
        int ans = -1;
        
        // Standard binary search logic
        while (l <= r) {
            int mid = l + (r - l) / 2;
            int ele = elements.get(mid);
            
            // If current element is greater than or equal to target, move left
            if (ele >= target) {
                r = mid - 1;
            } else {
                ans = mid;
                l = mid + 1;
            }
        }
        
        // Return the appropriate ceil position (index)
        return ans == -1 ? 0 : ans + 1;
    }
}
