//{ Driver Code Starts
//Initial Template for Java
import java.util.*;
import java.lang.*;
import java.io.*;
class GFG
{
    public static void main(String[] args) throws IOException
    {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine().trim());
        while(T-->0)
        {
            String[] input = new String[2]; 
            input = br.readLine().split(" "); 
            int N = Integer.parseInt(input[0]); 
            int M = Integer.parseInt(input[1]); 
            Solution ob = new Solution();
            int[] ans = ob.M_sequence(N, M);
            for(int i = 0; i < ans.length; i++)
            {
                System.out.print(ans[i] + " ");
            }
            System.out.println();
        }
    }
}

// } Driver Code Ends

class Solution {
    public int[] M_sequence(int N, int M) {
        int i, sum;
        
        // Calculate the upper bound for the divisor b
        int b = N / (M * (M + 1) / 2);
        
        // If b is 0, it's not possible to generate the sequence, return an empty array
        if (b == 0) {
            int[] bns = new int[0];
            System.out.println("-1");
            return bns;
        } else {
            // Initialize the result array
            int[] ans = new int[M];
            int r = 1; // Initial value for the divisor 'r'
            
            // Loop through the divisors of N
            for (i = 1; i <= Math.sqrt(N); i++) {
                // Skip if i is not a divisor of N
                if (N % i != 0)
                    continue;
                
                // Update r with the largest divisor that is within the bounds
                if (i <= b && i > r) {
                    r = i;
                }
                // Update r for the corresponding pair of divisors
                if ((N / i) <= b && (N / i) > r) {
                    r = (N / i);
                }
            }
            
            // Calculate the values in the sequence
            sum = 0;
            for (i = 1; i < M; i++) {
                ans[i - 1] = r * i;
                sum = sum + ans[i - 1];
            }
            
            // Assign the last element in the sequence
            ans[i - 1] = N - sum;
            return ans;
        }
    }
}
