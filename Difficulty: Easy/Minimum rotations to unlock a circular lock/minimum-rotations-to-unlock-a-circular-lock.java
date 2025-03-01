//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;
import java.lang.*;

class GFG{
    public static void main(String args[])throws IOException
    {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(in.readLine());
        while(t-- > 0){
            String a[] = in.readLine().trim().split("\\s+");
            long R = Long.parseLong(a[0]);
            long D = Long.parseLong(a[1]);
            
            Solution ob = new Solution();
            System.out.println(ob.rotationCount(R, D));
        }
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution{
    // Function to calculate the rotation count between two numbers R and D
    static int rotationCount(long R, long D){
        int rotationCount = 0; // Variable to store the total rotation count
        
        // Loop until both R and D become 0
        while(R != 0 && D != 0){
            // Extract the last digit of R and D
            long digitR = R % 10;
            long digitD = D % 10;
            
            // If the absolute difference between the digits is greater than 5
            // Adjust the rotation count based on the difference
            if(Math.abs(digitR - digitD) > 5){
                rotationCount = rotationCount + 10 - (int)Math.abs(digitR - digitD);
            }
            else{
                rotationCount = rotationCount + (int)Math.abs(digitR - digitD);
            }
            
            // Remove the last digit from R and D
            R = R / 10;
            D = D / 10;
        }
        
        return rotationCount; // Return the total rotation count
    }
}
