//{ Driver Code Starts
// Initial Template for Java

/*package whatever //do not write package name here */

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String[] args) {

        // taking input using Scanner class
        Scanner sc = new Scanner(System.in);

        // taking total count of testcases
        int t = sc.nextInt();
        sc.nextLine();
        while (t-- > 0) {
            // taking count of elements in
            // the first array
            String temp[] = sc.nextLine().trim().split(" ");
            int n1 = temp.length;

            // creating the array-1 of length n1
            int arr1[] = new int[n1];

            // adding elements to array-1
            for (int i = 0; i < n1; i++) arr1[i] = Integer.parseInt(temp[i]);

            // taking count of elements in
            // second array
            temp = sc.nextLine().trim().split(" ");
            int n2 = temp.length;

            // creating the array-2 of length n2
            int arr2[] = new int[n2];

            // adding elements to array-2
            for (int i = 0; i < n2; i++) arr2[i] = Integer.parseInt(temp[i]);

            // calling the method areEqual()
            // and passing array-1,2 and length
            // n1,n2 and printing the reuslt
            System.out.println(areEqual(arr1, arr2));
        }
    }

    
// } Driver Code Ends

// User function Template for Java

public static boolean areEqual(int firstArray[], int secondArray[]) {
    // Iterating through both arrays and comparing corresponding elements
    for (int index = 0; index < firstArray.length; index++) {
        if (firstArray[index] != secondArray[index]) {
            return false; // Return false if any elements are not equal
        }
    }
    return true; // Return true if all elements are equal
}



//{ Driver Code Starts.
}

// } Driver Code Ends