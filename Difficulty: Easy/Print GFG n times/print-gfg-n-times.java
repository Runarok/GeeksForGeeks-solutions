//{ Driver Code Starts
import java.io.*;
import java.util.*;

class Main {
    // Driver code
    public static void main(String[] args) throws Exception {
        BufferedReader br =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine().trim());
        while (t-- > 0) {
            int n = Integer.parseInt(br.readLine().trim());
            Solution obj = new Solution();
            obj.printGfg(n);
            System.out.println();
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

class Solution {
    // Variable to keep track of the current iteration
    int i = 1;

    // Recursive function to print "GFG" N times
    void printGfg(int N) {
        // Base case: if the current iteration exceeds N, stop the recursion
        if (i > N) return;
        
        // Print "GFG" followed by a space
        System.out.print("GFG ");
        
        // Increment the iteration counter
        i++;
        
        // Recursive call to print "GFG" until N times
        printGfg(N);
    }
}
