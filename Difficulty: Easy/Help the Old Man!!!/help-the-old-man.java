//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG{
    public static void main(String args[])throws IOException
    {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(in.readLine());
        while(t-- > 0){
            String a[] = in.readLine().trim().split("\\s+");
            int N = Integer.parseInt(a[0]);
            int n = Integer.parseInt(a[1]);
            
            Solution ob = new Solution();
            List<Integer> ans = new ArrayList<Integer>();
            ans = ob.shiftPile(N, n);
            System.out.println(ans.get(0)+" "+ans.get(1));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends


// User function Template for Java

class Solution {
    
    static int count = 0;  // Counter to keep track of the number of moves
    static List<Integer> result;  // List to store the moves
    
    // Function to shift the pile and return the list of moves
    static List<Integer> shiftPile(int N, int n) {
        
        // Initialize the result list
        result = new ArrayList<>();
        
        // Set the count to the desired move number
        count = n;
        
        // Start the Tower of Hanoi recursive solution
        towerOfHanoi(N, 1, 3, 2);
        
        // Return the result list containing the move sequence
        return result;
    }
    
    // Recursive function to solve Tower of Hanoi problem
    private static void towerOfHanoi(int N, int A, int C, int B) {
        
        // Base case: only one disk to move
        if (N == 1) {
            // If the count matches the desired move number, store the move
            if (count == 1) {
                result.add(A);  // Add the source peg
                result.add(C);  // Add the destination peg
            }
            count -= 1;  // Decrease the count
            return;
        }
        
        // Recursive step: Move N-1 disks from A to B, using C as auxiliary peg
        towerOfHanoi(N - 1, A, B, C);
        
        // Move the current disk from A to C, if it's the desired move
        if (count == 1) {
            result.add(A);  // Add the source peg
            result.add(C);  // Add the destination peg
        }
        count -= 1;  // Decrease the count
        
        // Move N-1 disks from B to C, using A as auxiliary peg
        towerOfHanoi(N - 1, B, C, A);
    }
}
