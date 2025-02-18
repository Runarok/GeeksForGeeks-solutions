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
            int N = Integer.parseInt(read.readLine());
            Solution ob = new Solution();

            System.out.println(ob.squaresDiff(N));
        }
    }
}
// } Driver Code Ends

class Solution {
    /**
     * Function to calculate the difference between the sum of squares and the square of the sum for the first N numbers.
     * @param N the input number.
     * @return the absolute difference between the sum of squares and the square of the sum.
     */
    static long squaresDiff(int N){
        long sumsq = 0;  // Variable to store the sum of squares.
        long sqsum = 0;  // Variable to store the sum of the numbers.

        // Loop through all numbers from 1 to N to calculate sum of squares and sum of numbers.
        for(int i = 1; i <= N; i++) {
            sumsq += i * i;  // Sum of squares.
            sqsum += i;      // Sum of the numbers.
        }

        sqsum = sqsum * sqsum;  // Square of the sum.

        // Calculate the absolute difference between the square of the sum and the sum of squares.
        long diff = Math.abs(sqsum - sumsq);
        return diff;  // Return the absolute difference.
    }
}
