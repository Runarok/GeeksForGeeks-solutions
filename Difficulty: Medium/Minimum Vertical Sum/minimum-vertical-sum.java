//{ Driver Code Starts
// Initial Template for Java

/*package whatever //do not write package name here */

import java.io.*;
import java.util.*;
import java.util.ListIterator;

class GFG {
    public static void main(String[] args) {
        // Creating an object of class Scanner
        Scanner sc = new Scanner(System.in);

        // Taking input the total number of testcases
        int t = sc.nextInt();

        while (t-- > 0) {
            // Taking the total number of rows
            int n = sc.nextInt();
            sc.nextLine();
            // Declaring and Initalizing an ArrayList
            ArrayList<ArrayList<Integer>> arr = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                // Taking the number of columns
                String tempS[] = sc.nextLine().trim().split(" ");
                // Declaring and Intializing an ArrayList for each row
                ArrayList<Integer> temp = new ArrayList<>();
                int m = tempS.length;
                for (int j = 0; j < m; j++) {
                    temp.add(Integer.parseInt(tempS[j]));
                }

                arr.add(temp);
            }

            // Calling the method minimum_verical_sum
            System.out.println(minimumVerticalSum(arr));
        }
    }

    
// } Driver Code Ends

// User function Template for Java

public static int minimumVerticalSum(ArrayList<ArrayList<Integer>> arr) {
    // Initialize variable to track the maximum number of columns
    int maxLength = 0;
    
    // Find the maximum length of any column (list)
    for (ArrayList<Integer> column : arr) {
        maxLength = Math.max(maxLength, column.size());
    }
    
    // Array to store the sum of each column
    int[] columnSum = new int[maxLength];
    
    // Calculate the sum of elements for each column
    for (ArrayList<Integer> column : arr) {
        for (int j = 0; j < column.size(); j++) {
            columnSum[j] += column.get(j);
        }
    }
    
    // Find the minimum vertical sum from the calculated column sums
    int minSum = Integer.MAX_VALUE;
    for (int sum : columnSum) {
        minSum = Math.min(minSum, sum);
    }
    
    // Return the minimum vertical sum
    return minSum;
}


//{ Driver Code Starts.
}
// } Driver Code Ends