//{ Driver Code Starts
// Initial Template for Java
import java.util.*;
import java.io.*;

// } Driver Code Ends

// User function Template for Java
class Solution {
    
    static long possibleStrings(int n, int r, int b, int g) {
        // Calculate the remaining characters that need to be placed
        int remaining = n - (r + g + b);
        
        // If the given counts exceed the total length, it's not possible
        if (remaining < 0)
            return 0;
        
        long totalWays = 0;
        
        // Loop through all combinations of extra characters being added to r, g, and b
        for (int extraR = 0; extraR <= remaining; extraR++) {
            for (int extraB = 0; extraB <= remaining - extraR; extraB++) {
                
                // Remaining goes to green
                int extraG = remaining - extraR - extraB;
                
                // Calculate the number of valid permutations for this distribution
                totalWays += calculatePermutations(r + extraR, b + extraB, g + extraG);
            }
        }
        
        return totalWays;
    }
    
    // Helper method to calculate factorial of a number
    static long factorial(int num) {
        long fact = 1;
        for (int i = 2; i <= num; i++) {
            fact *= i;
        }
        return fact;
    }
    
    // Helper method to calculate permutations using combinations formula
    static long calculatePermutations(int r, int b, int g) {
        // Total factorial divided by individual counts' factorial (multinomial coefficient)
        return factorial(r + b + g) / (factorial(r) * factorial(b) * factorial(g));
    }
}



//{ Driver Code Starts.
class GFG {
    public static void main(String args[]) throws IOException {
        Scanner in = new Scanner(System.in);
        int t = in.nextInt();
        while (t-- > 0) {
            int n = in.nextInt();
            int r = in.nextInt();
            int g = in.nextInt();
            int b = in.nextInt();
            Solution ob = new Solution();

            System.out.println(ob.possibleStrings(n, r, b, g));
        }
    }
}
// } Driver Code Ends