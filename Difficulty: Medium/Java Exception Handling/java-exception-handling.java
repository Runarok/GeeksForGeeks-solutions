//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.Scanner;

class GFG {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while (t-- > 0) {
            int a = sc.nextInt();
            int b = sc.nextInt();
            Solution sln = new Solution();
            System.out.println(sln.findMin(a, b));

            System.out.println("~");
        }
    }
}


// } Driver Code Ends

// User function Template for Java

class Solution {
    public int findMin(int a, int b) {
        int min = Integer.MAX_VALUE;
        
        try {
            // Perform addition and update min
            int sum = a + b;
            min = Math.min(min, sum);
            
            // Perform subtraction and update min
            int difference = a - b;
            min = Math.min(min, difference);
            
            // Perform multiplication and update min
            int product = a * b;
            min = Math.min(min, product);
            
            // Perform division (handle exception for division by zero)
            int quotient = a / b;
            min = Math.min(min, quotient);
        } catch (Exception e) {
            // Exception handling (ignored)
        }
        
        return min;
    }
}

//{ Driver Code Starts.
// } Driver Code Ends