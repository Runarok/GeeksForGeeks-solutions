//{ Driver Code Starts
//Initial Template for Java

import java.io.*;
import java.util.*;

class GFG
{
    public static void main(String args[])throws IOException
    {   
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while(t-- > 0)
        {
            int x = sc.nextInt();
            int y = sc.nextInt();
            int z = sc.nextInt();

            Solution ob = new Solution();
            System.out.println(ob.findValue(x, y, z));
        }
    }
}
// } Driver Code Ends

class Solution{
    // Function to find the GCD of the LCM of x, y and the LCM of x, z
    static long findValue(int x, int y, int z){
        // Calculate LCM of x and y, then LCM of x and z
        // Find GCD of the two LCMs calculated above
        return gcd(lcm(x, y), lcm(x, z));
    }
    
    // Function to calculate the Greatest Common Divisor (GCD) of two numbers a and b
    static long gcd(long a, long b){
        // Base case: If b becomes 0, return a as the GCD
        if (b == 0) {
            return a;
        }
        // Recursive step: GCD of b and remainder of a divided by b
        return gcd(b, a % b);
    }

    // Function to calculate the Least Common Multiple (LCM) of two numbers a and b
    static long lcm(long a, long b){
        // LCM formula: (a * b) / GCD(a, b)
        return (a * b) / gcd(a, b);
    }
}
