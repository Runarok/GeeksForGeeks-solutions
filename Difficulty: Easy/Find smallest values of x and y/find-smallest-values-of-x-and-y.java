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
            String arr[] = in.readLine().trim().split("\\s+");
            int a = Integer.parseInt(arr[0]);
            int b = Integer.parseInt(arr[1]);
            
            Solution ob = new Solution();
            List<Integer> ans = new ArrayList<Integer>();
            ans = ob.findXY(a, b);
            System.out.println(ans.get(0) + " " + ans.get(1));
        }
    }
}
// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to find the greatest common divisor (GCD) of two numbers
    static int gcd(int a, int b) {
        // If b is zero, return a as the GCD
        if (b == 0) return a;

        // Use Euclidean algorithm to calculate the GCD
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    // Function to find integers x and y such that (a * y) - (b * x) = 0
    static List<Integer> findXY(int a, int b) {
        List<Integer> l = new ArrayList<>();

        // Calculate the GCD of a and b
        int g = gcd(a, b);

        // Calculate x and y based on the GCD
        int x = a / g;
        int y = b / g;

        // Check if the condition (a * y) - (b * x) = 0 holds true
        if ((a * y) - (b * x) == 0) {
            l.add(y); // Add y to the list
            l.add(x); // Add x to the list
        }

        // Return the list of integers x and y
        return l;
    }
}
