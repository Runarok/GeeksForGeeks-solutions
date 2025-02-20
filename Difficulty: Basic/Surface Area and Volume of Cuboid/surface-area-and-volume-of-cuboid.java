//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.lang.*;
import java.util.*;

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine().trim());
        while (T-- > 0) {
            String s = br.readLine().trim();
            String S[] = s.split(" ");
            int l = Integer.parseInt(S[0]);
            int b = Integer.parseInt(S[1]);
            int h = Integer.parseInt(S[2]);
            Solution ob = new Solution();
            int[] ans = ob.find(l, b, h);
            for (int i = 0; i < ans.length; i++) System.out.print(ans[i] + " ");
            System.out.println();

            System.out.println("~");
        }
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution {
    public int[] find(int length, int breadth, int height) {
        // Calculate the surface area of the rectangular cuboid
        int surfaceArea = 2 * ((length * breadth) + (breadth * height) + (height * length));
        
        // Calculate the volume of the rectangular cuboid
        int volume = length * breadth * height;
        
        // Return the results as an array
        return new int[]{surfaceArea, volume};
    }
}
