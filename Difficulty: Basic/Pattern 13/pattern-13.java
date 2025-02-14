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
            obj.printTriangle(n);
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

class Solution {

    void printTriangle(int n) {
        int num = 1; // Initialize the starting number for the pattern
        
        // Outer loop for each row
        for (int i = 1; i <= n; i++) {
            // Inner loop to print the numbers in each row
            for (int j = 1; j <= i; j++) {
                System.out.print(num + " "); // Print the current number followed by a space
                num++; // Increment the number for the next position
            }
            System.out.println(); // Move to the next line after each row
        }
    }
}
