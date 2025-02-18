//{ Driver Code Starts
//Initial Template for Java
import java.io.*;
import java.util.*;

class GFG{
    public static void main(String args[])throws IOException
    {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine());
        while(t-- > 0)
        {
            int n = Integer.parseInt(read.readLine());
            String input_line[] = read.readLine().trim().split("\\s+");
            int arr[]= new int[n];
            for(int i = 0; i < n; i++)
                arr[i] = Integer.parseInt(input_line[i]);
            
            Solution ob = new Solution();
            System.out.println(ob.findLargestSubarray(arr, n));
        }
    }
}
// } Driver Code Ends

// User function Template for Java
class Solution
{
    static int findLargestSubarray(int arr[], int n)
    {
        // Initialize the GCD with the first element of the array
        int x = arr[0];
        
        // Iterate over the array to find the GCD of all elements
        for (int i = 1; i < n; i++)
        {
            // Update the GCD of the current element and the result so far
            x = findGCD(x, arr[i]);
        }
        
        // If the GCD of the entire array is 1, return the size of the array
        if (x == 1)
        {
            return n;
        }
        else
        {
            // If GCD is not 1, return -1 as no subarray with GCD 1 exists
            return -1;
        }
    }
    
    // Helper method to compute the GCD of two numbers
    public static int findGCD(int a, int b) {
        if (b == 0) {
            return a; // If the second number is 0, return the first number
        }
        // Recursive call to find the GCD using Euclidean algorithm
        return findGCD(b, a % b);
    }
}
