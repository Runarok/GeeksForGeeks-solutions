//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        // taking input using Scanner class
        Scanner sc = new Scanner(System.in);

        // taking total count of testcases
        int t = sc.nextInt();
        sc.nextLine();
        while (t > 0) {
            // taking elements count
            String temp[] = sc.nextLine().trim().split(" ");
            int n = temp.length;

            // creating an array of length n
            int arr[] = new int[n];

            // adding elements to the array
            for (int i = 0; i < n; i++) arr[i] = Integer.parseInt(temp[i]);

            // creating an object of class Solutions
            Solution ob = new Solution();

            // calling the method findNumberOfTriangles()
            // of class Solutions and printing the results
            System.out.println(ob.findNumberOfTriangles(arr));
            t--;
        }
    }
}

// } Driver Code Ends


// User function Template for Java

class Solution {
    // Function to count the number of possible triangles.
    static int findNumberOfTriangles(int arr[]) {
        int ans = 0;  // Variable to store the count of valid triangles
        int n = arr.length;  // Length of the input array
        
        // Sort the array to make sure we can check the triangle condition
        Arrays.sort(arr);
        
        // Iterate through the array to check all combinations of triplets
        for (int i = 0; i < n - 2; i++) {
            for (int j = i + 1; j < n - 1; j++) {
                for (int k = j + 1; k < n; k++) {
                    int a = arr[i];
                    int b = arr[j];
                    int c = arr[k];
                    
                    // Check if the three sides satisfy the triangle inequality
                    if (a + b > c && b + c > a && a + c > b) {
                        ans++;  // If valid triangle, increment the count
                    } else {
                        break;  // If the triangle inequality fails, stop checking further combinations
                    }
                }
            }
        }
        return ans;  // Return the total number of valid triangles
    }
}
