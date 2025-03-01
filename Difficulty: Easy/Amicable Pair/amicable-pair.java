//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            String S[] = read.readLine().split(" ");
            
            int A = Integer.parseInt(S[0]);
            int B = Integer.parseInt(S[1]);

            Solution ob = new Solution();
            System.out.println(ob.isAmicable(A,B));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    static int isAmicable(int A, int B) {
        // Sum of proper divisors of A
        int sumOfDivisorsA = 0;

        // Sum of proper divisors of B
        int sumOfDivisorsB = 0;

        // Calculate sum of divisors for A
        for (int i = 1; i < A; i++) {
            if (A % i == 0) {
                sumOfDivisorsA += i;
            }
        }

        // Calculate sum of divisors for B
        for (int j = 1; j < B; j++) {
            if (B % j == 0) {
                sumOfDivisorsB += j;
            }
        }

        // Check if they form an amicable pair
        if (sumOfDivisorsA == B && sumOfDivisorsB == A) {
            return 1;  // Amicable pair
        } else {
            return 0;  // Not amicable pair
        }
    }
};
