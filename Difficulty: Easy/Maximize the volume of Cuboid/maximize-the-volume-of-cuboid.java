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
            Long S = Long.parseLong(read.readLine());

            Solution ob = new Solution();
            System.out.println(ob.maximizeVolume(S));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends

class Solution {
    static Long maximizeVolume(Long S) {
        // Divide the given surface area (S) into three equal parts for length, breadth, and height
        long length = S / 3;
        long breadth = S / 3;
        long height = S / 3;
        
        // Calculate the remainder when dividing by 3
        long remainder = S % 3;
        
        // Distribute the remainder among the dimensions
        if (remainder > 0) {
            length++;  // Increase length by 1
            remainder--;
        }
        
        if (remainder > 0) {
            breadth++;  // Increase breadth by 1
        }

        // Return the product of length, breadth, and height, which is the volume
        return length * breadth * height;
    }
}
