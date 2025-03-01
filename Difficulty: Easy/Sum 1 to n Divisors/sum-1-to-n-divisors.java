//{ Driver Code Starts
import java.io.*;
import java.util.*;

class Main {
    public static void main(String args[]) throws IOException {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while (t-- > 0) {
            int N = sc.nextInt();
            Solution ob = new Solution();
            int ans = ob.sumOfDivisors(N);
            System.out.println(ans);
            System.out.println("~");
        }
    }
}

// } Driver Code Ends

// User function Template for Java
class Solution {
    public static int sumOfDivisors(int n) {
        // Variable to store the sum of divisors
        int totalSum = 0;

        // Iterate over each number from 1 to n
        for (int i = 1; i <= n; i++) {
            int divisorSum = 0; // Variable to store the sum of divisors of the current number i

            // Find divisors of i by checking if j divides i without a remainder
            for (int j = 1; j <= i; j++) {
                if (i % j == 0) {
                    divisorSum += j; // Add the divisor j to the sum
                }
            }

            // Add the sum of divisors of i to the total sum
            totalSum += divisorSum;
        }

        // Return the total sum of divisors
        return totalSum;
    }
}
