//{ Driver Code Starts

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
            String [] S1 = br.readLine().trim().split(" ");
            int A = Integer.parseInt(S1[0]);
            int B = Integer.parseInt(S1[1]);
            int C = Integer.parseInt(S1[2]);
            Solution ob = new Solution();
            double[] ans = ob.FindRoots(A, B, C);
            if(ans.length == 1){
                System.out.println((int)ans[0]);
                continue;
            }
            for(int i = 0; i < ans.length; i++)
                System.out.print(String.format("%6f", ans[i]) + " ");
            System.out.println();
        }
    }
}

// } Driver Code Ends

class Solution {
    public double[] FindRoots(int A, int B, int C) {
        // Calculate the discriminant (B^2 - 4AC)
        double discriminant = (B * B) - (4 * A * C);
        
        // If the discriminant is negative, return {-1} indicating no real roots
        if (discriminant < 0) {
            return new double[]{-1};
        }
        
        // Compute the square root of the discriminant
        double sqrtDiscriminant = Math.sqrt(discriminant);
        
        // Compute the two roots using the quadratic formula
        double root1 = (-B + sqrtDiscriminant) / (2 * A);
        double root2 = (-B - sqrtDiscriminant) / (2 * A);
        
        // Create an array to store the roots
        double[] roots = new double[2];
        
        // Store the roots in ascending order
        if (root1 > root2) {
            roots[0] = root2;
            roots[1] = root1;
        } else {
            roots[0] = root1;
            roots[1] = root2;
        }
        
        // Return the array containing the roots
        return roots;
    }
}
