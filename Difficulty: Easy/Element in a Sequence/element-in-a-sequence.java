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
            int ans  = ob.NthTermOfSeries(N);
            System.out.println(ans);
        }
    }
}

// } Driver Code Ends

// User function Template for Java
class Solution {

    // Function to find the Nth term of the series
    static int NthTermOfSeries(int N) {
        int ans = 0;
        int n = N + 1;  // Adjust the input to match the series pattern
        int mul = 2;    // Multiplication factor starting from 2
        int dig = 1;    // Initial digit to multiply, starting from 1

        // Loop to generate the terms of the series
        while (mul <= n) {
            // Check if the remainder of n when divided by mul is less than half of mul
            if (n % mul < mul / 2) {
                ans += 4 * dig;  // If so, add 4 times the current digit
            } else {
                ans += 7 * dig;  // Otherwise, add 7 times the current digit
            }

            // Double the multiplication factor and multiply the digit by 10 for the next iteration
            mul = 2 * mul;
            dig = dig * 10;
        }
        
        // Return the calculated result
        return ans;
    }
}
