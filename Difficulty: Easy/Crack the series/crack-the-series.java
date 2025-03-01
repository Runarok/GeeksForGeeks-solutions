//{ Driver Code Starts
//Initial Template for Java

import java.util.*;
import java.math.*;
import java.io.*;
class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            int N = Integer.parseInt(read.readLine());
            Solution ob = new Solution();

            System.out.println(ob.NthTerm(N));
        }
    }
}
// } Driver Code Ends

//User function Template for Java
class Solution {
    static BigInteger NthTerm(int N) {
        // code here
        if(N == 1 || N == 2) {
            return BigInteger.valueOf(2); // Base case
        }

        int a = N / 2;
        BigInteger result = BigInteger.valueOf(1);
        if(N % 2 == 1) {
            int temp = 1;
            for (int i = a; i > 0; i--) {
                temp = 2 * temp; // Calculate the power of 2
            }
            BigInteger b = new BigInteger("2");
            for (int i = temp; i > 0; i--) {
                result = result.multiply(b); // Multiply result by power of 2
            }
        } else {
            int temp = 1;
            for (int i = a; i > 1; i--) {
                temp = 3 * temp; // Calculate the power of 3
            }
            BigInteger b = new BigInteger("2");
            for (int i = temp; i > 0; i--) {
                result = result.multiply(b); // Multiply result by power of 2
            }
        }
        return result;
    }
}
