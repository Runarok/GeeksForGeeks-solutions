//{ Driver Code Starts
//Initial Template for Java
import java.io.*;
import java.util.*;

class GFG
{
    public static void main(String args[])throws IOException
    {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while(t-- > 0)
        {
            int N=sc.nextInt();
			
            Solution ob = new Solution();
            int ans  = ob.sumOfDivisors(N);
            System.out.println(ans);
        }
    }
}

// } Driver Code Ends

// User function Template for Java
class Solution {
    // Function to calculate the sum of divisors of divisors of N
    static int sumOfDivisors(int N) {
        // If N is less than 2, return N directly
        if (N < 2)
            return N;

        int sum = 0;

        // Loop through all numbers from 1 to N to find divisors
        for (int i = 1; i <= N; i++) {

            // If i is a divisor of N
            if (N % i == 0) {
                int js = 0;

                // Calculate sum of divisors of i
                for (int j = 1; j <= i; j++) {
                    if (i % j == 0)
                        js += j; // Add the divisor to js
                }

                // Add the sum of divisors of i to the final sum
                sum += js;
            }
        }

        // Return the final calculated sum
        return sum;
    }
}
