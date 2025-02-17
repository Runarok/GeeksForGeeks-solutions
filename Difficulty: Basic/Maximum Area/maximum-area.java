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
            Long N = Long.parseLong(read.readLine());

            Solution ob = new Solution();
            System.out.println(ob.getHypotenuse(N));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    /**
     * Function to calculate the length of the hypotenuse.
     * @param N - The area of the right triangle.
     * @returns int - The length of the hypotenuse, floored to the nearest integer.
     */
    static int getHypotenuse(Long N) {
        // Calculate hypotenuse using the formula: Hypotenuse = floor(2 * sqrt(area))
        return (int) Math.floor(2 * Math.sqrt(N));
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        // Example usage: Calculate hypotenuse for area 25
        System.out.println(getHypotenuse(25L));
    }
}
