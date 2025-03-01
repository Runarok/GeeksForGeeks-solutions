//{ Driver Code Starts
// Initial Template for Java
import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while (t-- > 0) {
            long N = sc.nextLong();

            Solution ob = new Solution();
            ArrayList<Long> ans = ob.factorialNumbers(N);
            for (long num : ans) {
                System.out.print(num + " ");
            }
            System.out.println();
        }
    }
}

// } Driver Code Ends

// User function Template for Java
class Solution {
    public ArrayList<Long> factorialNumbers(long n) {
        // Initialize the solution list to store factorial numbers
        ArrayList<Long> sol = new ArrayList<>();
        int total = 1; // Initial factorial value for 1! is 1
        return ansss(n, 1, total, sol); // Call recursive function to calculate factorial numbers
    }

    public ArrayList<Long> ansss(long n, long a, long total, ArrayList<Long> sol) {
        // Base case: if the current factorial exceeds n, stop the recursion
        if (total > n) {
            return sol;
        }
        
        // Add the current factorial number to the result list
        sol.add(total);
        
        // Recursively calculate the next factorial (a+1)!
        return ansss(n, a + 1, total * (a + 1), sol);
    }
}
