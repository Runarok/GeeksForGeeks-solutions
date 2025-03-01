//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String[] args) {

        // taking input using class Scanner
        Scanner sc = new Scanner(System.in);

        // taking test cases
        int testcases = sc.nextInt();

        while (testcases-- > 0) {

            // taking 2 variables a,b
            float a = sc.nextFloat();
            float b = sc.nextFloat();

            // creating an object of class Solution
            Solution g = new Solution();

            // calling divisionWithPrecision() method
            ArrayList<Float> res = g.divisionWithPrecision(a, b);

            // Printing the result
            System.out.println(res.get(0) + " " + res.get(1));
            System.out.println("~");
        }

        sc.close(); // close scanner to avoid resource leak
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution {
    // Function to return an ArrayList with exact result and formatted result
    static ArrayList<Float> divisionWithPrecision(float a, float b) {
        // Create an ArrayList to store the results
        ArrayList<Float> resultList = new ArrayList<Float>();

        // Add the exact division result to the list
        resultList.add(a / b);

        // Format the division result to 3 decimal places and add to the list
        float formattedResult = Float.parseFloat(String.format("%.3f", a / b));
        resultList.add(formattedResult);

        // Return the ArrayList containing both results
        return resultList;
    }
}
