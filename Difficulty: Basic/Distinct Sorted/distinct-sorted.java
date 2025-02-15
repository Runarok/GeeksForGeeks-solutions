//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;
import java.util.ListIterator;

class GFG {
    public static void main(String[] args) {

        // taking input using class Scanner
        Scanner sc = new Scanner(System.in);

        // taking total count of testcases
        int t = sc.nextInt();
        sc.nextLine();
        while (t-- > 0) {
            // taking total count of elements
            String temp[] = sc.nextLine().trim().split(" ");
            int n = temp.length;

            // Declaring and Initializing
            // an ArrayList of type Integer
            int arr[] = new int[n];

            // adding elements to the ArrayList
            for (int i = 0; i < n; i++) {
                arr[i] = Integer.parseInt(temp[i]);
            }
            Solution ob = new Solution();
            // Calling uniqueSorted method
            // and printing the elements
            for (int i : ob.uniqueSorted(arr)) System.out.print(i + " ");

            System.out.println();
        }
    }
}

// } Driver Code Ends

// User function Template for Java

class Solution {
    public static ArrayList<Integer> uniqueSorted(int arr[]) {
        // Sort the input array
        Arrays.sort(arr);

        // Use a HashSet to store unique elements
        Set<Integer> uniqueElements = new HashSet<>();
        for (int num : arr) {
            uniqueElements.add(num);
        }

        // Convert the set to an ArrayList
        ArrayList<Integer> sortedUniqueList = new ArrayList<>(uniqueElements);

        return sortedUniqueList;
    }
}
