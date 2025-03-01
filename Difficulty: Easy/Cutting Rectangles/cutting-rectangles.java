//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;
import java.lang.*;

class GFG{
    public static void main(String args[])throws IOException
    {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while(t-- > 0){
            String input_line[] = read.readLine().trim().split("\\s+");
            long L = Long.parseLong(input_line[0]);
            long B = Long.parseLong(input_line[1]);

            Solution ob = new Solution();
            List<Long> ans = new ArrayList<Long>();
            ans = ob.minimumSquares(L, B);
            System.out.print(ans.get(0)+" ");
            System.out.println(ans.get(1));
        }
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to calculate the minimum number of squares needed to cover a rectangle of dimensions L and B
    static List<Long> minimumSquares(long L, long B) {
        // Find the greatest common divisor (GCD) of L and B
        long K = gcd(L, B);

        // Calculate the number of squares by dividing the area of the rectangle by the area of the largest square
        long N = (L * B) / (K * K);

        // Create a list to hold the results
        List<Long> result = new ArrayList<>();
        result.add(N);  // Add the number of squares
        result.add(K);  // Add the side length of the largest square

        // Return the result list
        return result;
    }

    // Helper function to compute the greatest common divisor (GCD) using Euclid's algorithm
    static long gcd(long a, long b) {
        if (b == 0) return a;
        return gcd(b, a % b);  // Recursively call the function to compute the GCD
    }
}
