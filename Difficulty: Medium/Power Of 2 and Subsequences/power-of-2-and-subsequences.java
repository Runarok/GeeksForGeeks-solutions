//{ Driver Code Starts
//Initial Template for Java
import java.io.*;
import java.util.*;

class GFG
{
    public static void main(String args[])throws IOException
    {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while(t-- > 0)
        {
            int N = Integer.parseInt(read.readLine());
            ArrayList<Long> A = new ArrayList<Long>();
            String in[] = read.readLine().trim().split(" ");
            for(var i : in){
                Long x = Long.parseLong(i);
                A.add(x);
            }

            Solution ob = new Solution();
            System.out.println(ob.numberOfSubsequences(N,A));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

//User function Template for Java
class Solution{
    static Long numberOfSubsequences(int N, ArrayList<Long> A){
        // Define the modulus for the final result
        final long MOD = 1000000007;
        
        // Count the numbers that are powers of 2
        long countPowerOf2 = 0;

        // Traverse through the list to count numbers that are powers of 2
        for (long num : A) {
            if (isPowerOfTwo(num)) {
                countPowerOf2++;
            }
        }

        // If there are no numbers that are powers of 2, return 0
        if (countPowerOf2 == 0) return 0L;

        // Total number of non-empty subsequences that can be formed using the numbers
        // that are powers of 2. Formula: (2^countPowerOf2 - 1) % MOD
        long result = modPow(2, countPowerOf2, MOD) - 1;
        
        // If the result is negative, add MOD to ensure positive value
        if (result < 0) result += MOD;

        return result;
    }

    // Helper function to check if a number is a power of 2
    private static boolean isPowerOfTwo(long num) {
        // A number is a power of 2 if it is greater than 0 and its binary form
        // has only one bit set to 1 (i.e., num & (num - 1) == 0)
        return (num > 0) && (num & (num - 1)) == 0;
    }

    // Helper function to perform modular exponentiation: (base^exp) % mod
    private static long modPow(long base, long exp, long mod) {
        long result = 1;
        
        // Loop until exponent becomes 0
        while (exp > 0) {
            // If exponent is odd, multiply result with base and take mod
            if ((exp & 1) == 1) { 
                result = (result * base) % mod;
            }
            
            // Square the base and take mod
            base = (base * base) % mod;
            
            // Divide the exponent by 2 (right shift by 1)
            exp >>= 1;
        }
        return result;
    }
}
