//{ Driver Code Starts
//Initial Template for Java

import java.util.*;
import java.lang.*;
import java.math.*;
import java.io.*;

class GFG {
  public static void main(String[] args) throws IOException {
    Scanner sc = new Scanner(System.in);
    int T = sc.nextInt();
    while (T-- > 0) {
      int n = sc.nextInt();
      Solution obj = new Solution();
      int ans = obj.uglyNumber(n);
      System.out.println(ans);
    
System.out.println("~");
}
  }
}


// } Driver Code Ends

// User function Template for Java

class Solution {
  // Function to find the nth ugly number
  public static int uglyNumber(int n) {
      if (n <= 0) return 0;  // If n is less than or equal to 0, return 0 as there are no ugly numbers
      int[] ugly = new int[n];  // Array to store the ugly numbers
      ugly[0] = 1;  // The first ugly number is always 1

      // Pointers to track the next multiple of 2, 3, and 5
      int p2 = 0, p3 = 0, p5 = 0;

      // Next multiples for 2, 3, and 5
      int nextMultipleOf2 = 2;
      int nextMultipleOf3 = 3;
      int nextMultipleOf5 = 5;

      // Loop to find the next ugly numbers
      for (int i = 1; i < n; i++) {
          // Find the next ugly number by taking the minimum of the next multiples
          int nextNumber = Math.min(nextMultipleOf2, Math.min(nextMultipleOf3, nextMultipleOf5));
          ugly[i] = nextNumber;  // Assign the next ugly number to the array

          // Update the pointers and next multiples based on the chosen minimum
          if (nextNumber == nextMultipleOf2) {
              p2++;
              nextMultipleOf2 = ugly[p2] * 2;  // Update next multiple of 2
          }
          if (nextNumber == nextMultipleOf3) {
              p3++;
              nextMultipleOf3 = ugly[p3] * 3;  // Update next multiple of 3
          }
          if (nextNumber == nextMultipleOf5) {
              p5++;
              nextMultipleOf5 = ugly[p5] * 5;  // Update next multiple of 5
          }
      }

      // Return the nth ugly number
      return ugly[n - 1];
  }
}
