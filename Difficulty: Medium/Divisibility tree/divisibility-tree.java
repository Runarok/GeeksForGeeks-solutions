//{ Driver Code Starts
import java.io.*;
import java.util.*;

class IntMatrix {
    public static int[][] input(BufferedReader br, int n, int m) throws IOException {
        int[][] mat = new int[n][];

        for (int i = 0; i < n; i++) {
            String[] s = br.readLine().trim().split(" ");
            mat[i] = new int[s.length];
            for (int j = 0; j < s.length; j++) mat[i][j] = Integer.parseInt(s[j]);
        }

        return mat;
    }

    public static void print(int[][] m) {
        for (var a : m) {
            for (int e : a) System.out.print(e + " ");
            System.out.println();
        }
    }

    public static void print(ArrayList<ArrayList<Integer>> m) {
        for (var a : m) {
            for (int e : a) System.out.print(e + " ");
            System.out.println();
        }
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

            int[][] edges = IntMatrix.input(br, n - 1, 2);

            Solution obj = new Solution();
            int res = obj.maxEdgeRemoval(n, edges);

            System.out.println(res);

            System.out.println("~");
        }
    }
}

// } Driver Code Ends

class Solution {
    int count = 0; // This will keep track of the number of edges that can be removed.
    
    public int maxEdgeRemoval(int n, int[][] edges) {
        
        int visited[] = new int[n + 1]; // Array to keep track of visited nodes, size n+1 because nodes are 1-indexed.
        
        // Create an adjacency list to represent the graph.
        ArrayList<ArrayList<Integer>> adj = new ArrayList<>();
        for(int i = 0; i <= n; i++){
            adj.add(new ArrayList<>()); // Initialize the adjacency list with empty lists for each node.
        }
        
        // Add edges to the adjacency list (undirected graph).
        for(int[] edge: edges){
            adj.get(edge[0]).add(edge[1]);
            adj.get(edge[1]).add(edge[0]);
        }
        
        // Perform DFS from node 1 (or any node).
        dfs(adj, visited, 1);
        
        // Return the total count of removable edges.
        return count;
    }
    
    public int dfs(ArrayList<ArrayList<Integer>> adj, int visited[], int u){
        
        visited[u] = 1; // Mark the current node as visited.
        int size = 1; // This will track the size of the subtree rooted at node u.
        
        // Iterate through all the neighbors of node u.
        for(int v: adj.get(u)){
            
            // If the neighbor is not visited, explore it.
            if(visited[v] == 0){
                int sizeNeighbour = dfs(adj, visited, v); // Recursively calculate the size of the subtree rooted at v.
                size += sizeNeighbour; // Add the size of the neighbor's subtree to the current size.
                
                // If the subtree size is even, the edge between u and v can be removed.
                if((sizeNeighbour % 2) == 0){
                    count++; // Increment the count of removable edges.
                }
            }
        }
        
        // Return the size of the current subtree rooted at u.
        return size;
    }
}
