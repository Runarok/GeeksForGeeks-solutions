//{ Driver Code Starts

import java.io.*;
import java.util.*;


// } Driver Code Ends

// User function template for Java

class Solution {
    public long countPairs(int[] arr) {
        long countTwo = 0, countGreaterThanTwo = 0;

        // Count occurrences of 2 and numbers greater than 2
        for (int num : arr) {
            if (num == 2) countTwo++;
            if (num > 2) countGreaterThanTwo++;
        }

        // Calculate the valid pairs
        return (countTwo * countGreaterThanTwo) + 
               (countGreaterThanTwo * (countGreaterThanTwo - 1) / 2);
    }
}


//{ Driver Code Starts.

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        sc.nextLine(); // Consume the newline after the integer input

        while (t-- > 0) {
            String input = sc.nextLine();
            String[] inputArray = input.split(" ");
            int[] arr = Arrays.stream(inputArray).mapToInt(Integer::parseInt).toArray();

            Solution solution = new Solution();
            System.out.println(solution.countPairs(arr));
            System.out.println("~");
        }

        sc.close();
    }
}
// } Driver Code Ends