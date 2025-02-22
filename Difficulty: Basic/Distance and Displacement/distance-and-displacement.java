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
            int n = Integer.parseInt(in.readLine());
            String arr1[] = in.readLine().trim().split("\\s+");
            String d[] = in.readLine().trim().split("\\s+");
            int a[] = new int[n];
            for(int i = 0;i < n;i++)
                a[i] = Integer.parseInt(arr1[i]);
            
            Solution ob = new Solution();
            System.out.println(ob.distance(n, a, d));
        }
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to calculate the distance based on directions and steps
    static int distance(int n, int a[], String d[]) {
        int x = 0, y = 0;  // Initialize x and y coordinates
        String ans = "";  // String to hold all the directions
        
        // Concatenate all the directions into one string
        for (String s : d) {
            ans += s;
        }

        // Process each direction in the concatenated string
        for (int i = 0; i < n; i++) {
            if (ans.charAt(i) == 'N') {
                y += a[i];  // Move north (increase y)
            }
            if (ans.charAt(i) == 'E') {
                x += a[i];  // Move east (increase x)
            }
            if (ans.charAt(i) == 'S') {
                y -= a[i];  // Move south (decrease y)
            }
            if (ans.charAt(i) == 'W') {
                x -= a[i];  // Move west (decrease x)
            }
        }

        // Calculate the Euclidean distance from the origin (0, 0)
        int dis = (int) Math.ceil(Math.sqrt((x * x) + (y * y)));

        // Add the steps from all directions to the distance
        for (int i : a) {
            dis += i;
        }

        return dis;  // Return the final distance
    }
}
