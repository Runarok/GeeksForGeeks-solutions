//{ Driver Code Starts
//Initial Template for Java
import java.util.*;
import java.io.*;
class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            String[] S = new String[2];
            S = read.readLine().split(" ");
            long A = Integer.parseInt(S[0]);
            long B = Integer.parseInt(S[1]);
            Solution ob = new Solution();

            System.out.println(ob.kthDistinct(A, B));
        }
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    static long kthDistinct(long A, long B) {
        // Check if the sum of the first B natural numbers exceeds A
        if (((B * (B + 1)) / 2) > A) {
            return 0; // Condition not met
        }
        
        return 1; // Condition met
    }
}
